var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 日志类
 */
var LogUtils = (function () {
    function LogUtils() {
    }
    LogUtils.log = function (content, color) {
        if (color === void 0) { color = "black"; }
        var date = new Date();
        var minutes = date.getMinutes();
        var minStr = minutes.toString();
        minutes < 10 && (minStr == "0" + minutes);
        console.log(minStr + ":" + date.getSeconds() + ":" + date.getMilliseconds() + " %c[" + content + "]", "color:" + color);
        // GameGlobal.logTF.appendText(content);
    };
    return LogUtils;
}());
__reflect(LogUtils.prototype, "LogUtils");
//# sourceMappingURL=LogUtils.js.map