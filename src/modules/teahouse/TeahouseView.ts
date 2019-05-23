/**
 * 茶楼界面
 */
class TeahouseView extends egret.DisplayObjectContainer
{
	public constructor() {
		super();


		this.initView();
	}

	private _data:Object;
	private _isDianXiaoer:number = 0; //是否为店小二，1为店小二

	public dispose():void
	{

	}

	public init(data:Object):void
	{
		this._data = data;
		this._isDianXiaoer = data["isDianXiaoer"];

		var teaHouseNum:number = data["teaHouseNum"]; //茶楼编号
		var gameType:number = GameGlobal.gameType;
		var totalGames:number = data["totalGame"];
		var payType:number = data["payType"];
		var teaHouseOwnerWord:string = data["teaHouseOwnerWord"];

		GameGlobal.teahouse_ownerId = data["playerId"];
		GameGlobal.isDianXiaoer = this._isDianXiaoer;

		this._noticeView.init();
		this._noticeView.addNotice("房间信息：只扣老板房卡，每轮"+totalGames+"局，老板留言："+(teaHouseOwnerWord == null?"":teaHouseOwnerWord));

		this._tableView.init();
		this._topMenu.init(data);
		if(this._isDianXiaoer == 1)
		{
			GameGlobal.iframeLayer.showIFrame(TeahouseSetView);
		}
		else
		{
			if(data.hasOwnProperty("playerId"))
			{	
				var playerId:string = data["playerId"];
				if(playerId == MyUserInfo.getInstance().userId)
					GameGlobal.iframeLayer.showIFrame(TeahouseSetView);
			}
		}
		
		GameGlobal.iframeLayer.hideIFrame2(TeahouseManagerView);
	}

	private _bg:egret.Bitmap;
	private _bottomMenu:TeahouseBottomMenu;
	private _topMenu:TeahouseTopMenu;
	private _tableView:TeahouseTableView;
	private _noticeView:NoticeView;

	private initView():void
	{
		this._bg = new egret.Bitmap();
		this._bg.texture = RES.getRes("t_bg_png");
		this.addChild(this._bg);

		this._tableView = new TeahouseTableView();
		this.addChild(this._tableView);
		this._tableView.x = 11; this._tableView.y = 154;

		this._topMenu = new TeahouseTopMenu();
		this.addChild(this._topMenu);

		this._bottomMenu = new TeahouseBottomMenu();
		// this._bottomMenu.x = 0;
		// this._bottomMenu.y = 547;
		this.addChild(this._bottomMenu);
		this._bottomMenu.init();

		this._noticeView = new NoticeView();
		this._noticeView.x = 0; this._noticeView.y = 90;
		this.addChild(this._noticeView);

		GameEventManager.addEvent(NetAction.teahouse_table_memberList.toString(), this.onTableMemberListResponse, this);
		GameEventManager.addEvent(NetAction.teahouse_set.toString(), this.onTeahouseSetResponse, this);
	}

	private onTeahouseSetResponse(evt:DEvent):void
	{
		var result:Object = evt.data;
		var data:Object = result["data"];

		GameGlobal.iframeLayer.hideIFrame2(TeahouseSetView);
	}

	private onTableMemberListResponse(evt:DEvent):void
	{
		var result:Object = evt.data;
		var data:Array<any> = result["data"];

		this._tableView.updatePlayerList(data);
	}

	public resize():void
	{
		
	}
}