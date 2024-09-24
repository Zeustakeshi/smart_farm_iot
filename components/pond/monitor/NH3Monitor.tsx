import { useMonitorAlert } from "@/app/context/MonitorAlertContext";
import { WaterQualityStatus } from "@/common/type/monitor.type";
import { isInRange } from "@/lib/utils";
import React, { useCallback, useEffect, useRef, useState } from "react";
import PondMonitorItem from "./PondMonitorItem";

const NH3Levels: Record<WaterQualityStatus, { min: number; max: number }> = {
    [WaterQualityStatus.OPTIMAL]: { min: 0, max: 0.02 },
    [WaterQualityStatus.GOOD]: { min: 0.02, max: 0.05 },
    [WaterQualityStatus.WARNING]: { min: 0.05, max: 0.1 },
    [WaterQualityStatus.CRITICAL]: { min: 0.1, max: 0.2 },
    [WaterQualityStatus.UNSAFE]: { min: 0.2, max: Infinity },
    [WaterQualityStatus.ERROR]: { min: NaN, max: NaN },
};

type Props = {};
const NH3Monitor = (props: Props) => {
    const [NH3Level, setNH3Level] = useState<number>(0.09);

    const { alert } = useMonitorAlert();

    const getNH3Status = useCallback(() => {
        if (isInRange(NH3Level, NH3Levels[WaterQualityStatus.OPTIMAL])) {
            return WaterQualityStatus.OPTIMAL;
        }
        if (isInRange(NH3Level, NH3Levels[WaterQualityStatus.GOOD])) {
            return WaterQualityStatus.GOOD;
        }

        if (isInRange(NH3Level, NH3Levels[WaterQualityStatus.WARNING])) {
            return WaterQualityStatus.WARNING;
        }

        if (isInRange(NH3Level, NH3Levels[WaterQualityStatus.CRITICAL])) {
            return WaterQualityStatus.CRITICAL;
        }

        if (isInRange(NH3Level, NH3Levels[WaterQualityStatus.UNSAFE])) {
            return WaterQualityStatus.UNSAFE;
        }
    }, [NH3Level]);

    const stopFlag = useRef<boolean>(false);

    useEffect(() => {
        if (stopFlag.current) return;
        const status = getNH3Status();
        if (
            status === WaterQualityStatus.UNSAFE ||
            status === WaterQualityStatus.CRITICAL
        ) {
            stopFlag.current = true;
            alert([
                {
                    message:
                        "Mức NH3 đang tăng lên! Hãy kiểm tra hệ thống lọc và chất lượng nước.",
                    type: status,
                },
            ]);
        }
    }, [NH3Level]);

    useEffect(() => {
        const minVal = 0.01;
        const maxVal = 0.5;
        const interval = setInterval(() => {
            setNH3Level((prevValue) =>
                parseFloat(
                    Math.max(
                        Math.min(Math.abs(prevValue + 0.01), maxVal),
                        minVal
                    ).toFixed(2)
                )
            );
        }, 4000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <PondMonitorItem
            unit="mg/L"
            value={NH3Level}
            status={getNH3Status()}
            label="NH3"
        ></PondMonitorItem>
    );
};

export default NH3Monitor;
