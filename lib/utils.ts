import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function randomColor() {
    const colors = ["#16a34a", "#2563eb", "#4338ca", "#e11d48"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

export const randomSign = () => (Math.random() < 0.5 ? -1 : 1);

export const isInRange = (
    value: number,
    range: { min: number; max: number }
): boolean => {
    return value >= range.min && value <= range.max;
};

export const sleep = (ms: number): Promise<void> => {
    return new Promise((rs) => {
        setTimeout(() => {
            rs();
        }, ms);
    });
};
