/**
 * 大结算界面
 */
class JieSuanView extends IFrameBase
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

	private _data:Object;

	public childrenCreated():void
	{
		this.list.itemRenderer = JieSuanTile;
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
	// public setData(data:Object):void
	// {
	// 	this._data = data;

	// 	var playerList:Array<any> = data["playerList"];
	// 	while(this._listContainer.numChildren > 0)
	// 		this._listContainer.removeChildAt(0);


	// 	var roomOwnerId:string = data["roomOwnerId"];
	// 	var totalWinnerId:string = data["totalWinnerId"];

	// 	var len:number = playerList.length;
	// 	var tile:JieSuanTile;
	// 	for(var i:number = 0; i < len; i++)
	// 	{
	// 		tile = new JieSuanTile();
	// 		tile.x = 254 * i;
	// 		this._listContainer.addChild(tile);
	// 		tile.setData(playerList[i]);
			
	// 		if(playerList[i].playerId == roomOwnerId)
	// 		{
	// 			tile.isFang = true;
	// 		}
	// 		else
	// 		{
	// 			tile.isFang = false;
	// 		}

	// 		if(playerList[i].playerId == totalWinnerId)
	// 		{
	// 			tile.isWin = true;
	// 		}
	// 		else
	// 		{
	// 			tile.isWin = false;
	// 		}
	// 	}
	// }
}
class JieSuanTile extends eui.ItemRenderer
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
	private cardTypeTF:eui.Label;
	private _faceImg:DImage;
	private bn:DBitmapNumber;

	protected dataChanged(): void 
	{
		super.dataChanged();

		LogUtils.log("this.data = " + this.data);

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
			// this.cardTypeTF.text = "";

			for(var i:number = 0; i < 7; i++)
			{
				this["cardTypeTF"+i+"_0"].text = "";
				this["cardTypeTF"+i+"_1"].text = "";
			}
			
			this["cardTypeTF0_0"].text = "胜";
				this["cardTypeTF0_1"].text = +this.data["winTimes"];

			this["cardTypeTF1_0"].text = "负";
				this["cardTypeTF1_1"].text = +this.data["loseTimes"];

				this["cardTypeTF2_0"].text = "最大牌";
				this["cardTypeTF2_1"].text = PlayerType.getPokerTypeName(this.data["maxCardType"]);

			// this.cardTypeTF.appendText("胜：" +this.data["winTimes"]+"\n");
			// this.cardTypeTF.appendText("" +this.data["loseTimes"]+"\n");
			// this.cardTypeTF.appendText("最大牌型：" + PlayerType.getPokerTypeName(this.data["maxCardType"]));

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
	
	// public setData(data:Object):void
	// {
	// 	this._data = data;
		
	// 	this._idNameTF.text = "ID:"+data["playerId"];
	// 	this._winTF.text = data["winTimes"]; //胜
	// 	this._lostTF.text = data["loseTimes"]; //负
	// 	this._totalScoreTF.text = data["totalScore"];
	// 	this._maxPokerTF.text = PlayerType.getPokerTypeName(data["maxCardType"]);

	// 	var playerObjInfo:Object = GameGlobal.mapLayer.getBattle().getPlayerInfoById(data["playerId"]);
		

	// 	var nickName:string = playerObjInfo["nickName"];
	// 	if(nickName.length > 10)
	// 	{
	// 		nickName = nickName.substr(0, 10)+"...";
	// 	}
	// 	this._nickNameTF.text = nickName;

	// 	this.isFang = false;
	// 	this.isWin = false;

	// 	this._faceImg.texture = RES.getRes("game_json.testFace");
	// 	this._faceImg.width = 90; this._faceImg.height = 91;
	// 	var headImgUrl:string = playerObjInfo["headImgUrl"];
	// 	if(headImgUrl != null)
	// 		this.loadFace(headImgUrl);
	// }

	

	// private _isFang:boolean = false;
	// public set isFang(value:boolean)
	// {
	// 	this._fangFlag.visible = value;
	// }
	// private _isWin:boolean = false;
	// public set isWin(value:boolean)
	// {
	// 	this._winFlag.visible = value;
	// }

	
}