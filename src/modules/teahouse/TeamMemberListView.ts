class TeamMemberListView extends IFrameBase
{
	public constructor() {
		super();

		this.skinName = "TeamMemberListSkin";
		this.name = "TeamMemberListView";
	}

	private tab1:eui.Image;
	private tab2:eui.Image;
	private _tabIndex:number = -1;
	private searchTF:eui.Label;
	private searchBtn:eui.Button;
	public list:eui.List;
	public dataList:eui.ArrayCollection;//数据集

	public createComplete(event: egret.Event): void {

		super.createComplete(event);

		this.list.itemRenderer = TeamMemberTile;


		this.searchTF.type = egret.TextFieldType.INPUT;
		this.searchTF.addEventListener(egret.TextEvent.FOCUS_IN, ()=>{

			if(this.searchTF.text == "输入查询的昵称")
				this.searchTF.text = "";
		}, this);

		this.searchTF.addEventListener(egret.TextEvent.FOCUS_OUT, ()=>{

			if(this.searchTF.text == "")
				this.searchTF.text = "输入查询的昵称";
		}, this);
	}	

	public childrenCreated():void
	{

	}

	public dispose():void
	{
		super.dispose();

		GameEventManager.removeEvent(NetAction.teahouse_playerList.toString(), this.onTeahousePlayerListResponse, this);
		GameEventManager.removeEvent(NetAction.teahouse_applyList.toString(), this.onTeahouseApplyListResponse, this);
		GameEventManager.removeEvent(NetAction.teahouse_agreeMember.toString(), this.onTeahouseMemberChange, this);
		GameEventManager.removeEvent(NetAction.teahouse_disagreeMember.toString(), this.onTeahouseMemberChange, this);
		GameEventManager.removeEvent(NetAction.teahouse_removeMember.toString(), this.onTeahouseMemberChange, this);
		GameEventManager.removeEvent(NetAction.teahouse_setMember.toString(), this.onTeahouseMemberChange, this);
	}

	public show():void
	{
		this.searchTF.text = "输入查询的昵称";
		this._tabIndex = -1;

		GameEventManager.addEvent(NetAction.teahouse_agreeMember.toString(), this.onTeahouseMemberChange, this);
		GameEventManager.addEvent(NetAction.teahouse_disagreeMember.toString(), this.onTeahouseMemberChange, this);
		GameEventManager.addEvent(NetAction.teahouse_removeMember.toString(), this.onTeahouseMemberChange, this);
		GameEventManager.addEvent(NetAction.teahouse_setMember.toString(), this.onTeahouseMemberChange, this);

		this.showTabView(1);

		this.bindButton(this.searchBtn);
		this.bindButton(this.tab1);
		this.bindButton(this.tab2);
	}

	private _memberList:Array<any> = [];

	private onTeahouseMemberChange(evt:DEvent):void
	{
		var result:Object = evt.data;
		var data:Array<any> = result["data"];

		if(this._tabIndex == 1)
		{
			this.requestPlayerList();
		}
		else
		{
			this.requestApplyList();
		}
	}

	private requestPlayerList():void
	{
		var data:Object = {};
		data["msgType"] = NetAction.teahouse_playerList;
		data["gameType"] = 0;
		data["msg"] = {"teaHouseNum": GameModel.instance().teaHouseNum};
		SocketCommand.getInstance().send(data);
	}

	private requestApplyList():void
	{
		var data:Object = {};
		data["msgType"] = NetAction.teahouse_applyList;
		data["gameType"] = 0;
		data["msg"] = {"teaHouseNum": GameModel.instance().teaHouseNum};
		SocketCommand.getInstance().send(data);
	}

	private showTabView(tabIndex:number):void
	{
		if(this._tabIndex == tabIndex)
		{
			return;
		}
		this._tabIndex = tabIndex;
		if(tabIndex == 1)
		{
			this.tab1.source = "teahouse_json.t_memberTab1_select";
			this.tab2.source = "teahouse_json.t_memberTab2_default";

			GameEventManager.addEvent(NetAction.teahouse_playerList.toString(), this.onTeahousePlayerListResponse, this);
			this.requestPlayerList();
		}
		else
		{
			this.tab1.source = "teahouse_json.t_memberTab1_default";
			this.tab2.source = "teahouse_json.t_memberTab2_select";
			GameEventManager.addEvent(NetAction.teahouse_applyList.toString(), this.onTeahouseApplyListResponse, this);
			this.requestApplyList();
		}
	}

	private onTeahousePlayerListResponse(evt:DEvent):void
	{
		var result:Object = evt.data;
		var data:Array<any> = result["data"];

		data.forEach((value:any, index:number)=>{

			data[index]["rank"] = index+1;
			data[index]["isMember"] = true;

		}, this);
		this._memberList = data;

		// this._listContainer.removeChildren();

		// var len:number = data.length;
		// var teamMemberTile:TeamMemberTile;
		// for(var i:number = 0; i < len; i++)
		// {
		// 	teamMemberTile = new TeamMemberTile();
		// 	teamMemberTile.isMyPlayer(true);
		// 	teamMemberTile.setData(data[i], i+1);
		// 	teamMemberTile.y = i * 94;
		// 	this._listContainer.addChild(teamMemberTile);
		// }
		// this._scrollView.setScrollPosition(0, 0);
		this.dataList = new eui.ArrayCollection(data);
		this.list.dataProvider =  this.dataList;
	}

	private onTeahouseApplyListResponse(evt:DEvent):void
	{
		var result:Object = evt.data;
		var data:Array<any> = result["data"];

		data.forEach((value:any, index:number)=>{

			data[index]["rank"] = index+1;
			data[index]["isMember"] = false;

		}, this);
		// this._listContainer.removeChildren();

		// var len:number = data.length;
		// var teamMemberTile:TeamMemberTile;
		// for(var i:number = 0; i < len; i++)
		// {
		// 	teamMemberTile = new TeamMemberTile();
		// 	teamMemberTile.isMyPlayer(false);
		// 	teamMemberTile.setData(data[i], i+1);
		// 	teamMemberTile.y = i * 94;
		// 	this._listContainer.addChild(teamMemberTile);
		// }
		// this._scrollView.setScrollPosition(0, 0);
		this.dataList = new eui.ArrayCollection(data);
		this.list.dataProvider =  this.dataList;
	}

	// protected showComplete(): void 
	// {
	// 	this._bg = new egret.Bitmap();
	// 	this._bg.texture = RES.getRes("hall_json.panel_bg");
	// 	this.addChild(this._bg);
	// 	this._bg.scale9Grid = new egret.Rectangle(20, 66, 120, 70);
	// 	this._bg.width = 578; this._bg.height = 608;

	// 	this._titleImg = new egret.Bitmap();
	// 	this._titleImg.texture = RES.getRes("ui_json.teamList_title");
	// 	this.addChild(this._titleImg);
	// 	this._titleImg.x = (this._bg.width - this._titleImg.width ) >>1;

	// 	var tabBg:egret.Bitmap = DUtils.createBitmapByName("ui_json.tabBarBg");
	// 	this.addChild(tabBg);
	// 	tabBg.x = 23; tabBg.y = 79;

	// 	this._tabSelectBg = DUtils.createBitmapByName("ui_json.tab_select_bg");
	// 	this._tabSelectBg.x = 288; this._tabSelectBg.y = 82;
	// 	this.addChild(this._tabSelectBg);

	// 	this._tabButton = new DButton("ui_json.myMemberLabel");
	// 	this.addChild(this._tabButton);
	// 	this._tabButton.x = 101; this._tabButton.y = 87;

	// 	this._tabButton2 = new DButton("ui_json.applyMemberLabel");
	// 	this.addChild(this._tabButton2);
	// 	this._tabButton2.x = 373; this._tabButton2.y = 86;

	// 	this._listContainer = new egret.DisplayObjectContainer();

	// 	this._scrollView = new egret.ScrollView();
	// 	this._scrollView.setContent(this._listContainer);
	// 	this._scrollView.width = this.width;
	// 	this._scrollView.height = 362;
	// 	this.addChild(this._scrollView);
	// 	this._scrollView.horizontalScrollPolicy = "off";
	// 	this._scrollView.x = 22; this._scrollView.y = 126;

	// 	this._closeBtn = new DButton("ui_json.closeBtn");
	// 	this.addChild(this._closeBtn);
	// 	this._closeBtn.x = 523; this._closeBtn.y = -21;

	// 	var searInputBg:egret.Bitmap = new egret.Bitmap();
	// 	searInputBg.texture = RES.getRes("ui_json.searchInputBg");
	// 	this.addChild(searInputBg);
	// 	searInputBg.x = 28; searInputBg.y = 520;

	// 	this._searTF = new egret.TextField();
	// 	this._searTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
	// 	this._searTF.size = 25;
	// 	this._searTF.textColor = 0x8a4b0b;
	// 	this.addChild(this._searTF);
	// 	this._searTF.textAlign = egret.HorizontalAlign.LEFT;
	// 	this._searTF.x = 39; this._searTF.y = 536;
		
		
	// 	this._searTF.width = 358; 
	// 	this._searTF.type = egret.TextFieldType.INPUT;

	// 	this._searTF.addEventListener(egret.TextEvent.FOCUS_IN, ()=>{

	// 		if(this._searTF.text == "输入查询的昵称")
	// 			this._searTF.text = "";
	// 	}, this);
	// 	this._searTF.addEventListener(egret.TextEvent.FOCUS_OUT, ()=>{

	// 		if(this._searTF.text == "")
	// 			this._searTF.text = "输入查询的昵称";
			
	// 	}, this);

	// 	this._searBtn = new DButton("ui_json.searchBtn");
	// 	this.addChild(this._searBtn);
	// 	this._searBtn.x = 418; this._searBtn.y = 515;

	// 	this.iframeWidth = this._bg.width;
	// 	this.iframeHeight = 585;

	// 	var bg:egret.Shape = new egret.Shape();
	// 	bg.graphics.beginFill(0, 0.5);
	// 	bg.graphics.drawRect(0, 0, GameGlobal.stage.stageWidth, GameGlobal.stage.stageHeight);
	// 	bg.graphics.endFill();
	// 	this.addChildAt(bg, 0);
	// 	bg.x = -(GameGlobal.stage.stageWidth - this.iframeWidth) >> 1;
	// 	bg.y = -(GameGlobal.stage.stageHeight - this.iframeHeight) >> 1;

	// 	this._closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
	// 	this._searBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);

	// 	this._tabButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
	// 	this._tabButton2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    // }

	protected touchBindButtonHandler(clickTarget: egret.DisplayObject): void 
	{
		super.touchBindButtonHandler(clickTarget);

		switch(clickTarget)
		{
			case this.tab1:
				this.showTabView(1);
				break;
			case this.tab2:
				this.showTabView(2);
				break;
			case this.searchBtn:
				this.search();
				break;
		}
	}
	private search():void
	{
		var search_name:string = this.searchTF.text.trim();
		if(search_name == "") return;

		var len:number = 0;
		var memberList:Array<any> = [];
		for(var i:number = 0; len = this._memberList.length, i < len; i++)
		{
			if(this._memberList[i].nickName == search_name)
				memberList.push(this._memberList[i]);
		}

		this.dataList = new eui.ArrayCollection(memberList);
		this.list.dataProvider =  this.dataList;

		// this._listContainer.removeChildren();

		// var len:number = memberList.length;
		// var teamMemberTile:TeamMemberTile;
		// for(var i:number = 0; i < len; i++)
		// {
		// 	teamMemberTile = new TeamMemberTile();
		// 	teamMemberTile.isMyPlayer(true);
		// 	teamMemberTile.setData(memberList[i], i+1);
		// 	teamMemberTile.y = i * 94;
		// 	this._listContainer.addChild(teamMemberTile);
		// }
		// this._scrollView.setScrollPosition(0, 0);
	}

	private onSetMember(evt:DEvent):void
	{

	}
}
class TeamMemberTile extends eui.ItemRenderer
{
	public constructor()
	{
		super();

		this.skinName = "TeamMemberListItemSkin";
	}

