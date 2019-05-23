var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * 舞台视图
 */
var HallView = (function (_super) {
    __extends(HallView, _super);
    function HallView() {
        var _this = _super.call(this) || this;
        _this.skinName = "HallSkin";
        _this.name = "HallView";
        _this.percentWidth = 100;
        _this.percentHeight = 100;
        _this.touchEnabled = true;
        return _this;
    }
    // 添加屏幕监听
    HallView.prototype.createComplete = function (event) {
        _super.prototype.createComplete.call(this, event);
        GameGlobal.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchStageHandle, this);
        GameEventManager.addEvent(NetAction.notice.toString(), this.onNoticeResponse, this);
        this.show();
    };
    /**
     * 监听公告
     * @param evt 公告信息
     */
    HallView.prototype.onNoticeResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        var noticeContent = data["noticeContent"];
        this._noticeView.addNotice(noticeContent);
    };
    HallView.prototype.childrenCreated = function () {
        this._teahouseList = new MyTeahouseList(this.myTeahouseList);
        this._rightMenu = new HallRightMenu(this.rightMenu);
        this._topMenu = new HallTopMenu(this.topMenu);
        this._bottomMenu = new HallBottomMenu(this.bottomMenu);
        this._selfInfoView = new SelfInfoView(this["selfInfo"]);
        // 动态插入一个页面
        this._noticeView = new NoticeView();
        this._noticeView.x = 0;
        this._noticeView.y = 93;
        this.addChild(this._noticeView);
        this._rankView = new RankView();
        this.addChild(this._rankView);
        this._rankView.y = 162;
        this._rankView.horizontalCenter = 9;
    };
    // 触摸同一点隐藏弹出框
    HallView.prototype.onTouchStageHandle = function (evt) {
        if (evt.target == this.myTeahouseList || evt.target == this.myTeahouseList["btn"])
            return;
        //这里只有茶楼信息，如果修改后可以做对应添加
        if ((evt.target != this._teahouseList) && (evt.target.parent != this._teahouseList))
            this._teahouseList.hide();
    };
    // 展示菜单
    HallView.prototype.show = function () {
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
    };
    /**
     * 重置舞台大小
     */
    HallView.prototype.resize = function () {
        this.percentWidth = 100;
        this.percentHeight = 100;
        this.width = GameGlobal.stageW;
        this.height = GameGlobal.stageH;
    };
    /**
     * 子类如果有bindButton, click事件覆盖次方法实现
     */
    HallView.prototype.touchBindButtonHandler = function (clickTarget) {
        _super.prototype.touchBindButtonHandler.call(this, clickTarget);
    };
    return HallView;
}(BaseUIComponent));
__reflect(HallView.prototype, "HallView");
//# sourceMappingURL=HallView.js.map