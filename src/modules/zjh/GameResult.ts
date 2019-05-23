/**
 * 小结算界面
 */
class GameResult extends IFrameBase
{
	public constructor() {
		super();

		this.init();
	}

	// private _myNickNameTF:egret.TextField;
	// private _myCardGroup:CardGroup;
	// private _myWinTF:egret.TextField;
	private _resultImg:egret.Bitmap;
	
	// private _playAgainBtn:DButton;
	// private _zhanjiBtn:DButton;
	private _listContainer:egret.DisplayObjectContainer;

	// private _otherPlayerContainer:egret.DisplayObjectContainer;
	private _showJiesuan:boolean = false;
	
	public updateBtn(type:number):void
	{
		if(type == 1)
		{
			this._showJiesuan = true;
			// this._playAgainBtn.visible = true;
			// this._zhanjiBtn.visible = false;
		}
		else
		{
			this._showJiesuan = false;
			// this._playAgainBtn.visible = false;
			// this._zhanjiBtn.visible = true;
		}
	}

	private _data:Object;
	public setData(data:Object):void
	{
		this._data = data;

		var myData:Object = {};
		var curWinnerId:string = data["curWinnerId"];
		if(curWinnerId == MyUserInfo.getInstance().userId)
		{
			this._resultImg.texture = RES.getRes("game_json.winText");
			SoundManager.instance.playSound("win_mp3");
		}
		else
		{
			this._resultImg.texture = RES.getRes("game_json.failText");
			SoundManager.instance.playSound("fail_mp3");
		}
		var playerList:Array<any> = data["playerList"];
		// var otherPlayerList:Array<any> = [];
		for(var i:number = 0; i < playerList.length; i++)
		{
			var playerData:Object = playerList[i];
			if(playerData["playerId"] == MyUserInfo.getInstance().userId)
			{
				// this._myNickNameTF.text = MyUserInfo.getInstance().userName;
				// this._myWinTF.text = playerData["curScore"];
				var cardList:Array<any> = playerData["cardList"];
				if(cardList != null && cardList.length == 3)
				{
					// this._myCardGroup.setPokerData(cardList);
					// this._myCardGroup.showPokerValue(true);
				}
			}
			else
			{
				// otherPlayerList.push(playerData);
			}
		}

		while(this._listContainer.numChildren > 0)
		{
			this._listContainer.removeChildAt(0);
		}
		var len:number = playerList.length;
		var tile:PlayerResultTile;
		for(var i:number = 0; i < len; i++)
		{
			tile = new PlayerResultTile();
			tile.setData(playerList[i]);
			this._listContainer.addChild(tile);
			tile.y = i * 85;
		}
	}

	
	protected showComplete():void
	{
		this._bg = new egret.Bitmap();
		this.addChild(this._bg);
		this._bg.texture = RES.getRes("jiesuanBg_png");

		this._resultImg = new egret.Bitmap();
		this._resultImg.texture = RES.getRes("game_json.winText");
		this.addChild(this._resultImg);
		this._resultImg.x = 173; this._resultImg.y = -23;

		
		var title:egret.TextField = new egret.TextField();
		title.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		title.textColor = 0xeeb72f;
		title.size = 25;
		title.bold = true;
		title.textAlign = egret.HorizontalAlign.LEFT;
		title.x = 38; title.y = 80;
		title.text = "玩家信息";
		this.addChild(title);

		var scoreTF:egret.TextField = new egret.TextField();
		scoreTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		scoreTF.textColor = 0xeeb72f;
		scoreTF.size = 25;
		scoreTF.bold = true;
		scoreTF.textAlign = egret.HorizontalAlign.LEFT;
		scoreTF.x = 280; scoreTF.y = 80;
		scoreTF.text = "总成绩";
		this.addChild(scoreTF);

		var pokerType:egret.TextField = new egret.TextField();
		pokerType.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		pokerType.textColor = 0xeeb72f;
		pokerType.size = 25;
		pokerType.bold = true;
		pokerType.textAlign = egret.HorizontalAlign.LEFT;
		pokerType.x = 487; pokerType.y = 80;
		pokerType.text = "牌型";
		this.addChild(pokerType);
		// title.width = 218;

		this._listContainer = new egret.DisplayObjectContainer();
		this.addChild(this._listContainer);
		this._listContainer.x = 43; this._listContainer.y = 153;

		this._closeBtn = new DButton("game_json.closeBtn3");
		this.addChild(this._closeBtn);
		this._closeBtn.x = 522; this._closeBtn.y = -18;

		this.iframeWidth = this._bg.width;
		this.iframeHeight = this._bg.height;

		var bg:egret.Shape = new egret.Shape();
		bg.graphics.beginFill(0, 0.5);
		bg.graphics.drawRect(0, 0, GameGlobal.stage.stageWidth, GameGlobal.stage.stageHeight);
		bg.graphics.endFill();
		this.addChildAt(bg, 0);
		bg.x = -(GameGlobal.stage.stageWidth - this.iframeWidth) >> 1;
		bg.y = -(GameGlobal.stage.stageHeight - this.iframeHeight) >> 1;

		this._closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
	}
	/**
	 * 
	 */
	private onTouchTap(evt:egret.TouchEvent):void
	{
		/*if(evt.currentTarget == this._closeBtn)
		{
			GameEventManager.dispatchEvent(GameEventManager.NEXT_ROUND);
		}
		else
		{
			GameGlobal.iframeLayer.showIFrame(JieSuanView);
			GameGlobal.iframeLayer.hideIFrame(GameResult);

			var jiesuanView:JieSuanView = GameGlobal.iframeLayer.getIFrame(JieSuanView);
			jiesuanView.setData(this._data);
		}*/
		if(this._showJiesuan)
		{
			GameGlobal.iframeLayer.showIFrame(JieSuanView, this._data);
			GameGlobal.iframeLayer.hideIFrame2(GameResult);
		}
		else
		{
			GameEventManager.dispatchEvent(GameEventManager.NEXT_ROUND);
		}
	}
}
class PlayerResultTile extends egret.Sprite
{
	private _nickNameTF:egret.TextField;
	private _cardGroup:CardGroup;
	private _winTF:egret.TextField;
	private _faceImg:egret.Bitmap;

