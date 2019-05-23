/**
 * 我的茶楼列表
 */
class MyTeahouseList
{
	public constructor(ui: any)
	{

		this._ui = ui;

		this.initView();
	}
	private _scrollView:egret.ScrollView;
	private _listContainer:egret.DisplayObjectContainer;
	
	private _ui:any;
	private _btn:eui.Button;
	private _list:eui.List;
	public dataList:eui.ArrayCollection;//数据集

	private initView():void
	{
		this._btn = this._ui["btn"];
		this._list = this._ui["list"];

		this._list.itemRenderer = MyTeahouseTile;

		// this._listContainer = new egret.DisplayObjectContainer();

		// this._scrollView = new egret.ScrollView();
		// this._scrollView.setContent(this._listContainer);
		// this._scrollView.width = this._ui.width;
		// this._scrollView.height = 400;
		// this._ui.addChild(this._scrollView);
		// this._scrollView.horizontalScrollPolicy = "off";
		// this._scrollView.x = 10; this._scrollView.y = 18;

		this._btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap2, this);
	}

	private onTouchTap2(evt:egret.TouchEvent):void
	{
		if(this._isShow)
			this.hide();
		else
			this.show();
	}

	private _bg:egret.Bitmap;
	private _isTweening:boolean = false;
	private _isShow:boolean = false;

	public show():void
	{
		if(this._isTweening) return;

		this._ui.x = -270;
		egret.Tween.removeTweens(this._ui);
		this._isTweening = true;
		this._isShow = true;
		egret.Tween.get(this._ui).to({x: 0}, 300).call(()=>{

			this._isTweening = false;
			

		}, this);

		GameEventManager.addEvent(NetAction.teahouse_list2.toString(), this.onTeahouseListResponse, this);
		var data:Object = {};
		data["msgType"] = NetAction.teahouse_list2;
		data["gameType"] = 0;

		SocketCommand.getInstance().send(data);
	}

	private onTeahouseListResponse(evt:DEvent):void
	{
		GameEventManager.removeEvent(NetAction.teahouse_list.toString(), this.onTeahouseListResponse, this);

		var result:Object = evt.data;
		var data:Array<any> = result["data"];

		this.updateList(data);
	}

	private updateList(list:Array<any>):void
	{
		
		this.dataList = new eui.ArrayCollection(list);
		this._list.dataProvider =  this.dataList;
		
		// this._listContainer.removeChildren();

		// var len:number = list.length;
		// var tile:MyTeahouseTile;
		// for(var i:number = 0; i < len; i++)
		// {
		// 	tile = new MyTeahouseTile();
		// 	tile.setData(list[i]);
		// 	this._listContainer.addChild(tile);
		// 	tile.y = i * 83;
		// 	tile.touchEnabled = true;
		// 	tile.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
		// }
		// this._scrollView.setScrollPosition(0, 0);
	}

	private onTouchTap(evt:egret.TouchEvent):void
	{
		var tile:MyTeahouseTile = evt.currentTarget as MyTeahouseTile;
		var teahouseData:Object = tile.data;

		var data:Object = {};
		data["msgType"] = NetAction.teahouse_enter;
		data["gameType"] = 0;
		data["msg"] = {"teaHouseNum": teahouseData["teaHouseNum"]};

		SocketCommand.getInstance().send(data);
	}

	public hide():void
	{
		if(this._isTweening) return;

		GameEventManager.removeEvent(NetAction.teahouse_list.toString(), this.onTeahouseListResponse, this);

		this._isShow = false;
		egret.Tween.removeTweens(this._ui);
		this._isTweening = true;
		egret.Tween.get(this._ui).to({x: -270}, 300).call(()=>{

			this._isTweening = false;

		}, this);
	}
}
class MyTeahouseTile extends eui.ItemRenderer
{
	private gameNameTF:eui.Label;
	private bossTF:eui.Label;
	private _faceImg:DImage;

	public constructor()
	{
		super();

		this.skinName = "MyTeahouseListItemSkin";
		this.name = "MyTeahouseTile";
	}

	protected childrenCreated():void
	{
		this._faceImg = new DImage(66, 66);
		this._faceImg.x = 8; this._faceImg.y = 7;
		this.addChild(this._faceImg);

		if(this.data)
		{
			this.updateView();
		}

		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
	}

	private onTouchTapHandle(evt:egret.TouchEvent):void
	{
		var teahouseData:Object = this.data;
		
		var data:Object = {};
		data["msgType"] = NetAction.teahouse_enter;
		data["gameType"] = 0;
		data["msg"] = {"teaHouseNum": teahouseData["teaHouseNum"]};

		SocketCommand.getInstance().send(data);
	}

	private updateView():void
	{
		var gameName:string = GameGlobal.getGameName(this.data["gameType"]) + "（"+this.data["teaHouseNum"]+"）";
		
		this.gameNameTF.text = gameName;
		this.bossTF.text = "老板："+this.data["nickName"];
		this._faceImg.load(this.data["headImgUrl"]);
	}

	protected dataChanged(): void 
	{
		super.dataChanged();

		LogUtils.log("this.data = " + this.data);
		
		if(this.data && this.gameNameTF)
		{
			this.updateView();
		}
		
	}
}