/**
 *
 * @author 
 *
 */
module StringUtils {
    
    /**
     * 
     */
    export function getStringLen(str:string):number
    {
        var realLength:number = 0, len = str.length, charCode = -1;
        for (var i = 0; i < len; i++) 
        {
            charCode = str.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128) realLength += 1;
            else realLength += 2;
        }
        return realLength;
    }

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
    export function padLeft(p_string: string,p_padChar: string,p_length: number): string 
    {
        var s: string = p_string;
        while(s.length < p_length) { s = p_padChar + s; }
        return s;
    }

    // 判断字符是不是中文
    export function isZH_CNString(p_string: string): boolean
     {
        if(p_string == null) {
            return false;
        }
        var regx: RegExp = /^[\u4e00-\u9fa5]+$/;
        return regx.test(p_string);
    }


    /**
     * 格式化字符串(金钱，如：100,000,000)
     * @param value
     * @param hasSign 是否带符号
     * @return "xx,xxx"
     *
     */
    export function changToMoney(value:string ,hasSign:boolean = false):string{
        var i:number = 0;
        var count:number = 0;
        var str:string = "";
        if(hasSign){
            if(value.charCodeAt(0) >= 48 && value.charCodeAt(0) <= 57){
                value = "+" + value;
            }
        }
        for(i = value.length - 1; i >= 0; i--){
            str = value.charAt(i) + str;
            if(value.charCodeAt(i) >= 48 && value.charCodeAt(i) <= 57){
                if(value.charCodeAt(i-1) >= 48 && value.charCodeAt(i-1) <= 57){
                    count ++;
                    if(count == 3){
                        str = "," + str;
                        count = 0;
                    }
                }
            }else {
                count = 0;
            }
        }
        return str;
    }


    /**
        格式化字符串，如id={0} -> id=2 
        注意：数字占位符从0开始
    */
    export function format(str: string,values: Array<any>): string
    { 
        var len: number = values.length;
        for(var i: number = 0;i < len;i++)
        { 
            str = str.replace("{" + i + "}", values[i]);
        }
        return str;
    }
    /**
        比较两个字符串是否相等
    */
    export function isEqual(str: string,str2: string, isIgnoreCase:boolean = false): boolean
    { 
        if(isIgnoreCase)
            return str.toLowerCase() == str2.toLowerCase();
        return str == str2;
    }
    
    /**
    * 将\r\n 修正为\n linux系统采用\n换行符，而windows采用\r\n换行符
    * @param	$str	源字符串
    * @return	结果字符串
    */
    export function fixNewline(str:string):string
    {
        return str.replace(/\r\n/gm, "\n");
    }
    /**
    * 去除左右空格
    */
    export function trim(str: string):string
    { 
        return ltrim(rtrim(str));
    }
    
    /**
    * 去除左空格
    * @param	$str	源字符串
    * @return	去除左空格的字符串
    */
    export function ltrim(str:string):string
    {
        return str.replace(/^\s*/, "");
    }
    /**
    * 去除右空格
    * @param	$str	源字符串
    * @return	去除右空格的字符串
    */
    export function rtrim(str:string):string
    {
        return str.replace(/\s*$/, "");
    }
}