	private _data:Object;
	public setData(data:Object):void
	{
		this._data = data;

		this._winTF.text = data["curScore"];

		var playerInfo:Object = GameGlobal.mapLayer.getBattle().getPlayerInfoById(data["playerId"]);
		if(playerInfo != null)
		{
			var nickName:string = playerInfo["nickName"];
			if(nickName.length > 10)
			{
				nickName = nickName.substr(0, 10)+"...";
			}
			this._nickNameTF.text = nickName;

			var headImgUrl:string = playerInfo["headImgUrl"];
			if(headImgUrl != null)
				this.loadFace(headImgUrl);
		}

		var cardList:Array<any> = data["cardList"];
		if(cardList != null && cardList.length == 3)
		{
			this._cardGroup.setPokerData(cardList);
			this._cardGroup.showPokerValue(true);
		}
		
	}

	private loadFace(url:string):void
	{
		// var loader: egret.URLLoader = new egret.URLLoader();
        // //设置加载方式为纹理
        // loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        // //添加加载完成侦听
        // loader.addEventListener(egret.Event.COMPLETE,this.imageComplete,this);
        // loader.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onLoadFaceError,this);
        // var request: egret.URLRequest = new egret.URLRequest(url);
        // //开始加载
        // loader.load(request);
		var imageLoader:egret.ImageLoader = new egret.ImageLoader();
		imageLoader.addEventListener(egret.Event.COMPLETE,this.imageComplete,this);
		imageLoader.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onLoadFaceError,this);
		imageLoader.load(url);
	}

	private onLoadFaceError(evt:egret.IOErrorEvent):void
    {
        console.log("load face ioerror");
    }
    
    private imageComplete(evt:egret.Event):void
    {
		console.log("load face complete");
        this._faceImg.texture = evt.target.data;
        this._faceImg.width = 34;
        this._faceImg.height = 35;
    }

	public constructor()
	{
		super();

		this.initView();
	}

	private initView():void
	{
		this._faceImg = new egret.Bitmap();
		this.addChild(this._faceImg);

		this._nickNameTF = new egret.TextField();
		this._nickNameTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		this._nickNameTF.textColor = 0xffffff;
		this._nickNameTF.size = 20;
		this._nickNameTF.bold = true;
		this._nickNameTF.textAlign = egret.HorizontalAlign.LEFT;
		this._nickNameTF.x = 51; this._nickNameTF.y = 5;
		this._nickNameTF.text = "--";
		this.addChild(this._nickNameTF);


		this._cardGroup = new CardGroup();
		this._cardGroup.x = 408; this._cardGroup.y = -18;
		this.addChild(this._cardGroup);
		this._cardGroup.isMySelf = false;
		this._cardGroup.setPokerSize(0.61, 25);

		var chipIcon:egret.Bitmap = new egret.Bitmap();
		this.addChild(chipIcon);
		chipIcon.texture = RES.getRes("game_json.chipDefault");
		chipIcon.x = 242; chipIcon.y = 4;

		//其他玩家输赢
		this._winTF = new egret.TextField();
		this._winTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		this._winTF.textColor = 0xffffff;
		this._winTF.size = 25;
		this._winTF.bold = true;
		this._winTF.textAlign = egret.HorizontalAlign.LEFT;
		this._winTF.x = 285; this._winTF.y = 2;
		this._winTF.text = "--";
		this.addChild(this._winTF);
		
	}
}