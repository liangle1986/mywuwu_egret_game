/**
 * 大厅首页排行榜
 */
class RankView extends eui.Component
{
	public constructor() {
		super();

		this.skinName = "RankSkin";
		this.name = "RankView";
	}

	private tab1:eui.Image;
	private tab2:eui.Image;
	private tab3:eui.Image;
	private tabSelect:eui.Image;

	private _tabIndex:number = -1;
	private _tabSelectPos:Array<any> = [14, 152, 278];
	public list:eui.List;
	public dataList:eui.ArrayCollection;//数据集

	protected childrenCreated():void
	{
		this.list.itemRenderer = RankItem;

		// var testList:Array<RankVo> = [];
		// var len:number = 3;
		// for(var i:number = 0; i < len; i++)
		// {
		// 	var rankVo:RankVo = new RankVo();
		// 	rankVo.build({"headImg":"", "gold":123.44, "sex":1, "area":"xx地区"});
		// 	testList.push(rankVo);
		// }
		// this.dataList = new eui.ArrayCollection(testList);
		// this.list.dataProvider =  this.dataList;

		this.tab1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
		this.tab2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
		this.tab3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
		
		this._tabIndex = -1;
		this.showTabView(1);
	}

	public show():void
	{

	}

	private updateList(data:Array<any>):void
	{

		// var len:number = data.length;
		// var rankItem:RankItem;
		// for(var i:number = 0; i < len; i++)
		// {
		// 	rankItem = new RankItem();
		// 	rankItem.setData(data[i]);
		// 	rankItem.y = i * 93;
		// 	this._listContainer.addChild(rankItem);
		// }

		// this._scrollView.setScrollPosition(0, 0);
		this.dataList = new eui.ArrayCollection(data);
		this.list.dataProvider =  this.dataList;
	}

	private _bg:egret.Bitmap;
	private _scrollView:egret.ScrollView;
	private _listContainer:egret.DisplayObjectContainer;

	private initView():void
	{
		// this._listContainer = new egret.DisplayObjectContainer();

		// this._scrollView = new egret.ScrollView();
		// this._scrollView.setContent(this._listContainer);
		// this._scrollView.width = this.width;
		// this._scrollView.height = 278;
		// this.addChild(this._scrollView);
		// this._scrollView.horizontalScrollPolicy = "off";
		// this._scrollView.x = 14; this._scrollView.y = 75;

		// this._tabSelectBg = new egret.Bitmap();
		// this._tabSelectBg.texture = RES.getRes("hall_json.rankTab_select");
		// this.addChild(this._tabSelectBg);
		// this._tabSelectBg.y = 3;

		// this._tabButton = new DButton("hall_json.rankTab1");
		// this._tabButton.x = 34; this._tabButton.y = 10;
		// this.addChild(this._tabButton);

		// this._tabButton2 = new DButton("hall_json.rankTab2");
		// this._tabButton2.x = 183; this._tabButton2.y = 10;
		// this.addChild(this._tabButton2);

		// this._tabButton3 = new DButton("hall_json.rankTab3");
		// this._tabButton3.x = 324; this._tabButton3.y = 10;
		// this.addChild(this._tabButton3);

		
	}

	private onTouchTap(evt:egret.TouchEvent):void
	{
		var tabIndex:number = 1;
		switch(evt.currentTarget)
		{
			case this.tab1:
				break;
			case this.tab2:
				tabIndex = 2;
				break;
			case this.tab3:
				tabIndex = 3;
				break;
		}

		this.showTabView(tabIndex);
	}

	private showTabView(tabIndex:number):void
	{
		if(this._tabIndex == tabIndex)
			return;
			
		this._tabIndex = tabIndex;
		this.tabSelect.x = this._tabSelectPos[this._tabIndex - 1];
		if(this._tabIndex == 1)
		{
			GameEventManager.addEvent(NetAction.rank_tuhao.toString(), this.onRankResponse, this);
			var data:Object = {};
			data["msgType"] = NetAction.rank_tuhao;

			SocketCommand.getInstance().send(data);
		}
		else if(this._tabIndex == 2)
		{
			GameEventManager.addEvent(NetAction.rank_paishen.toString(), this.onRankResponse, this);
			var data:Object = {};
			data["msgType"] = NetAction.rank_paishen;

			SocketCommand.getInstance().send(data);
		}
		else
		{
			GameEventManager.addEvent(NetAction.rank_opened.toString(), this.onRankResponse, this);
			var data:Object = {};
			data["msgType"] = NetAction.rank_opened;

			SocketCommand.getInstance().send(data);
		}
	}

	private onRankResponse(evt:DEvent):void
	{
		var result:Object = evt.data;
		var data:Array<any> = result["data"];
		
		this.updateList(data);
	}
}
class RankItem extends eui.ItemRenderer
{
	public constructor()
	{
		super();

		this.skinName = "RankItemSkin";
		// this.initView();
	}

	protected childrenCreated():void
	{

	}

	protected dataChanged(): void 
	{
		super.dataChanged();

		LogUtils.log("this.data = " + this.data);

		this.updateView();
	}

	private updateView():void
	{
		
	}

	// private _data:Object;
	// public setData(data:Object):void
	// {
	// 	this._data = data;

	// }

	// private _bg:egret.Bitmap;
	// private _rankIcon:egret.Bitmap;

	// private initView():void
	// {
	// 	this._bg = new egret.Bitmap();
	// 	this._bg.texture = RES.getRes("hall_json.rankItem_bg");
	// 	this.addChild(this._bg);

	// 	this._rankIcon = new egret.Bitmap();
	// 	this._rankIcon.texture = RES.getRes("hall_json.rankIcon1");
	// 	this.addChild(this._rankIcon);
	// }
}