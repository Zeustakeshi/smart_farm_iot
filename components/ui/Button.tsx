import { cn } from "@/lib/utils";
import React from "react";
import { Pressable, PressableProps, View } from "react-native";

type Props = {} & PressableProps & React.RefAttributes<View>;

const Button = ({ children, className, ...props }: Props) => {
    return (
        <Pressable
            className={cn("my-5 bg-primary px-5  py-4 rounded-md", className)}
            {...props}
        >
            {children}
        </Pressable>
    );
};

export default Button;