	// public isMyPlayer(value:boolean):void
	// {
	// 	if(value)
	// 	{
	// 		this.cancelManagerBtn.visible = this._removeBtn.visible = true;
	// 		this._agreeBtn.visible = this._refuseBtn.visible = false;
	// 	}
	// 	else
	// 	{
	// 		this._setBtn.visible = this._removeBtn.visible = false;
	// 		this._agreeBtn.visible = this._refuseBtn.visible = true;
	// 	}
	// }

	// private _data:Object;
	// public setData(data:Object, rank:number):void
	// {
	// 	this._rankTF.text = rank.toString();
	// 	this._nickNameTF.text = data["nickName"];
	// 	this._idTF.text = data["playerId"];

	// 	this._face.load(data["headImgUrl"])
	// }


	private setManagerBtn:DButton; //设为店小二
	private cancelManagerBtn:eui.Button;

	private removeBtn:DButton; //移除
	private agreeBtn:eui.Button; //同意
	private refuseBtn:eui.Button; //拒绝

	private rankTF:eui.Label;
	private _face:DImage;
	private nickNameTF:eui.Label;
	private idTF:eui.Label;

	public childrenCreated():void
	{
		// this._bg = new egret.Bitmap();
		// this._bg.texture = RES.getRes("ui_json.teamListTileBg");
		// this.addChild(this._bg);

		// this._rankTF = new egret.TextField();
		// this._rankTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		// this._rankTF.size = 50;
		// this._rankTF.textColor = 0x8a4b0b;
		// this.addChild(this._rankTF);
		// this._rankTF.textAlign = egret.HorizontalAlign.CENTER;
		// this._rankTF.x = 30; this._rankTF.y = 18;
		// this._rankTF.text = "-";

		this._face = new DImage(52, 52);
		this.addChild(this._face);
		this._face.x = 72; this._face.y = 7;

		// this._nickNameTF = new egret.TextField();
		// this._nickNameTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		// this._nickNameTF.size = 22;
		// this._nickNameTF.textColor = 0x9e4818;
		// this.addChild(this._nickNameTF);
		// this._nickNameTF.textAlign = egret.HorizontalAlign.LEFT;
		// this._nickNameTF.x = 176; this._nickNameTF.y = 22;
		// this._nickNameTF.text = "--";

		// this._idTF = new egret.TextField();
		// this._idTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		// this._idTF.size = 18;
		// this._idTF.textColor = 0x9e4818;
		// this.addChild(this._idTF);
		// this._idTF.textAlign = egret.HorizontalAlign.LEFT;
		// this._idTF.x = 176; this._idTF.y = 50;
		// this._idTF.text = "--";

		// this._setBtn = new DButton("ui_json.setManagerBtn");
		// this.addChild(this._setBtn);

		// this._removeBtn = new DButton("ui_json.removeBtn");
		// this.addChild(this._removeBtn);

		// this._agreeBtn = new DButton("ui_json.agreeBtn");
		// this.addChild(this._setBtn);

		// this._refuseBtn = new DButton("ui_json.refuseBtn");
		// this.addChild(this._refuseBtn);

		// this._setBtn.x = 335; this._setBtn.y = 21;
		// this._removeBtn.x = 432; this._removeBtn.y = 21;

		// this._agreeBtn.x = 335; this._agreeBtn.y = 21;
		// this._refuseBtn.x = 432; this._refuseBtn.y = 21;

		this.setManagerBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandle, this);
		this.cancelManagerBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandle, this);
		this.removeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandle, this);
		this.agreeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandle, this);
		this.refuseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandle, this);
	}

	protected dataChanged(): void 
	{
		super.dataChanged();

		LogUtils.log("this.data = " + this.data);

		this.updateView();
	}

	private updateView():void
	{
		this.rankTF.text = this.data.rank.toString();
		this.nickNameTF.text = this.data["nickName"];
		this.idTF.text = this.data["playerId"];
		this._face.load(this.data["headImgUrl"]);

		///todo 判断当前是否为成员
		var isMember:boolean = this.data["isMember"];
		var isDianXiaoer:number = this.data["isDianXiaoer"];

		if(isMember)
		{
			this.cancelManagerBtn.visible = this.removeBtn.visible = true;
			this.agreeBtn.visible = this.refuseBtn.visible = false;

			if(isDianXiaoer == 1)
			{
				this.cancelManagerBtn.visible = true;
				this.setManagerBtn.visible = false;
			}
			else
			{
				this.cancelManagerBtn.visible = false;
				this.setManagerBtn.visible = true;
			}

			if(this.data["playerId"] == MyUserInfo.getInstance().userId)
			{
				this.cancelManagerBtn.visible = this.removeBtn.visible = false;
				this.setManagerBtn.visible = false;
			}
			else if(MyUserInfo.getInstance().userId != GameGlobal.teahouse_ownerId)
			{
				if(this.data["playerId"] == GameGlobal.teahouse_ownerId)
				{
					this.cancelManagerBtn.visible = this.removeBtn.visible = false;
					this.setManagerBtn.visible = false;
				}
				else if(GameGlobal.isDianXiaoer == 0)
				{
					this.cancelManagerBtn.visible = this.removeBtn.visible = false;
					this.setManagerBtn.visible = false;
				}
				
			}
		}
		else
		{
			this.cancelManagerBtn.visible = this.removeBtn.visible = false;
			this.agreeBtn.visible = this.refuseBtn.visible = true;
		}
	}

	private onTouchHandle(evt:egret.TouchEvent):void
	{
		switch(evt.currentTarget)
		{
			//设置店小二
			case this.setManagerBtn:
				var data:Object = {};
				data["msgType"] = NetAction.teahouse_setMember;
				data["gameType"] = 0;
				data["msg"] = {"teaHouseNum": GameModel.instance().teaHouseNum, 
					"otherPlayerId":this.data["playerId"], "isDianXiaoer":1};
				SocketCommand.getInstance().send(data);
				break;
			//取消店小二
			case this.cancelManagerBtn:
				var data:Object = {};
				data["msgType"] = NetAction.teahouse_setMember;
				data["gameType"] = 0;
				data["msg"] = {"teaHouseNum": GameModel.instance().teaHouseNum, 
					"otherPlayerId":this.data["playerId"], "isDianXiaoer":0};
				SocketCommand.getInstance().send(data);
				break;
			//移除
			case this.removeBtn:
				var data:Object = {};
				data["msgType"] = NetAction.teahouse_removeMember;
				data["gameType"] = 0;
				data["msg"] = {"teaHouseNum": GameModel.instance().teaHouseNum, "otherPlayerId":this.data["playerId"]};
				SocketCommand.getInstance().send(data);
				break;
			//同意加入
			case this.agreeBtn:
				var data:Object = {};
				data["msgType"] = NetAction.teahouse_agreeMember;
				data["gameType"] = 0;
				data["msg"] = {"teaHouseNum": GameModel.instance().teaHouseNum, "otherPlayerId":this.data["playerId"], "status":1};
				SocketCommand.getInstance().send(data);
				break;
			//拒绝加入
			case this.refuseBtn:
				var data:Object = {};
				data["msgType"] = NetAction.teahouse_agreeMember;
				data["gameType"] = 0;
				data["msg"] = {"teaHouseNum": GameModel.instance().teaHouseNum, "otherPlayerId":this.data["playerId"], "status":2};
				SocketCommand.getInstance().send(data);
				break;
		}
	}
}