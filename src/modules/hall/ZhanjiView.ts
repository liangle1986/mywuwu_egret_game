/**
 * 战绩
 */
class ZhanjiView extends IFrameBase
{
	public constructor() {
		super();
		
		this.skinName = "ZhanjiSkin";
		this.name = "ZhanjiView";
	}

	private _tabIndex:number = -1;
	private tab1:eui.Image;
	private tab2:eui.Image;

	public show():void
	{
		this._tabIndex = -1;
		this.showTabView(1);

		this.bindButton(this.tab1);
		this.bindButton(this.tab2);
	}

	public list:eui.List;
	public dataList:eui.ArrayCollection;//数据集

	public childrenCreated():void
	{
		this.list.itemRenderer = ZhanjiTile;

	}


	private showTabView(index:number):void
	{
		if(this._tabIndex == index) 
			return;
		this._tabIndex = index;

		if(index == 1)
		{
			this.tab1.texture = RES.getRes("hall_json.gameTab1_select");
			this.tab2.texture = RES.getRes("hall_json.gameTab2");

			GameEventManager.addEvent(NetAction.zhanji.toString(), this.onZhanjiResponse, this);
			var data:Object = {};
			data["msgType"] = NetAction.zhanji;
			data["gameType"] = GameGlobal.ZJH_TYPE;

			SocketCommand.getInstance().send(data);
		}
		else
		{
			this.tab1.texture = RES.getRes("hall_json.gameTab1");
			this.tab2.texture = RES.getRes("hall_json.gameTab2_select");

			GameEventManager.addEvent(NetAction.zhanji.toString(), this.onZhanjiResponse, this);
			var data:Object = {};
			data["msgType"] = NetAction.zhanji;
			data["gameType"] = GameGlobal.NIUNIU_TYPE;

			SocketCommand.getInstance().send(data);
		}

	}

	public dispose():void
	{
		super.dispose();
		GameEventManager.removeEvent(NetAction.zhanji.toString(), this.onZhanjiResponse, this);
	}

	private onZhanjiResponse(evt:DEvent):void
	{
		GameEventManager.removeEvent(NetAction.zhanji.toString(), this.onZhanjiResponse, this);

		var result:Object = evt.data;
		var data:Array<any> = result["data"];
		
		this.updateList(data);
	}

	private updateList(list:Array<any>):void
	{
		// this._listContainer.removeChildren();

		// var len:number = list.length;
		// var tile:ZhanjiTile;
		// for(var i:number = 0; i < len; i++)
		// {
		// 	tile = new ZhanjiTile();
		// 	tile.setData(list[i], i+1);
		// 	this._listContainer.addChild(tile);
		// 	tile.y = i * 201;
		// }
		// this._scrollView.setScrollPosition(0, 0);
		list.forEach((value:any, index:number)=>{

			list[index]["rank"] = index+1;

		}, this);
		this.dataList = new eui.ArrayCollection(list);
		this.list.dataProvider =  this.dataList;
	}

	protected touchBindButtonHandler(clickTarget: egret.DisplayObject): void 
	{
		super.touchBindButtonHandler(clickTarget);

		if(clickTarget == this.tab1)
		{
			this.showTabView(1);
		}
		else if(clickTarget == this.tab2)
		{
			this.showTabView(2);
		}
	}
}
class ZhanjiTile extends eui.ItemRenderer
{
	public constructor()
	{
		super();
		
		this.skinName = "ZhanjiTileSkin";
	}

	private roomNumTF:eui.Label;
	private timeTF:eui.Label;
	private detailTF:eui.Label;
	private rankTF:eui.Label;

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
		if(this.data != null)
		{
			var roomId:string = this.data["roomId"];
			this.roomNumTF.text = "房间号："+ roomId.toString();
			var createTime:number = this.data["createTime"];
			var date:Date = new Date(createTime);
			var createTimeStr:string =  [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("/");
			createTimeStr += " " + date.toTimeString().substr(0, 8);;
			this.timeTF.text = createTimeStr;
			this.rankTF.text = this.data["rank"];

			var recordList:Array<any> = this.data["recordList"];
			var len:number= recordList.length;
			this.detailTF.text = "";
			var recordStr:string = "";
			for(var i:number = 0; i < len; i++)
			{
				var score:number = recordList[i].score;
				var scoreStr:string = score > 0?"+"+score:score.toString();
				if((i+1) % 2 == 0)
					recordStr = recordStr + (recordList[i].nickName + "  " + scoreStr + "    ") + "\n";
				else
					recordStr = recordStr + (recordList[i].nickName + "  " + scoreStr + "    ");
			}

			this.detailTF.text = recordStr.trim();
		}
	}

	
}