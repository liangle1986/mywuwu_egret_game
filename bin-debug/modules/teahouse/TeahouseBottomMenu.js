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
 *
 */
var TeahouseBottomMenu = (function (_super) {
    __extends(TeahouseBottomMenu, _super);
    function TeahouseBottomMenu() {
        var _this = _super.call(this) || this;
        _this.initView();
        return _this;
    }
    TeahouseBottomMenu.prototype.init = function () {
        var userName = MyUserInfo.getInstance().userName;
        if (StringUtils.getStringLen(userName) > 6)
            userName = userName.substr(0, 6) + "...";
        this._nameTF.text = userName + "（" + MyUserInfo.getInstance().userId + "）";
        GameEventManager.addEvent(GameEventManager.UPDATE_USER_GOLD, this.onUpdateUserGold, this);
        this.onUpdateUserGold(null);
        this._faceImg.load(MyUserInfo.getInstance().faceUrl);
    };
    TeahouseBottomMenu.prototype.onUpdateUserGold = function (evt) {
        this._roomNumTF.text = MyUserInfo.getInstance().gold.toString();
    };
    TeahouseBottomMenu.prototype.initView = function () {
        var infoBg = new egret.Bitmap();
        infoBg.texture = RES.getRes("teahouse_json.t_selfInfoBg");
        this.addChild(infoBg);
        infoBg.y = 547;
        var fangkaIcon = DUtils.createBitmapByName("teahouse_json.t_fangkaBg");
        this.addChild(fangkaIcon);
        fangkaIcon.x = 60;
        fangkaIcon.y = 602;
        this._faceImg = new DImage(51, 52);
        this.addChild(this._faceImg);
        this._faceImg.x = 5;
        this._faceImg.y = 577;
        this._nameTF = new egret.TextField();
        this._nameTF.textColor = 0x753f21;
        this._nameTF.size = 18;
        this._nameTF.textAlign = egret.HorizontalAlign.LEFT;
        this.addChild(this._nameTF);
        this._nameTF.x = 62;
        this._nameTF.y = 581;
        this._roomNumTF = new egret.TextField();
        this._roomNumTF.textColor = 0x753f21;
        this._roomNumTF.size = 24;
        this._roomNumTF.textAlign = egret.HorizontalAlign.LEFT;
        this.addChild(this._roomNumTF);
        this._roomNumTF.x = 96;
        this._roomNumTF.y = 605;
        this._nameTF.bold = this._roomNumTF.bold = true;
        this._btnContainer = new egret.DisplayObjectContainer();
        this.addChild(this._btnContainer);
        this._btnContainer.x = 294;
        this._btnContainer.y = 575;
        var btnNames = ["t_managerBtn", "t_memberBtn", "t_winnerBtn", "t_zhanjiBtn"];
        var len = btnNames.length;
        for (var i = 0; i < len; i++) {
            var btn = new DButton("teahouse_json." + btnNames[i]);
            btn.x = 213 * i;
            // btn.y = 575;
            if (i == len - 1) {
                // btn.x = 671;
                // btn.y = 0;
            }
            btn.name = btnNames[i];
            this._btnContainer.addChild(btn);
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandle, this);
        }
        this._faceImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
    };
    TeahouseBottomMenu.prototype.onTouchTapHandle = function (evt) {
        GameGlobal.iframeLayer.showIFrame(SelfDetailInfoView);
    };
    TeahouseBottomMenu.prototype.onTouchHandle = function (evt) {
        switch (evt.currentTarget.name) {
            case "t_memberBtn":
                GameGlobal.iframeLayer.showIFrame(TeamMemberListView);
                break;
            case "t_winnerBtn":
                GameGlobal.iframeLayer.showIFrame(WinnerView);
                break;
            case "t_managerBtn":
                GameGlobal.iframeLayer.showIFrame(TeahouseManagerView);
                break;
            case "t_zhanjiBtn":
                GameGlobal.iframeLayer.showIFrame(TeahouseScoreView);
                break;
        }
    };
    return TeahouseBottomMenu;
}(egret.DisplayObjectContainer));
__reflect(TeahouseBottomMenu.prototype, "TeahouseBottomMenu");
//# sourceMappingURL=TeahouseBottomMenu.js.map