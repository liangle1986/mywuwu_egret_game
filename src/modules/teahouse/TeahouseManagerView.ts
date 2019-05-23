/**
 * 茶楼管理
 */
class TeahouseManagerView extends IFrameBase
{
	public constructor() {
		super();

		this.skinName = "TeahouseManageSkin";
		this.name = "TeahouseManagerView";
	}

	private tab1:eui.Image;
	private tab2:eui.Image;
	private createBtn:eui.Button;
	public list:eui.List;
	public dataList:eui.ArrayCollection;//数据集

	private _tabIndex:number = -1;

	public show():void
	{
		this._tabIndex = -1;
		this.showTabView(1);

		this.bindButton(this.tab1);
		this.bindButton(this.tab2);
		this.bindButton(this.createBtn);

		GameEventManager.addEvent(NetAction.teahouse_del.toString(), this.onDelTeahouseResponse, this);
	}

	public dispose():void
	{
		super.dispose();
		GameEventManager.removeEvent(NetAction.teahouse_del.toString(), this.onDelTeahouseResponse, this);
	}

	private onDelTeahouseResponse(evt:DEvent):void
	{
		if(this._tabIndex == 1)
		{
			this._tabIndex = -1;
			this.showTabView(1);
		}
		else
		{
			this._tabIndex = -1;
			this.showTabView(2);
		}
	}

	public createComplete(event: egret.Event): void {
		super.createComplete(event);

		this.list.itemRenderer = TeahouseManagerTile;
	}

	public childrenCreated():void
	{
		
	}

	private showTabView(tabIndex:number):void
	{
		if(this._tabIndex == tabIndex)
			return;
		this._tabIndex = tabIndex;

		if(tabIndex == 1)
		{
			this.tab1.texture = RES.getRes("teahouse_json.t_ruzhuTab1_select");
			this.tab2.texture = RES.getRes("teahouse_json.t_ruzhuTab2_default");

			GameEventManager.addEvent(NetAction.teahouse_joinList.toString(), this.onTeahouseJoinListResponse, this);
			var data:Object = {};
			data["msgType"] = NetAction.teahouse_joinList;
			data["gameType"] = 0;

			SocketCommand.getInstance().send(data);
		}
		else
		{
			this.tab1.texture = RES.getRes("teahouse_json.t_ruzhuTab1_default");
			this.tab2.texture = RES.getRes("teahouse_json.t_ruzhuTab2_select");

			GameEventManager.addEvent(NetAction.teahouse_list.toString(), this.onTeahouseListResponse, this);
			var data:Object = {};
			data["msgType"] = NetAction.teahouse_list;
			data["gameType"] = 0;

			SocketCommand.getInstance().send(data);
			
		}
	}
	/**
	 * 
	 */
	private onTeahouseJoinListResponse(evt:DEvent):void
	{
		GameEventManager.removeEvent(NetAction.teahouse_joinList.toString(), this.onTeahouseJoinListResponse, this);

		var result:Object = evt.data;
		var data:Array<any> = result["data"];

		var list:Array<any> = [];
		var len:number = data.length;
		for(var i:number = 0; i < len; i++)
		{
			var playerId:string = data[i].playerId;
			if(playerId.toString() == MyUserInfo.getInstance().userId)
			{
				continue;
			}
			list.push(data[i]);
		}
		list.forEach((value:any, index:number)=>{

			// data[index]["rank"] = index+1;
			list[index]["isMy"] = false;

		}, this);
		// this._listContainer.removeChildren();

		// var len:number = data.length;
		// var tile:TeaouseManagerTile;
		// for(var i:number = 0; i < len; i++)
		// {
		// 	tile = new TeaouseManagerTile();
		// 	tile.isMy(false);
		// 	tile.setData(data[i])
		// 	tile.y = i * 100;
		// 	this._listContainer.addChild(tile);
		// }

		// this._scrollView.setScrollPosition(0, 0);
		this.dataList = new eui.ArrayCollection(list);
		this.list.dataProvider =  this.dataList;
	}	

	private onTeahouseListResponse(evt:DEvent):void
	{
		GameEventManager.removeEvent(NetAction.teahouse_list.toString(), this.onTeahouseListResponse, this);

		var result:Object = evt.data;
		var data:Array<any> = result["data"];

		data.forEach((value:any, index:number)=>{

			// data[index]["rank"] = index+1;
			data[index]["isMy"] = true;

		}, this);
		// this._listContainer.removeChildren();

		// var len:number = data.length;
		// var tile:TeaouseManagerTile;
		// for(var i:number = 0; i < len; i++)
		// {
		// 	tile = new TeaouseManagerTile();
		// 	tile.isMy(true);
		// 	tile.setData(data[i])
		// 	tile.y = i * 100;
		// 	this._listContainer.addChild(tile);
		// }

		// this._scrollView.setScrollPosition(0, 0);
		this.dataList = new eui.ArrayCollection(data);
		this.list.dataProvider =  this.dataList;
	}

	/**
	 * 子类如果有bindButton, click事件覆盖次方法实现
	 */
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
		else if(clickTarget == this.createBtn)
		{
			GameGlobal.iframeLayer.showIFrame(CreateTeahouseView);
		}
	}
}
class  TeahouseManagerTile extends eui.ItemRenderer
{
	public constructor()
	{
		super();

		this.skinName = "TeahouseManageItemSkin";
	}

	protected childrenCreated():void
	{
		this.delBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
		this.enterBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
		this.quitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
	}

	protected dataChanged(): void 
	{
		super.dataChanged();

		LogUtils.log("this.data = " + this.data);

		this.updateView();
	}

