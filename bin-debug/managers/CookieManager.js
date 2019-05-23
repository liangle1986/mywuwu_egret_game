var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CookieManager = (function () {
    function CookieManager() {
    }
    CookieManager.write = function (key, value) {
        var tempKey = CookieManager.COOKIE_NAME + key.toString();
        egret.localStorage.setItem(tempKey, value.toString());
    };
    CookieManager.read = function (key) {
        var tempKey = CookieManager.COOKIE_NAME + key.toString();
        egret.localStorage.getItem(tempKey);
    };
    CookieManager.remove = function (key) {
        var tempKey = CookieManager.COOKIE_NAME + key.toString();
        egret.localStorage.removeItem(tempKey);
    };
    CookieManager.clear = function () {
        egret.localStorage.clear();
    };
    CookieManager.COOKIE_NAME = "zhongle-qipai";
    return CookieManager;
}());
__reflect(CookieManager.prototype, "CookieManager");
//# sourceMappingURL=CookieManager.js.map