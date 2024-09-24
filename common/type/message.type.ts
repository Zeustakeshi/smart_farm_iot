export type MessageType = {
    type: "NORMAL" | "YES_NO";
    isAI?: boolean;
    content: string;
};
