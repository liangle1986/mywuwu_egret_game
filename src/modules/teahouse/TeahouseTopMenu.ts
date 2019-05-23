class TeahouseTopMenu extends egret.DisplayObjectContainer
{
	public constructor() {
		super();

		this.initView();
	}

	private _quitBtn:DButton;
	private _refreshBtn:DButton;
	private _shenchaBtn:DButton;
	private _shareBtn:DButton;
	private _setBtn:DButton;

	private _nameBg:egret.Bitmap;
	private _nameTF:egret.TextField; //名称
	private _idTF:egret.TextField; //id

	private _data:Object;

	public init(data:Object):void
	{
		this._data = data;

		this._shenchaBtn.visible = true;
		if(data.hasOwnProperty("playerId"))
		{	
			var playerId:string = data["playerId"];
			if(playerId != MyUserInfo.getInstance().userId)
				this._shenchaBtn.visible = false;
		}

		this._nameTF.text = GameGlobal.getGameName(GameGlobal.gameType);
		this._idTF.text = "茶楼号：" + GameModel.instance().teaHouseNum.toString();
	}

	private initView():void
	{
		this._quitBtn = new DButton("teahouse_json.t_quitBtn");
		this.addChild(this._quitBtn);
		
		// this._quitBtn.anchorOffsetX = this._quitBtn.width * 0.5;
		// this._quitBtn.anchorOffsetY = this._quitBtn.height * 0.5;
		// this._quitBtn.scaleX = -1;
		this._quitBtn.x = 48;
		this._quitBtn.y = 15;

		this._refreshBtn = new DButton("teahouse_json.t_refreshBtn");
		this.addChild(this._refreshBtn);
		this._refreshBtn.x = 125;
		this._refreshBtn.y = 15;

		this._shenchaBtn = new DButton("teahouse_json.t_editBtn");
		this.addChild(this._shenchaBtn);
		this._shenchaBtn.x = 211;
		this._shenchaBtn.y = 15;

		this._shareBtn = new DButton("teahouse_json.t_shareBtn");
		this.addChild(this._shareBtn);
		this._shareBtn.x = GameGlobal.stageW - 194; //1136-1020
		this._shareBtn.y = 15;

		this._setBtn = new DButton("teahouse_json.t_setBtn");
		this.addChild(this._setBtn);
		this._setBtn.x = GameGlobal.stageW - 87;
		this._setBtn.y = 15;

		this._nameBg = new egret.Bitmap();
		this._nameBg.texture = RES.getRes("teahouse_json.t_titleBg");
		this.addChild(this._nameBg);
		this._nameBg.x = (GameGlobal.stageW - this._nameBg.width ) >>1;
		// this._nameBg.y = 15;

		this._nameTF = new egret.TextField();
		this._nameTF.textColor = 0xffffff;
		this._nameTF.size = 30;
		this._nameTF.textAlign = egret.HorizontalAlign.CENTER;
		this._nameTF.width = 346;
		this._nameTF.x = 395; this._nameTF.y = 16;
		this.addChild(this._nameTF);
		this._nameTF.text = "--";

		this._idTF = new egret.TextField();
		this._idTF.textColor = 0xffffff;
		this._idTF.size = 20;
		this._idTF.textAlign = egret.HorizontalAlign.CENTER;
		this._idTF.width = 346;
		this._idTF.x = 395; this._idTF.y = 54;
		this.addChild(this._idTF);

		this._quitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
		this._shenchaBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
		this._setBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
		this._shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
		this._refreshBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
	}

	private onTouchTapHandle(evt:egret.TouchEvent):void
	{
		switch(evt.currentTarget)
		{
			case this._quitBtn:
				var data:Object = {};
				data["msgType"] = NetAction.teahouse_backToHall;
				data["gameType"] = 0;
				data["msg"] = {"teaHouseNum": GameModel.instance().teaHouseNum};
				SocketCommand.getInstance().send(data);
				break;
			case this._shenchaBtn:
				GameGlobal.iframeLayer.showIFrame(TeahouseSetView);
				break;
			case this._setBtn:
				GameGlobal.iframeLayer.showIFrame(SettingView);
				break;
			case this._shareBtn:
				GameGlobal.iframeLayer.showIFrame(ShareView2);
				break;
			case this._refreshBtn:
				var data:Object = {};
				data["msgType"] = NetAction.teahouse_table_memberList;
				data["gameType"] = 0;
				data["msg"] = {"teaHouseNum": GameModel.instance().teaHouseNum};
				SocketCommand.getInstance().send(data);
				break;
		}
	}
}