	private updateView():void
	{
		this.nickNameTF.text = "老板："+MyUserInfo.getInstance().userName;
		var gameName:string = GameGlobal.getGameName(this.data["gameType"]) + "("+ this.data["teaHouseNum"]+")";
		this.gameNameTF.text = gameName;

		var payType:number = this.data["payType"];
		this.teahouseInfoTF.text = "只扣老板放卡，"+ this.data["totalGame"]+"局 5人";

		if(this.data["isMy"])
		{
			this.delBtn.visible = true; this.quitBtn.visible = false;
		}
		else
		{
			this.delBtn.visible = false; this.quitBtn.visible = true;
		}
	}

	private _faceImg:DImage;
	private enterBtn:DButton;
	private quitBtn:DButton;
	private delBtn:DButton;
	private nickNameTF:egret.TextField;
	private gameNameTF:egret.TextField;
	private teahouseInfoTF:egret.TextField;

	// private _data:Object;
	// public setData(data:Object):void
	// {
	// 	if(data == null) return;
		

	// 	this._data = data;

	// 	this._nickNameTF.text = "老板："+MyUserInfo.getInstance().userName;
	// 	var gameName:string = GameGlobal.getGameName(data["gameType"]) + "("+ data["teaHouseNum"]+")";
	// 	this._gameNmaeTF.text = gameName;

	// 	var payType:number = data["payType"];
	// 	this._teahouseInfoTF.text = "只扣老板放卡，"+data["totalGame"]+"局 5人";
	// }
	
	// public isMy(value:boolean):void
	// {
	// 	if(value)
	// 	{
	// 		this._delBtn.visible = true;
	// 		this._quitBtn.visible = false;
	// 	}
	// 	else
	// 	{	
	// 		this._delBtn.visible = false;
	// 		this._quitBtn.visible = true;
	// 	}
	// }
	// private initView():void
	// {
	// 	this._bg = DUtils.createBitmapByName("ui_json.teahouseManagerTileBg");
	// 	this.addChild(this._bg);


	// 	this._faceImg = new DImage(78, 81);
	// 	this._faceImg.x = 5; this._faceImg.y = 3;
	// 	this.addChild(this._faceImg);

	// 	this._enterBtn = new DButton("ui_json.teahouse_enterBtn");
	// 	this._enterBtn.x = 507; this._enterBtn.y = 18;
	// 	this.addChild(this._enterBtn);

	// 	this._quitBtn = new DButton("ui_json.teahouse_quitBtn");
	// 	this._quitBtn.x = 635; this._quitBtn.y = 18;
	// 	this.addChild(this._quitBtn);

	// 	this._delBtn = new DButton("ui_json.delBtn");
	// 	this._delBtn.x = 635; this._delBtn.y = 18;
	// 	this.addChild(this._delBtn);
	// 	this._delBtn.visible = false;


	// 	this._nickNameTF = new egret.TextField();
	// 	this._nickNameTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
	// 	this._nickNameTF.size = 22;
	// 	this._nickNameTF.textColor = 0x9e4818;
	// 	this._nickNameTF.textAlign = egret.HorizontalAlign.LEFT;
	// 	this.addChild(this._nickNameTF);
	// 	this._nickNameTF.x = 94; this._nickNameTF.y = 44;
	// 	this._nickNameTF.text = "--";

	// 	this._gameNmaeTF = new egret.TextField();
	// 	this._gameNmaeTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
	// 	this._gameNmaeTF.size = 22;
	// 	this._gameNmaeTF.textColor = 0x9e4818;
	// 	this._gameNmaeTF.textAlign = egret.HorizontalAlign.LEFT;
	// 	this.addChild(this._gameNmaeTF);
	// 	this._gameNmaeTF.x = 94; this._gameNmaeTF.y = 12;
	// 	this._gameNmaeTF.text = "--";

	// 	this._teahouseInfoTF = new egret.TextField();
	// 	this._teahouseInfoTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
	// 	this._teahouseInfoTF.size = 18;
	// 	this._teahouseInfoTF.textColor = 0x9e4818;
	// 	this._teahouseInfoTF.textAlign = egret.HorizontalAlign.LEFT;
	// 	this.addChild(this._teahouseInfoTF);
	// 	this._teahouseInfoTF.x = 281; this._teahouseInfoTF.y = 14;
	// 	this._teahouseInfoTF.multiline = this._teahouseInfoTF.wordWrap = true;
	// 	this._teahouseInfoTF.width = 220; this._teahouseInfoTF.height = 22;
	// 	this._teahouseInfoTF.text = "--";

	// 	this._delBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
	// 	this._enterBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
	// 	this._quitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
	// }

	private onTouchTap(evt:egret.TouchEvent):void
	{
		//删除茶楼
		if(evt.currentTarget == this.delBtn)
		{
			var data:Object = {};
			data["msgType"] = NetAction.teahouse_del;
			data["gameType"] = 0;
			data["msg"] = {"teaHouseNum": this.data["teaHouseNum"]};
			
			SocketCommand.getInstance().send(data);
		}
		else if(evt.currentTarget == this.enterBtn)
		{
			var data:Object = {};
			data["msgType"] = NetAction.teahouse_enter;
			data["gameType"] = 0;
			data["msg"] = {"teaHouseNum": this.data["teaHouseNum"]};

			SocketCommand.getInstance().send(data);
		}
		else if(evt.currentTarget == this.quitBtn)
		{
			var data:Object = {};
			data["msgType"] = NetAction.teahouse_quit;
			data["gameType"] = 0;
			data["msg"] = {"teaHouseNum": this.data["teaHouseNum"]};

			SocketCommand.getInstance().send(data);
		}
	}
}