export type Logger = (message: string, ...others: unknown[]) => void;
export declare const getDebugLogger: (context: string) => Logger;
export declare const getErrorLogger: (context: string) => Logger;
export declare const enableDebugLogs: () => void;
