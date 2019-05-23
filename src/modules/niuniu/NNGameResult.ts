class NNGameResult extends IFrameBase
{
	public constructor() {
		super();

		this.skinName = "NNGameResultSkin";
		this.name = "NNGameResult";
	}

	private closeBtn:eui.Button;
	private shareBtn:eui.Button;
	public list:eui.List;
	public dataList:eui.ArrayCollection;//数据集

	public childrenCreated():void
	{
		this.list.itemRenderer = NNGameResultTile;
	}

	public createComplete(event: egret.Event): void 
	{
		super.createComplete(event);
	}

	public show():void
	{
		if(this.uiOpenData != null)
		{
			var playerList:Array<any> = this.uiOpenData["playerList"];

			playerList.forEach((value:any, index:number)=>{

				if(playerList[index]["playerId"] == this.uiOpenData["totalWinnerId"])
					playerList[index]["isWin"] = true;

			}, this);

			this.dataList = new eui.ArrayCollection(playerList);
			this.list.dataProvider =  this.dataList;
		}

		this.bindButton(this.closeBtn);
		this.bindButton(this.shareBtn);
	}

	protected touchBindButtonHandler(clickTarget: egret.DisplayObject): void 
	{
		super.touchBindButtonHandler(clickTarget);

		if(clickTarget == this.closeBtn)
		{
			GameEventManager.addEvent(NetAction.backToHall.toString(), this.backToHallResponse, this);
			var data:Object = {};
			data["msgType"] = NetAction.backToHall;
			data["msg"] = {"playerId":MyUserInfo.getInstance().userId};
			SocketCommand.getInstance().send(data);
		}
		else if(clickTarget == this.shareBtn)
		{
			var screenShot:egret.RenderTexture = new egret.RenderTexture();
			screenShot.drawToTexture(this, new egret.Rectangle(0, 0, this.width, this.height));
			var imgBase64:string = "";
			// imgBase64 = screenShot.toDataURL("image/png");
			screenShot.saveToFile("image/png", "result.png");
			egret.ExternalInterface.call("shareResult", imgBase64);
		}
	}

	private backToHallResponse(evt:DEvent):void
	{
		GameEventManager.dispatchEvent(GameEventManager.QUIT_ROOM);
	}
}
class NNGameResultTile extends eui.ItemRenderer
{
	public constructor()
	{
		super();
		this.skinName = "NNGameResultTileSkin";
	}

	protected childrenCreated():void
	{
		this._faceImg = new DImage(52, 54);
		this._faceImg.x = 7; this._faceImg.y = 7;
		this.addChild(this._faceImg);
		
		this.winnerIcon.visible = false;
		this.updateView();
	}

	private winnerIcon:eui.Image;
	private nickNameTF:eui.Label;
	private idTF:eui.Label;
	// private cardTypeTF:eui.Label;
	private _faceImg:DImage;
	private bn:DBitmapNumber;

	private _allCardTypeArr:Array<any> = [

		{"name":"庄", "count":0},
		{"name":"五小牛", "count":0},
		{"name":"炸弹牛", "count":0},
		{"name":"金牛", "count":0},
		{"name":"牛牛", "count":0},
		{"name":"有牛", "count":0},
		{"name":"无牛", "count":0}
	];

	protected dataChanged(): void 
	{
		super.dataChanged();
		this.updateView();
	}

	private updateView():void
	{
		if(this.data != null)
		{
			this.idTF.text = "ID:"+ this.data["playerId"];
			// this._winTF.text = data["winTimes"]; //胜
			// this._lostTF.text = data["loseTimes"]; //负
			// this._totalScoreTF.text = data["totalScore"];
			var countArr:Array<any> = [this.data["bankerCount"], this.data["fiveSmallNiuCount"], this.data["bombNiuCount"],
				this.data["goldNiuCount"], this.data["niuNiuCount"], this.data["youNiuCount"], this.data["wuNiuCount"]];
			// this.cardTypeTF.text = "";
			var len:number = this._allCardTypeArr.length;
			for(var i:number = 0; i < len; i++)
			{
				this["cardTypeTF"+i+"_0"].text = this._allCardTypeArr[i].name;
				this["cardTypeTF"+i+"_1"].text = +countArr[i];
				// this.cardTypeTF.appendText + ""+"\n"); // = PlayerType.getPokerTypeName(this.data["maxCardType"]);
			}

			var playerObjInfo:Object = GameGlobal.mapLayer.getBattle().getPlayerInfoById(this.data["playerId"]);
			var nickName:string = playerObjInfo["nickName"];
			var len:number = StringUtils.getStringLen(nickName);
			if(len> 6)
			{
				nickName = nickName.substr(0, 6)+"...";
			}
			this.nickNameTF.text = nickName;
			this._faceImg.load(playerObjInfo["headImgUrl"]);

			var totalScore:number = this.data["totalScore"];
			var len:number = totalScore.toString().length;

			if(this.data["isWin"])
			{
				this.winnerIcon.visible = true;
			}
			else
			{
				this.winnerIcon.visible = false;
			}

			if(this.bn && this.contains(this.bn))
				this.removeChild(this.bn);

			if(totalScore > 0)
			{
				this.bn = new DBitmapNumber(totalScore, 30, 2);
			}
			else
			{
				this.bn = new DBitmapNumber(totalScore, 30, 1);
			}
			this.addChild(this.bn);
			
			this.bn.x = (155 - len * 30) >> 1;
			this.bn.y = 366;

		}
	}
}