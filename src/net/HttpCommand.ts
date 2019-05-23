/**
 * @example
 * 		var command:CommandVo = new CommandVo();
        command.action = "login";
		command.params = {"username":"ddddd"};
        NetCommand.send(command, thisObj, callBack);
		function callBack(data:any):void{}
 */
class HttpCommand {

	public static cookie:string = "";
	public static LOGIN:string = "login"; //登陆
	public static GETIP:string = "getIpByRoomId"; //进入房间前获取ip
	public static REQUEST_TIMEOUT:number = 8000; //请求超时时间，超过次时间弹出网络超时提示

	private static _timerId:number = -1;

	public static send(data:CommandVo, thisObj:any, callBack:Function = null):void
	{
		var request:egret.HttpRequest = new egret.HttpRequest();
		request.responseType = egret.HttpResponseType.TEXT;
		request.open(HttpCommand.rebuild2(data),egret.HttpMethod.GET);
		// request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send();

		// var loader:egret.URLLoader = new egret.URLLoader();
        // loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        request.addEventListener(egret.Event.COMPLETE,onGetComplete,this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR,onGetIOError,this);

		DataLoading.getInstance().show();
		HttpCommand._timerId = egret.setTimeout(timeOutHandle, this, HttpCommand.REQUEST_TIMEOUT);
		function timeOutHandle():void
		{
			egret.clearTimeout(HttpCommand._timerId);
		}

		function onGetComplete(event:egret.Event):void 
		{
			// 隐藏加载图片
			DataLoading.getInstance().hide();
			// 清除延时加载
			egret.clearTimeout(HttpCommand._timerId);

			var loader:egret.HttpRequest = <egret.HttpRequest> event.target;
            loader.removeEventListener(egret.Event.COMPLETE,onGetComplete,this);
            loader.removeEventListener(egret.IOErrorEvent.IO_ERROR,onGetIOError,this);

// 			{'code' :0, 'data':
// {'address':null,'headlmgUrl':'http://wx.qlogo.cn/mmopen/wibbRT3lwkCR4W9XNicL2h2pgaLepm rmEsXbWKbVov9ugtdibibDgRlybONia WFtVeVtYWGWhObRiaiaicMgw8zat8Y5p6YzQbjdstE2/0','Ievel':
// 1,'nickName':'276037','playerld':
// 276037,' port' :'l 0007', 'remotelp':'l 2
// 4.74.142.38','roomCardNum':
// 1 0,'roomld' :nuII,'serverlp': '39.107.96.1
// 17','teaHouseNum':nuII,'token':'2c43 aa6aa4cf9ldOd7Ol 5c400a71 b648','wi
// nProbability':
// 0,'x':nuN,'y' :nuII},'desc':nuII, 'gameType':O,'msgType':O}
            var data:any = loader.response;
            data = JSON.parse(data.toString());
			var code:number = data["code"];
			//登陆失败
			if(code != 0)
			{
				AlertView.getInstance().show(data["desc"], AlertView.ALERT_MODE);
			}
			else
			{
				if(callBack != null)
				{
					callBack.apply(thisObj, [data]);
				}
			}
		}

		function onGetIOError():void
		{
			DataLoading.getInstance().hide();
			egret.clearTimeout(HttpCommand._timerId);
			
            request.removeEventListener(egret.Event.COMPLETE,onGetComplete,this);
            request.removeEventListener(egret.IOErrorEvent.IO_ERROR,onGetIOError,this);
            
			AlertView.getInstance().show("请求接口失败：egret.IOErrorEvent.IO_ERROR", AlertView.ALERT_MODE);
        }
	}

	public static rebuild2(data:CommandVo):string
	{
		var version:string = Math.random().toString();

        var paramObj:Object = data.params;
        var actionStr:string = data.action+"?";
        var cookieStr:string = "";
        var args:string = "";

        if(paramObj)
		 {
            for(var arg in paramObj)
            {
                args += "&" + arg + "=" + paramObj[arg];
            }
        }
		args = args.substring(1);
		if(args != "")
        	return GameGlobal.HTTP_API_URL + actionStr  + args +  "&code="+GameModel.instance().code+"&deviceType="+GameModel.instance().deviceType+"&v=" + version;
		else
			return GameGlobal.HTTP_API_URL + actionStr +  "code="+GameModel.instance().code+"&deviceType="+GameModel.instance().deviceType+"&v=" + version;
	}

	public static rebuild(data:CommandVo):Object
	{
		var version:string = Math.random().toString();
		var paramObj:Object = data.params;
		paramObj = paramObj || {};
		paramObj["code"] = GameModel.instance().token;
		paramObj["deviceType"] = GameModel.instance().deviceType;
        return paramObj;
	}
}
class CommandVo{

	public module:string = ""; //模块，暂无用途
	public action:string = ""; //处理接口，如login
	public params:any = {}; //参数

	public constructor(action:string = "", params:any = null)
	{
		this.action = action;
		this.params = params;
	}
}