/**
 * 茶楼战绩
 */
class TeahouseScoreView extends IFrameBase
{
	public constructor() {
		super();

		this.skinName = "TeahouseZhanjiSkin";
	}


	private tab1:eui.Image;
	private tab2:eui.Image;
	public list:eui.List;
	public dataList:eui.ArrayCollection;//数据集

	private _tabIndex:number = -1;

	public show():void
	{
		
		this.bindButton(this.tab1);
		this.bindButton(this.tab2);
		this._tabIndex = -1;
		this.showTabView(1);

	}

	public childrenCreated():void
	{
		this.list.itemRenderer = TeahouseScoreTile;
	}

	public showTabView(tabIndex:number):void
	{
		if(tabIndex == this._tabIndex)
			return;
		this._tabIndex = tabIndex;
		if(this._tabIndex == 1)
		{
			this.tab1.texture = RES.getRes("teahouse_json.t_zhanjiTab1_select");
			this.tab2.texture = RES.getRes("teahouse_json.t_zhanjiTab2_default");

			GameEventManager.addEvent(NetAction.teahouse_myScoreList.toString(), this.onTeahouseMyScoreListResponse, this);
			var data:Object = {};
			data["msgType"] = NetAction.teahouse_myScoreList;
			data["gameType"] = 0;
			SocketCommand.getInstance().send(data);
		}
		else
		{
			this.tab1.texture = RES.getRes("teahouse_json.t_zhanjiTab1_default");
			this.tab2.texture = RES.getRes("teahouse_json.t_zhanjiTab2_select");

			GameEventManager.addEvent(NetAction.teahouse_scoreList.toString(), this.onTeahouseScoreListResponse, this);
			var data:Object = {};
			data["msgType"] = NetAction.teahouse_scoreList;
			data["gameType"] = 0;

			SocketCommand.getInstance().send(data);
		}
	}

	private onTeahouseMyScoreListResponse(evt:DEvent):void
	{
		GameEventManager.removeEvent(NetAction.teahouse_myScoreList.toString(), this.onTeahouseMyScoreListResponse, this);

		var result:Object = evt.data;
		var data:Array<any> = result["data"];

		// var len:number = data.length;
		// var tile:TeahouseScoreTile;
		// for(var i:number = 0; i < len; i++)
		// {
		// 	tile = new TeahouseScoreTile();
		// 	tile.setData(data[i]);
		// 	tile.y = 88 * i;
		// 	this._listContainer.addChild(tile);
		// }
		data.forEach((value:any, index:number)=>{

			data[index]["rank"] = index+1;

		}, this);
		// this._scrollView.setScrollPosition(0, 0);
		this.dataList = new eui.ArrayCollection(data);
		this.list.dataProvider =  this.dataList;
	}

	private onTeahouseScoreListResponse(evt:DEvent):void
	{
		GameEventManager.removeEvent(NetAction.teahouse_scoreList.toString(), this.onTeahouseScoreListResponse, this);

		var result:Object = evt.data;
		var data:Array<any> = result["data"];

		data.forEach((value:any, index:number)=>{

			data[index]["rank"] = index+1;

		}, this);
		this.dataList = new eui.ArrayCollection(data);
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
class TeahouseScoreTile extends eui.ItemRenderer
{
	public constructor()
	{
		super();
		
		this.skinName = "TeahouseZhanjiTileSkin";
	}

	// private _roomNumTF:egret.TextField;
	// private _timeTF:egret.TextField;
	// private _scoreTF:egret.TextField;

	// private _rankImg:DBitmapNumber;

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


	public updateView():void
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

		// var len:number = recordList.length;
		// var recordStr:string  ="";
		// for(var i:number = 0; i < len; i++)
		// {

		// 	recordStr += recordList[i].nickName+" "+recordList[i].score+"\n";
		// }

		

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

			this.detailTF.text = recordStr;

	}

	
}