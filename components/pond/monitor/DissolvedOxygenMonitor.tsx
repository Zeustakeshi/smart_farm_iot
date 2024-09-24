import { WaterQualityStatus } from "@/common/type/monitor.type";
import { isInRange, randomSign } from "@/lib/utils";
import React, { useCallback, useEffect, useState } from "react";
import PondMonitorItem from "./PondMonitorItem";

const DOLevels: Record<WaterQualityStatus, { min: number; max: number }> = {
    [WaterQualityStatus.OPTIMAL]: { min: 7, max: Infinity },
    [WaterQualityStatus.GOOD]: { min: 5, max: 7 },
    [WaterQualityStatus.WARNING]: { min: 3, max: 5 },
    [WaterQualityStatus.CRITICAL]: { min: 2, max: 3 },
    [WaterQualityStatus.UNSAFE]: { min: 0, max: 2 },
    [WaterQualityStatus.ERROR]: { min: NaN, max: NaN },
};

type Props = {};

const DissolvedOxygenMonitor = (props: Props) => {
    const [DOLevel, setDOLevel] = useState<number>(6);

    const getDOLevelStatus = useCallback(() => {
        if (isInRange(DOLevel, DOLevels[WaterQualityStatus.OPTIMAL])) {
            return WaterQualityStatus.OPTIMAL;
        }
        if (isInRange(DOLevel, DOLevels[WaterQualityStatus.GOOD])) {
            return WaterQualityStatus.GOOD;
        }

        if (isInRange(DOLevel, DOLevels[WaterQualityStatus.WARNING])) {
            return WaterQualityStatus.WARNING;
        }

        if (isInRange(DOLevel, DOLevels[WaterQualityStatus.CRITICAL])) {
            return WaterQualityStatus.CRITICAL;
        }

        if (isInRange(DOLevel, DOLevels[WaterQualityStatus.UNSAFE])) {
            return WaterQualityStatus.UNSAFE;
        }
    }, [DOLevel]);

    useEffect(() => {
        const minVal = 5;
        const maxVal = 8;
        const interval = setInterval(() => {
            setDOLevel((prevValue) =>
                Math.max(
                    Math.min(Math.abs(prevValue + randomSign() * 0.5), maxVal),
                    minVal
                )
            );
        }, 2000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <PondMonitorItem
            unit="mg/L"
            value={DOLevel}
            label="Oxy hòa tan"
            status={getDOLevelStatus()}
        ></PondMonitorItem>
    );
};

export default DissolvedOxygenMonitor;
