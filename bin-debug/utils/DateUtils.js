var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 日期工具类
 * 部分实现代码参考互联网开源项目
 */
var DateUtils = (function () {
    function DateUtils() {
    }
    /**
     * 格式化时间
     * @param time 时间（秒）
     * @param format 格式如  00:00:00
     */
    DateUtils.formatTime = function (time, showHour, format) {
        if (showHour === void 0) { showHour = true; }
        if (format === void 0) { format = ":"; }
        var hour = Math.floor(time / 3600);
        var mins = Math.floor((time % 3600) / 60);
        var secs = time % 60;
        var hourStr = hour.toString();
        var minStr = mins.toString();
        var secStr = secs.toString();
        if (hour < 10)
            hourStr = "0" + hour;
        if (mins < 10)
            minStr = "0" + mins;
        if (secs < 10)
            secStr = "0" + secs;
        if (!showHour)
            return minStr + format + secStr;
        return hourStr + format + minStr + format + secStr;
    };
    /**
     * 返回两个时间的相差时间，字符串表示，如3天2小时
     *
     */
    DateUtils.getDateDiff = function (startTime, endTime) {
        var difArr = DateUtils.getDateDiffArr(startTime, endTime);
        var str = "";
        if (difArr[0] > 0)
            str += difArr[0] + "天";
        if (difArr[1] > 0)
            str += difArr[1] + "小时";
        if (difArr[2] > 0)
            str += difArr[2] + "分";
        if (difArr[3] > 0)
            str += difArr[3] + "秒";
        return str;
    };
    /**
     * 两个时间的差值
     * @param startTime 毫秒
     * @param endTime 毫秒
     * @returns {number[天,小时,分,秒]}
     */
    DateUtils.getDateDiffArr = function (startTime, endTime) {
        var diffValue = Math.abs(endTime - startTime);
        //计算出相差天数
        var days = Math.floor(diffValue / (24 * 3600 * 1000));
        //计算出小时数
        var leave1 = diffValue % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
        var hours = Math.floor(leave1 / (3600 * 1000));
        //计算相差分钟数
        var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
        var minutes = Math.floor(leave2 / (60 * 1000));
        //计算相差秒数
        var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
        var seconds = Math.round(leave3 / 1000);
        return [days, hours, minutes, seconds];
    };
    /**
     * 将 Date 转化为指定格式的String
     * @param date
     * @param fmt "yyyy-M-d h:m:s.S" ==> 2006-7-2 8:9:4.18   "yyyy-MM-dd hh:mm:ss.S" ==> 2006-07-02 08:09:04.423
     * @returns {string}
     */
    DateUtils.dateFormat = function (date, fmt) {
        if (fmt === void 0) { fmt = "yyyy-MM-dd hh:mm:ss"; }
        var o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };
    return DateUtils;
}());
__reflect(DateUtils.prototype, "DateUtils");
//# sourceMappingURL=DateUtils.js.map