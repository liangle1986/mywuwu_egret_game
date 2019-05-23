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
 * 游戏设置
 */
var GameSettingView = (function (_super) {
    __extends(GameSettingView, _super);
    function GameSettingView() {
        var _this = _super.call(this) || this;
        _this._buttons = [];
        _this._buttonNames = ["setBtn2", "helpBtn", "quitBtn2"];
        _this.initView();
        return _this;
    }
    GameSettingView.prototype.initView = function () {
        var len = this._buttonNames.length;
        var button;
        for (var i = 0; i < len; i++) {
            button = new DButton("game_json." + this._buttonNames[i]);
            this.addChild(button);
            button.y = i * 69;
            button["name"] = this._buttonNames[i];
            button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        }
    };
    GameSettingView.prototype.onTouchTap = function (evt) {
        var name = evt.currentTarget.name;
        if (name == "setBtn2") {
            GameGlobal.iframeLayer.showIFrame(SettingView);
        }
        else if (name == "helpBtn") {
            // GameGlobal.iframeLayer.showIFrame(RuleView);
        }
        else {
            AlertView.getInstance().setConfirmCallBack(this.quitConfirm, this);
            AlertView.getInstance().show("是否确定解散房间？", AlertView.CONFIRM_MODE);
        }
    };
    GameSettingView.prototype.quitConfirm = function () {
        var data = {};
        data["msgType"] = NetAction.dissolveRoom;
        data["token"] = GameModel.instance().token;
        data["gameType"] = GameGlobal.gameType;
        data["msg"] = { "roomId": GameModel.instance().roomId, "playerId": MyUserInfo.getInstance().userId };
        SocketCommand.getInstance().send(data);
    };
    return GameSettingView;
}(egret.Sprite));
__reflect(GameSettingView.prototype, "GameSettingView");
//# sourceMappingURL=GameSettingView.js.map