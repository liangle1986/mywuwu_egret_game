/**
 * 
 */
class BaseGameView extends egret.Sprite implements IGame
{
	protected _refreshBtn:DButton; //刷新
	protected _recordMc:egret.MovieClip; //语音录制动画
	protected _emotionContainer:egret.DisplayObjectContainer; //表情
	//btns
	protected _quitBtn:DButton;
	protected _setBtn:DButton;
	protected _recordBtn:DButton;
	protected _chatBtn:DButton;
	protected _helpBtn:DButton;
	protected _inviteBtn:DButton; //邀请
	protected _readyBtn:DButton; //准备

	protected _countDownView:CountDownView;

	public getView():egret.Sprite
	{
		return this;
	}

	public constructor() 
	{
		super();

		this.initView();
	}

	// protected getOthrPlayerView(playerId:string):BasePlayerView
	// {
	// 	var len:number = this._otherPlayerViews.length;
	// 	for(var i:number = 0; i < len; i++)
	// 	{
	// 		var playerView:BasePlayerView = this._otherPlayerViews[i];
	// 		var data:Object = playerView.getData();
	// 		if(data["playerId"].toString() == playerId)
	// 			return playerView;
	// 	}
	// 	return null;
	// }

	protected _data:Object = null;
	protected _gameStatus:number = -1;

	public set isShowChat(value:boolean)
	{
		this._isShowChat = value;
	}
	protected _isShowChat:boolean = false;


	public getData():Object
	{
		return this._data;
	}

	protected initView():void
	{
		this.touchEnabled = true;
	}

	public dispose():void
	{
		
	}

	protected _playerDataHash:HashMap = new HashMap();
	public getPlayerInfoById(id:string):Object
	{
		return this._playerDataHash.get(id);
	}

	public init(battleData:Object):void
	{
		
	}
}