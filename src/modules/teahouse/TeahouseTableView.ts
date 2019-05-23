class TeahouseTableView extends egret.DisplayObjectContainer
{
	public constructor() {
		super();

		this.initView();
	}

	private _tableItemHash:HashMap;

	private _tableCount:number = 8;
	private initView():void
	{
		this._tableItemHash = new HashMap();
		for(var i:number = 0; i < this._tableCount; i++)
		{
			var tableItem:TableItem = new TableItem();
			this.addChild(tableItem);
			tableItem.setIndex(i+1);
			tableItem.x = (i % 4) * 276;
			tableItem.y = Math.floor(i / 4) * 167;
			tableItem.touchEnabled = true;

			this._tableItemHash.put(i+1, tableItem);
		}
	}
	/**
	 * 
	 */
	public updatePlayerList(playerData:Array<any>):void
	{
		var len:number = playerData.length;
		for(var i:number = 0; i < len; i++)
		{
			var tableItem:TableItem = this._tableItemHash.get(i+1) as TableItem;
			tableItem.updatePlayerList(playerData[i]);
		}
	}

	private onTouchTable(evt:egret.TouchEvent):void
	{
		var item:TableItem = evt.currentTarget as TableItem;
		var index:number = item.getIndex();

		var data:Object = {};
		data["msgType"] = NetAction.teahouse_enterTable;
		data["gameType"] = 0;
		data["msg"] = {"teaHouseNum": GameModel.instance().teaHouseNum, "tableNum": index};
		SocketCommand.getInstance().send(data);
	}

	public init():void
	{
		var data:Object = {};
		data["msgType"] = NetAction.teahouse_table_memberList;
		data["gameType"] = 0;
		data["msg"] = {"teaHouseNum": GameModel.instance().teaHouseNum};
		SocketCommand.getInstance().send(data);
	}
}
class TableItem extends egret.Sprite
{
	public constructor()
	{
		super();

		this.initView();
	}
	private _list:Array<any> = [];
	/**
	 * 
	 */
	public updatePlayerList(count:number):void
	{
		// this._list = list;
		// var len:number = list.length;

		this._tableImg.texture = RES.getRes("teahouse_json.t_table_bg"+count);
		// this._seatImgs.forEach(function(value:any, index:any):void{
		// 	if((index+1) <= list.length)
		// 		value.visible = true;
		// }, this);
	}

	private _index:number = 0;

	public getIndex():number
	{
		return this._index;
	}

	public setIndex(index:number):void
	{
		this._index = index;
		this._titleTF.text = index.toString();

		if(index >= 4)
		{
			// this._tableImg.y = 33;
			// this._seatImgs.forEach(function(value:any, index:any):void{
			// 	value.y -= 13;
			// }, this)
		}
	}
	
	private _titleTF:egret.TextField;

	private _tableImg:egret.Bitmap;
	private _seatImgs:Array<any> = [];
	private _detailBtn:DButton;

	private initView():void
	{
		this._detailBtn = new DButton("teahouse_json.t_tableDetailBtn");
		this.addChild(this._detailBtn);
		this._detailBtn.x = 60;

		this._titleTF = new egret.TextField();
		this._titleTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		this._titleTF.textColor = 0xffffff;
		this._titleTF.size = 21;
		this._titleTF.textAlign = egret.HorizontalAlign.CENTER;
		this.addChild(this._titleTF);
		this._titleTF.x = 114; this._titleTF.y = 8;
		this._titleTF.text = "1";
		this._titleTF.bold = true;
		this._titleTF.width = 42;

		this._tableImg = new egret.Bitmap();
		this._tableImg.texture = RES.getRes("teahouse_json.t_table_bg0");
		this.addChild(this._tableImg);
		this._tableImg.y = 60;
		this._tableImg.touchEnabled = true;

		this._detailBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
		this._tableImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);

		// var seatImgs:Array<any> = ["t_table_bg", "seat_player_1", "seat_player_2", "seat_player_3"];
		// var seatPosArr:Array<any> = [[48, 42], [123, 80], [37, 80], [140, 45]];
		// var len:number = seatImgs.length;
		// for(var i:number = 0; i < seatImgs.length; i++)
		// {
		// 	var seatImg:egret.Bitmap = DUtils.createBitmapByName("ui_json."+seatImgs[i]);
		// 	this.addChild(seatImg);

		// 	seatImg.x = seatPosArr[i][0];
		// 	seatImg.y = seatPosArr[i][1];
		// 	seatImg.visible = false;
		// 	this._seatImgs.push(seatImg);
		// }
	}

	private onTouchTapHandle(evt:egret.TouchEvent):void
	{
		if(evt.currentTarget == this._detailBtn)
			GameGlobal.iframeLayer.showIFrame(TeahouseTableDetailView, this._index);
		else
		{
			var data:Object = {};
			data["msgType"] = NetAction.teahouse_enterTable;
			data["gameType"] = 0;
			data["msg"] = {"teaHouseNum": GameModel.instance().teaHouseNum, "tableNum": this._index};
			SocketCommand.getInstance().send(data);
		}
	}
}