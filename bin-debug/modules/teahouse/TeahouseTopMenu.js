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
var TeahouseTopMenu = (function (_super) {
    __extends(TeahouseTopMenu, _super);
    function TeahouseTopMenu() {
        var _this = _super.call(this) || this;
        _this.initView();
        return _this;
    }
    TeahouseTopMenu.prototype.init = function (data) {
        this._data = data;
        this._shenchaBtn.visible = true;
        if (data.hasOwnProperty("playerId")) {
            var playerId = data["playerId"];
            if (playerId != MyUserInfo.getInstance().userId)
                this._shenchaBtn.visible = false;
        }
        this._nameTF.text = GameGlobal.getGameName(GameGlobal.gameType);
        this._idTF.text = "茶楼号：" + GameModel.instance().teaHouseNum.toString();
    };
    TeahouseTopMenu.prototype.initView = function () {
        this._quitBtn = new DButton("teahouse_json.t_quitBtn");
        this.addChild(this._quitBtn);
        // this._quitBtn.anchorOffsetX = this._quitBtn.width * 0.5;
        // this._quitBtn.anchorOffsetY = this._quitBtn.height * 0.5;
        // this._quitBtn.scaleX = -1;
        this._quitBtn.x = 48;
        this._quitBtn.y = 15;
        this._refreshBtn = new DButton("teahouse_json.t_refreshBtn");
        this.addChild(this._refreshBtn);
        this._refreshBtn.x = 125;
        this._refreshBtn.y = 15;
        this._shenchaBtn = new DButton("teahouse_json.t_editBtn");
        this.addChild(this._shenchaBtn);
        this._shenchaBtn.x = 211;
        this._shenchaBtn.y = 15;
        this._shareBtn = new DButton("teahouse_json.t_shareBtn");
        this.addChild(this._shareBtn);
        this._shareBtn.x = GameGlobal.stageW - 194; //1136-1020
        this._shareBtn.y = 15;
        this._setBtn = new DButton("teahouse_json.t_setBtn");
        this.addChild(this._setBtn);
        this._setBtn.x = GameGlobal.stageW - 87;
        this._setBtn.y = 15;
        this._nameBg = new egret.Bitmap();
        this._nameBg.texture = RES.getRes("teahouse_json.t_titleBg");
        this.addChild(this._nameBg);
        this._nameBg.x = (GameGlobal.stageW - this._nameBg.width) >> 1;
        // this._nameBg.y = 15;
        this._nameTF = new egret.TextField();
        this._nameTF.textColor = 0xffffff;
        this._nameTF.size = 30;
        this._nameTF.textAlign = egret.HorizontalAlign.CENTER;
        this._nameTF.width = 346;
        this._nameTF.x = 395;
        this._nameTF.y = 16;
        this.addChild(this._nameTF);
        this._nameTF.text = "--";
        this._idTF = new egret.TextField();
        this._idTF.textColor = 0xffffff;
        this._idTF.size = 20;
        this._idTF.textAlign = egret.HorizontalAlign.CENTER;
        this._idTF.width = 346;
        this._idTF.x = 395;
        this._idTF.y = 54;
        this.addChild(this._idTF);
        this._quitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
        this._shenchaBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
        this._setBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
        this._shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
        this._refreshBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
    };
    TeahouseTopMenu.prototype.onTouchTapHandle = function (evt) {
        switch (evt.currentTarget) {
            case this._quitBtn:
                var data = {};
                data["msgType"] = NetAction.teahouse_backToHall;
                data["gameType"] = 0;
                data["msg"] = { "teaHouseNum": GameModel.instance().teaHouseNum };
                SocketCommand.getInstance().send(data);
                break;
            case this._shenchaBtn:
                GameGlobal.iframeLayer.showIFrame(TeahouseSetView);
                break;
            case this._setBtn:
                GameGlobal.iframeLayer.showIFrame(SettingView);
                break;
            case this._shareBtn:
                GameGlobal.iframeLayer.showIFrame(ShareView2);
                break;
            case this._refreshBtn:
                var data = {};
                data["msgType"] = NetAction.teahouse_table_memberList;
                data["gameType"] = 0;
                data["msg"] = { "teaHouseNum": GameModel.instance().teaHouseNum };
                SocketCommand.getInstance().send(data);
                break;
        }
    };
    return TeahouseTopMenu;
}(egret.DisplayObjectContainer));
__reflect(TeahouseTopMenu.prototype, "TeahouseTopMenu");
//# sourceMappingURL=TeahouseTopMenu.js.map