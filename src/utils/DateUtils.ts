/**
 * 日期工具类
 * 部分实现代码参考互联网开源项目
 */
class DateUtils {

	/**
	 * 格式化时间
	 * @param time 时间（秒）
	 * @param format 格式如  00:00:00
	 */
	public static formatTime(time:number, showHour:boolean = true, format:string = ":"):string
	{
		var hour:number = Math.floor(time  / 3600);
		var mins:number = Math.floor((time % 3600) / 60);
		var secs:number = time % 60;

		var hourStr:string = hour.toString();
		var minStr:string = mins.toString();
		var secStr:string = secs.toString();

		if(hour < 10)
			hourStr = "0" + hour;
		if(mins < 10)
			minStr = "0" + mins;
		if(secs < 10)
			secStr = "0" + secs;

		if(!showHour)
			return minStr + format + secStr;

		return hourStr + format + minStr + format + secStr;
	}
	/**
	 * 返回两个时间的相差时间，字符串表示，如3天2小时
	 * 
	 */
	public static getDateDiff(startTime:number, endTime:number):string 
	{
		var difArr:Array<number> = DateUtils.getDateDiffArr(startTime, endTime);
		var str:string = "";
		if (difArr[0] > 0) str += difArr[0] + "天";
		if (difArr[1] > 0) str += difArr[1] + "小时";
		if (difArr[2] > 0) str += difArr[2] + "分";
		if (difArr[3] > 0) str += difArr[3] + "秒";
		return str;
    }

	/**
	 * 两个时间的差值
	 * @param startTime 毫秒
	 * @param endTime 毫秒
	 * @returns {number[天,小时,分,秒]}
	 */
	public static getDateDiffArr(startTime:number, endTime:number):Array<number> 
	{
		var diffValue:number = Math.abs(endTime - startTime);
		//计算出相差天数
		var days:number = Math.floor(diffValue/(24*3600*1000));
		//计算出小时数
		var leave1:number = diffValue % (24*3600*1000);    //计算天数后剩余的毫秒数
		var hours:number = Math.floor(leave1/(3600*1000));

		//计算相差分钟数
		var leave2:number = leave1%(3600*1000);        //计算小时数后剩余的毫秒数
		var minutes:number = Math.floor(leave2/(60*1000));

		//计算相差秒数
		var leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
		var seconds=Math.round(leave3/1000);
		return [days, hours, minutes, seconds];
	}

	/**
	 * 将 Date 转化为指定格式的String
	 * @param date
	 * @param fmt "yyyy-M-d h:m:s.S" ==> 2006-7-2 8:9:4.18   "yyyy-MM-dd hh:mm:ss.S" ==> 2006-07-02 08:09:04.423
	 * @returns {string}
	 */
	public static dateFormat(date:Date, fmt:string = "yyyy-MM-dd hh:mm:ss"):string 
	{
		var o = {
			"M+": date.getMonth() + 1, //月份
			"d+": date.getDate(), //日
			"h+": date.getHours(), //小时
			"m+": date.getMinutes(), //分
			"s+": date.getSeconds(), //秒
			"q+": Math.floor((date.getMonth() + 3) / 3), //季度
			"S": date.getMilliseconds() //毫秒
		};

		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
			if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));

		return fmt;
	}

}