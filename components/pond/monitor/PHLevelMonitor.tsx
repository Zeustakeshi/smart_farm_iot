import { WaterQualityStatus } from "@/common/type/monitor.type";
import { isInRange, randomSign } from "@/lib/utils";
import React, { useCallback, useEffect, useState } from "react";
import PondMonitorItem from "./PondMonitorItem";

const pHLevels: Record<WaterQualityStatus, { min: number; max: number }> = {
    [WaterQualityStatus.OPTIMAL]: { min: 6.5, max: 7.5 },
    [WaterQualityStatus.GOOD]: { min: 6.0, max: 8.0 },
    [WaterQualityStatus.WARNING]: { min: 5.5, max: 8.5 },
    [WaterQualityStatus.CRITICAL]: { min: 5.0, max: 9.0 },
    [WaterQualityStatus.UNSAFE]: { min: 0, max: 14.0 },
    [WaterQualityStatus.ERROR]: { min: NaN, max: NaN },
};

type Props = {};
const PHLevelMonitor = (props: Props) => {
    const [pHLevel, setPHLebel] = useState<number>(6.5);

    const getPhLevelStatus = useCallback(() => {
        if (isInRange(pHLevel, pHLevels[WaterQualityStatus.OPTIMAL])) {
            return WaterQualityStatus.OPTIMAL;
        }
        if (isInRange(pHLevel, pHLevels[WaterQualityStatus.GOOD])) {
            return WaterQualityStatus.GOOD;
        }

        if (isInRange(pHLevel, pHLevels[WaterQualityStatus.WARNING])) {
            return WaterQualityStatus.WARNING;
        }

        if (isInRange(pHLevel, pHLevels[WaterQualityStatus.CRITICAL])) {
            return WaterQualityStatus.CRITICAL;
        }

        if (isInRange(pHLevel, pHLevels[WaterQualityStatus.UNSAFE])) {
            return WaterQualityStatus.UNSAFE;
        }
    }, [pHLevel]);

    useEffect(() => {
        const minVal = 5;
        const maxVal = 8;
        const interval = setInterval(() => {
            setPHLebel((prevValue) =>
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
            unit="pH"
            value={pHLevel}
            status={getPhLevelStatus()}
            label="Độ pH"
        ></PondMonitorItem>
    );
};

export default PHLevelMonitor;
