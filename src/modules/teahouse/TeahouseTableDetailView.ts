class TeahouseTableDetailView extends IFrameBase
{
	public constructor() {
		super();

		this.skinName = "TeahouseTableDetailSkin";
		this.name = "TeahouseTableDetailView";

		
	}

	public list:eui.List;
	public dataList:eui.ArrayCollection;//数据集

	private setData(data:Array<any>):void
	{
		// this.dataList = new eui.ArrayCollection(data);
		// this.list.dataProvider =  this.dataList;
	}

	public childrenCreated():void
	{
		// this.iframeWidth = this.width;
		// this.iframeHeight = this.height;
		//this.childrenCreated();

		//this._bg.visible = false;
	}

	public dispose():void
	{
		super.dispose();
		GameEventManager.removeEvent(NetAction.teahouse_table_memberList2.toString(), this.onTableMemberList2, this);
	}

	private onTableMemberList2(evt:DEvent):void
	{
		GameEventManager.removeEvent(NetAction.teahouse_table_memberList2.toString(), this.onTableMemberList2, this);
		var result:Object = evt.data;
		var data:Array<any> = result["data"];
		this.dataList = new eui.ArrayCollection(data);
		this.list.dataProvider =  this.dataList;
	}


	public tweenShow(): void
	{
		super.tweenShow();

		if(this.uiOpenData != null)
		{
			this.setData(this.uiOpenData);
		}

		GameEventManager.addEvent(NetAction.teahouse_table_memberList2.toString(), this.onTableMemberList2, this);
		var data:Object = {};
		data["msgType"] = NetAction.teahouse_table_memberList2;
		data["gameType"] = 0;
		data["msg"] = {"teaHouseNum": GameModel.instance().teaHouseNum, "tableNum": this.uiOpenData};
		SocketCommand.getInstance().send(data);
	}

	public createComplete(event: egret.Event): void {
		super.createComplete(event);

		this.list.itemRenderer = TeahouseTableDetailItem;
	}


}
class TeahouseTableDetailItem extends eui.ItemRenderer
{
	public constructor()
	{
		super();

		this.skinName = "TeahouseTableDetailItemSkin";
	}

	private idTF:eui.Label;
	private nickNameTF:eui.Label;
	private ipTF:eui.Label;

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
			this.nickNameTF.text = this.data["nickName"];
			this.idTF.text = this.data["playerId"];

			this.ipTF.text = this.data["ip"];
		}
	}
}