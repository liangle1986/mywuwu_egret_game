/**
 *
 * @author
 *
 */
var StringUtils;
(function (StringUtils) {
    /**
     *
     */
    function getStringLen(str) {
        var realLength = 0, len = str.length, charCode = -1;
        for (var i = 0; i < len; i++) {
            charCode = str.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128)
                realLength += 1;
            else
                realLength += 2;
        }
        return realLength;
    }
    StringUtils.getStringLen = getStringLen;
    /**
     * Pads p_string with specified character to a specified length from the left.
     *
    *	@param p_string String to pad
    *
    *	@param p_padChar Character for pad.
    *
    *	@param p_length Length to pad to.
    *
    *	@returns String
    *
    * 	@langversion ActionScript 3.0
    *	@playerversion Flash 9.0
    *	@tiptext
    */
    function padLeft(p_string, p_padChar, p_length) {
        var s = p_string;
        while (s.length < p_length) {
            s = p_padChar + s;
        }
        return s;
    }
    StringUtils.padLeft = padLeft;
    // 判断字符是不是中文
    function isZH_CNString(p_string) {
        if (p_string == null) {
            return false;
        }
        var regx = /^[\u4e00-\u9fa5]+$/;
        return regx.test(p_string);
    }
    StringUtils.isZH_CNString = isZH_CNString;
    /**
     * 格式化字符串(金钱，如：100,000,000)
     * @param value
     * @param hasSign 是否带符号
     * @return "xx,xxx"
     *
     */
    function changToMoney(value, hasSign) {
        if (hasSign === void 0) { hasSign = false; }
        var i = 0;
        var count = 0;
        var str = "";
        if (hasSign) {
            if (value.charCodeAt(0) >= 48 && value.charCodeAt(0) <= 57) {
                value = "+" + value;
            }
        }
        for (i = value.length - 1; i >= 0; i--) {
            str = value.charAt(i) + str;
            if (value.charCodeAt(i) >= 48 && value.charCodeAt(i) <= 57) {
                if (value.charCodeAt(i - 1) >= 48 && value.charCodeAt(i - 1) <= 57) {
                    count++;
                    if (count == 3) {
                        str = "," + str;
                        count = 0;
                    }
                }
            }
            else {
                count = 0;
            }
        }
        return str;
    }
    StringUtils.changToMoney = changToMoney;
    /**
        格式化字符串，如id={0} -> id=2
        注意：数字占位符从0开始
    */
    function format(str, values) {
        var len = values.length;
        for (var i = 0; i < len; i++) {
            str = str.replace("{" + i + "}", values[i]);
        }
        return str;
    }
    StringUtils.format = format;
    /**
        比较两个字符串是否相等
    */
    function isEqual(str, str2, isIgnoreCase) {
        if (isIgnoreCase === void 0) { isIgnoreCase = false; }
        if (isIgnoreCase)
            return str.toLowerCase() == str2.toLowerCase();
        return str == str2;
    }
    StringUtils.isEqual = isEqual;
    /**
    * 将\r\n 修正为\n linux系统采用\n换行符，而windows采用\r\n换行符
    * @param	$str	源字符串
    * @return	结果字符串
    */
    function fixNewline(str) {
        return str.replace(/\r\n/gm, "\n");
    }
    StringUtils.fixNewline = fixNewline;
    /**
    * 去除左右空格
    */
    function trim(str) {
        return ltrim(rtrim(str));
    }
    StringUtils.trim = trim;
    /**
    * 去除左空格
    * @param	$str	源字符串
    * @return	去除左空格的字符串
    */
    function ltrim(str) {
        return str.replace(/^\s*/, "");
    }
    StringUtils.ltrim = ltrim;
    /**
    * 去除右空格
    * @param	$str	源字符串
    * @return	去除右空格的字符串
    */
    function rtrim(str) {
        return str.replace(/\s*$/, "");
    }
    StringUtils.rtrim = rtrim;
})(StringUtils || (StringUtils = {}));
//# sourceMappingURL=StringUtils.js.map