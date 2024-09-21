export declare class ProviderNotFoundError extends Error {
    constructor();
}
export declare class ProviderTypeIsNotSupportedError extends Error {
    constructor();
}
export declare class ProviderRpcError extends Error {
    readonly code: number;
    constructor(code: number, message: string);
    toString(): string;
}
export declare class UserRejectedRequestError extends Error {
    readonly code: number;
    constructor();
}
export declare class NoServerSideError extends Error {
    constructor();
}
