declare type DeviceOS = {
    name: DeviceOSName;
    version: string;
};
declare type DeviceBrowser = {
    name: DeviceBrowserName;
    version: string;
};
declare type DeviceOSName = "Windows Phone" | "Windows" | "macOS" | "iOS" | "Android" | "Linux" | "Chrome OS";
declare type DeviceBrowserName = "Android Browser" | "Chrome" | "Chromium" | "Firefox" | "Microsoft Edge" | "Opera" | "Brave" | "Safari";
declare type DeviceType = "desktop" | "mobile" | "tablet";
export declare type Device = {
    os: DeviceOS;
    type: DeviceType;
    browser: DeviceBrowser;
};
export declare function getBrowser(): Device;
export {};
