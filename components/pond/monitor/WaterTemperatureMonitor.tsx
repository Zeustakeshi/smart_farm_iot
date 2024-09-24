import { WaterQualityStatus } from "@/common/type/monitor.type";
import { isInRange, randomSign } from "@/lib/utils";
import React, { useCallback, useEffect, useState } from "react";
import PondMonitorItem from "./PondMonitorItem";

const temperatureLevels: Record<
    WaterQualityStatus,
    { min: number; max: number }
> = {
    [WaterQualityStatus.OPTIMAL]: { min: 26, max: 30 },
    [WaterQualityStatus.GOOD]: { min: 24, max: 26 },
    [WaterQualityStatus.WARNING]: { min: 22, max: 24 },
    [WaterQualityStatus.CRITICAL]: { min: 20, max: 22 },
    [WaterQualityStatus.UNSAFE]: { min: 0, max: 20 },
    [WaterQualityStatus.ERROR]: { min: NaN, max: NaN },
};
type Props = {};

const WaterTemperatureMonitor = (props: Props) => {
    const [temperatureLevel, setTemperatureLevel] = useState<number>(25);

    const getTemperatureLevelStatus = useCallback(() => {
        if (
            isInRange(
                temperatureLevel,
                temperatureLevels[WaterQualityStatus.OPTIMAL]
            )
        ) {
            return WaterQualityStatus.OPTIMAL;
        }
        if (
            isInRange(
                temperatureLevel,
                temperatureLevels[WaterQualityStatus.GOOD]
            )
        ) {
            return WaterQualityStatus.GOOD;
        }

        if (
            isInRange(
                temperatureLevel,
                temperatureLevels[WaterQualityStatus.WARNING]
            )
        ) {
            return WaterQualityStatus.WARNING;
        }

        if (
            isInRange(
                temperatureLevel,
                temperatureLevels[WaterQualityStatus.CRITICAL]
            )
        ) {
            return WaterQualityStatus.CRITICAL;
        }

        if (
            isInRange(
                temperatureLevel,
                temperatureLevels[WaterQualityStatus.UNSAFE]
            )
        ) {
            return WaterQualityStatus.UNSAFE;
        }
    }, [temperatureLevel]);

    useEffect(() => {
        const minVal = 8;
        const maxVal = 40;
        const interval = setInterval(() => {
            setTemperatureLevel((prevValue) =>
                Math.max(
                    Math.min(Math.abs(prevValue + randomSign()), maxVal),
                    minVal
                )
            );
        }, 8000);
        return () => {
            console.log("clear interval");
            clearInterval(interval);
        };
    }, []);

    return (
        <PondMonitorItem
            unit="°C"
            value={temperatureLevel}
            status={getTemperatureLevelStatus()}
            label="Nhiệt độ nước"
        ></PondMonitorItem>
    );
};

export default WaterTemperatureMonitor;
