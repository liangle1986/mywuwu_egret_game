/**
 * 大赢家
 */
class WinnerView extends IFrameBase
{
	public constructor() {
		super();

		this.skinName = "TeahouseWinnerSkin";
	}

	private clearAllBtn:eui.Button;
	public list:eui.List;
	public dataList:eui.ArrayCollection;//数据集

	public childrenCreated():void
	{
		
	}
	/*该模块被创建完成后的回调函数*/
	public createComplete(event: egret.Event): void {
	
		super.createComplete(event);

		this.list.itemRenderer = WinnerTile;
	}

	private onWinListResponse(evt:DEvent):void
	{
		var result:Object = evt.data;
		var data:Array<any> = result["data"];

		this.dataList = new eui.ArrayCollection(data);
		this.list.dataProvider =  this.dataList;

		// this._listContainer.removeChildren();
		// var len:number = data.length;
		// var tile:WinnerTile;
		// for(var i:number = 0; i < len; i++)
		// {
		// 	tile = new WinnerTile();
		// 	tile.setData(data[i], i+1);
		// 	tile.y = i * 100;

		// 	this._listContainer.addChild(tile);
		// }

		// this._scrollView.setScrollPosition(0, 0);
	}

	public dispose():void
	{
		GameEventManager.removeEvent(NetAction.teahouse_winList.toString(), this.onWinListResponse, this);
	}

	public show():void
	{
		GameEventManager.addEvent(NetAction.teahouse_winList.toString(), this.onWinListResponse, this);
		var data:Object = {};
		data["msgType"] = NetAction.teahouse_winList;
		data["gameType"] = 0;
		data["msg"] = {"teaHouseNum": GameModel.instance().teaHouseNum};

		SocketCommand.getInstance().send(data);
	}

	protected touchBindButtonHandler(clickTarget: egret.DisplayObject): void 
	{
		super.touchBindButtonHandler(clickTarget);

		if(clickTarget == this.clearAllBtn)
		{
			this.dataList = new eui.ArrayCollection([]);
			this.list.dataProvider =  this.dataList;
		}
	}
}
class WinnerTile extends eui.ItemRenderer
{
	public constructor()
	{
		super();
		
		this.skinName = "TeahouseWinnerItemSkin";
	}

	protected childrenCreated():void
	{
		this._faceImg = new DImage(52, 52);
		this._faceImg.x = 11; this._faceImg.y = 2;
		this.addChild(this._faceImg);
	}

	protected dataChanged(): void 
	{
		super.dataChanged();

		LogUtils.log("this.data = " + this.data);

		this.updateView();
	}

	private updateView():void
	{
		this.winCountTF.text = this.data["winCount"];
		this.nickNameTF.text = this.data["nickName"];
		this.idTF.text = this.data["playerId"];

		this._faceImg.load(this.data["headImgUrl"]);
	}

	private idTF:eui.Label;
	private nickNameTF:eui.Label;
	private _faceImg:DImage;
	private winCountTF:eui.Label;

	// private _data:Object;
	// public setData(data:Object, rank:number):void
	// {
	// 	this._data = data;

	// 	this._rankImg.setValue(rank);
	// 	this._winCount.setValue(data["totalScore"]);
	// 	this._nickNameTF.text = data["nickName"];
	// 	this._idTF.text = data["playerId"];

	// 	this._faceImg.load(data["headImgUrl"]);
	// }

	
}