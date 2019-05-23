/**
 * 舞台视图
 */
class HallView extends BaseUIComponent {
	public constructor() {
		super();

		this.skinName = "HallSkin";
		this.name = "HallView";
		this.percentWidth = 100;
		this.percentHeight = 100;

		this.touchEnabled = true;
	}

	//ui
	private roleImg: eui.Image;
	private myTeahouseList: eui.Component;
	private rightMenu: eui.Group;
	private topMenu: eui.Group;
	private bottomMenu: eui.Group;
	private rankGroup: eui.Group;

	private _topMenu: HallTopMenu;
	private _selfInfoView: SelfInfoView;
	private _bottomMenu: HallBottomMenu;
	private _rightMenu: HallRightMenu;
	private _rankView: RankView;
	private _teahouseList: MyTeahouseList;

	private _noticeView: NoticeView;

	// 添加屏幕监听
	public createComplete(event: egret.Event): void {
		super.createComplete(event);

		GameGlobal.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchStageHandle, this);
		GameEventManager.addEvent(NetAction.notice.toString(), this.onNoticeResponse, this);

		this.show();
	}

	/**
	 * 监听公告
	 * @param evt 公告信息
	 */
	private onNoticeResponse(evt: DEvent): void {
		var result: Object = evt.data;
		var data: Object = result["data"];

		var noticeContent: string = data["noticeContent"];
		this._noticeView.addNotice(noticeContent);
	}


	protected childrenCreated(): void {
		this._teahouseList = new MyTeahouseList(this.myTeahouseList);
		this._rightMenu = new HallRightMenu(this.rightMenu);
		this._topMenu = new HallTopMenu(this.topMenu);
		this._bottomMenu = new HallBottomMenu(this.bottomMenu);
		this._selfInfoView = new SelfInfoView(this["selfInfo"]);

		// 动态插入一个页面
		this._noticeView = new NoticeView();
		this._noticeView.x = 0; this._noticeView.y = 93;
		this.addChild(this._noticeView);

		this._rankView = new RankView();
		this.addChild(this._rankView);
		this._rankView.y = 162;
		this._rankView.horizontalCenter = 9;
	}


	// 触摸同一点隐藏弹出框
	private onTouchStageHandle(evt: egret.TouchEvent): void {
		if (evt.target == this.myTeahouseList || evt.target == this.myTeahouseList["btn"]) return;
		//这里只有茶楼信息，如果修改后可以做对应添加
		if ((evt.target != this._teahouseList) && (evt.target.parent != this._teahouseList))
			this._teahouseList.hide();
	}

	// 展示菜单
	public show(): void {
		if (this.initialized) {
			//role
			this.roleImg.x = -350;
			egret.Tween.removeTweens(this.roleImg);
			egret.Tween.get(this.roleImg).to({ x: 0 }, 300);
			//
			this.rightMenu.x = GameGlobal.stageW + 320;
			egret.Tween.removeTweens(this.rightMenu);
			egret.Tween.get(this.rightMenu).to({ x: GameGlobal.stageW - 322 }, 300);
		}
	}

	/**
	 * 重置舞台大小
	 */
	public resize(): void {
		this.percentWidth = 100;
		this.percentHeight = 100;
		this.width = GameGlobal.stageW;
		this.height = GameGlobal.stageH;
	}
	/**
	 * 子类如果有bindButton, click事件覆盖次方法实现
	 */
	protected touchBindButtonHandler(clickTarget: egret.DisplayObject): void {
		super.touchBindButtonHandler(clickTarget);


	}

}