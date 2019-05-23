/**
 * 日志类
 */
class LogUtils {
	
	public static log(content:any, color:string="black"):void
	{
		let date = new Date();
		let minutes:number = date.getMinutes();
		let minStr:string = minutes.toString();
		minutes < 10 && (minStr == "0" + minutes);

        console.log(`${minStr}:${date.getSeconds()}:${date.getMilliseconds()} %c[${content}]`, `color:${color}`);
		// GameGlobal.logTF.appendText(content);
	}

}