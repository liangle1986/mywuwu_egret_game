/**
 * 游戏中玩家单元
 */
class BasePlayerView extends egret.Sprite
{
	//位置定义
	public static TOP_LEFT:number = -2;
	public static TOP_RIGHT:number = 2;
	public static LEFT:number = -1;
	public static RIGHT:number = 1; 
	public static DOWN:number = 0; //底部，自己位置
	protected _position:number = 0; //位置信息，标注左右玩家位置

	public static NOT_READY:number = 1; //未准备
	public static READYED:number = 2; //准备
	public static NOT_QZ:number = 3; //不抢庄
	public static QZ:number = 4; //抢庄
	public static WATCHER:number = 0; //观察者
	public static BETED:number = 5; //已压分
	public static SHOWCARDED:number = 6; //已亮牌
	public static WAIT_TO_BET:number = 7; //等待亮牌

	protected _faceBg:egret.Bitmap; // 背景
	protected _faceImg:DImage; // 图片
	protected _nickNameTF:egret.TextField; // 名称
	protected _fangFlag:egret.Bitmap; // 访客背景
	protected _zhuangFlag:egret.Bitmap; // 专家背景
	protected _readyFlag:egret.Bitmap; // 准备
	protected _recordIcon:egret.Bitmap; // 录音
	protected _idTF:egret.TextField;
	protected _offlineFlagIcon:egret.Bitmap; //下线
	protected _emotionImg:egret.Bitmap; //聊天表情

	protected _isSelf:boolean = false;

	public getStatus():number
	{
		return this._status;
	}

	protected _status:number = 1;

	public setOffline(value:boolean):void
	{
		this._offlineFlagIcon.visible = value;
	}

	public isOffline():boolean
	{
		return this._offlineFlagIcon.visible;
	}

	public setPosition(value:number):void
	{
		this._position = value;
	}

	protected _isZhuang:boolean = false;
	public set isZhuang(value:boolean)
	{
		this._isZhuang = value;
		this._zhuangFlag.visible = value;
	}
	public get isZhuang():boolean
	{
		return this._isZhuang;
	}
	protected _isFang:boolean = false;
	public set isFang(value:boolean)
	{
		this._isFang = value;
		this._zhuangFlag.visible = value;
	}

	protected _data:Object;
	public setData(playerInfo:Object):void
	{
		this._data = playerInfo;

		this._nickNameTF.text = playerInfo["nickName"];
		if(this._idTF)
			this._idTF.text = playerInfo["playerId"];
		this._faceImg.load(this._data["headImgUrl"]);
	}

	public getData():Object
	{
		return this._data;
	}

	public dispose():void
	{

	}

	public getChipBornPos():Array<any>
	{
		return [this.x+this._faceImg.x+this._faceImg.width*0.5, this.y+this._faceImg.y+this._faceImg.height*0.5];
	}

	/**
	 * 显示/不显示录制
	 */
	public showRecord(value:boolean):void
	{
		this._recordIcon.visible = value;
	}

	public constructor() 
	{
		super();

		this.initView();
	}

	protected initView():void
	{

	}
}