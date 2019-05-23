/**
 * 玩家信息
 */
class MyUserInfo extends egret.EventDispatcher
{

	public longitude:string = "";
	public latitude:string = "";
	public city:string = "";

	private static _instance:MyUserInfo;
	public static getInstance():MyUserInfo
	{
		if(this._instance == null)
			this._instance = new MyUserInfo();
		return this._instance;
	}

	public mySideId:number = 0;

	private _userName:string = "";
	public get userName():string
	{
		return this._userName;
	}

	public getFormatUserName(limitLen:number):string
	{
		var strLen:number = StringUtils.getStringLen(this._userName);
		if(strLen > limitLen && limitLen >= 3)
		{
			return this._userName.substr(0, limitLen - 3) + "...";
		}
		return this._userName;
	}

	private _gender:number = 0; //0=男 1=女
	public get gender():number
	{
		return this._gender;
	}
	public set gender(value:number)
	{
		this._gender = value;
	}

	private _lv:number = 1;
	public get level():number
	{
		return this._lv;
	}

	private _exp:number = 0;
	public get exp():number
	{
		return this._exp;
	}

	private _gold:number = 0; //房卡
	public get gold():number
	{
		return this._gold;
	}

	public set gold(value:number)
	{
		this._gold = value;

		GameEventManager.dispatchEvent(GameEventManager.UPDATE_USER_GOLD);
	}

	private _diamond:number = 0;
	public get diamond():number
	{
		return this._diamond;
	}

	private _userId:string = "";
	public get userId():string
	{
		return this._userId;
	}
	private _ip:string = "127.0.0.1";
	public get ip():string
	{
		return this._ip;
	}

	private _mobile:string = "";
	public get mobile():string
	{
		return this._mobile;
	}

	// 头像图片链接
	private _faceUrl:string = "";
	public get faceUrl():string
	{
		return this._faceUrl;
	}
	public set faceUrl(url:string)
	{
		this._faceUrl = url;
	}

	// private _token:string = "";

	public init(data:Object):void
	{
		this._userId = data["playerId"];
		// this._token = data["token"];
		this._userName = data["nickName"];
		this._gold = data["roomCardNum"];
		this._faceUrl = data["headImgUrl"];
		this._lv = data["level"];
		//...
	}
	
}