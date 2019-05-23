class CookieManager {

    public static COOKIE_NAME: string = "zhongle-qipai";

    public constructor() {
    }

    public static write(key: any, value: any): void {
        var tempKey: string = CookieManager.COOKIE_NAME + key.toString();
        egret.localStorage.setItem(tempKey, value.toString());
    }

    public static read(key: any): any {
        var tempKey: string = CookieManager.COOKIE_NAME + key.toString();
        egret.localStorage.getItem(tempKey);
    }

    public static remove(key: any): void {
        var tempKey: string = CookieManager.COOKIE_NAME + key.toString();
        egret.localStorage.removeItem(tempKey);
    }

    public static clear(): void {
        egret.localStorage.clear();
    }
}