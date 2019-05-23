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
 * 茶楼设置界面
 */
var TeahouseSetView = (function (_super) {
    __extends(TeahouseSetView, _super);
    function TeahouseSetView() {
        var _this = _super.call(this) || this;
        _this._isNeedAudit = false;
        _this.skinName = "TeahouseSetSkin";
        _this.name = "TeahouseSetView";
        return _this;
    }
    TeahouseSetView.prototype.childrenCreated = function () {
        var _this = this;
        this.inputTF.type = egret.TextFieldType.INPUT;
        this.inputTF.addEventListener(egret.TouchEvent.FOCUS_IN, function () {
            if (_this.inputTF.text == "请输入公告，例如：您邀请玩家加入您的微信群消息...") {
                _this.inputTF.text = "";
            }
        }, this);
        this.inputTF.addEventListener(egret.TouchEvent.FOCUS_OUT, function () {
            if (_this.inputTF.text == "") {
                _this.inputTF.text = "请输入公告，例如：您邀请玩家加入您的微信群消息...";
            }
        }, this);
    };
    TeahouseSetView.prototype.show = function () {
        this.inputTF.text = "请输入公告，例如：您邀请玩家加入您的微信群消息...";
        this.bindButton(this.toggle);
        this.bindButton(this.confirmBtn);
    };
    TeahouseSetView.prototype.touchBindButtonHandler = function (clickTarget) {
        _super.prototype.touchBindButtonHandler.call(this, clickTarget);
        if (clickTarget == this.confirmBtn) {
            var message = this.inputTF.text.trim();
            if (message == "请输入公告，例如：您邀请玩家加入您的微信群消息...")
                message = "";
            if (message == "") {
                this.close();
            }
            else {
                var data = {};
                data["msgType"] = NetAction.teahouse_set;
                data["gameType"] = 0;
                var isNeedAudit = this._isNeedAudit ? 1 : 0;
                data["msg"] = { "teaHouseNum": GameModel.instance().teaHouseNum, "teaHouseOwnerWord": message, "isNeedAudit": isNeedAudit };
                SocketCommand.getInstance().send(data);
            }
        }
        else if (clickTarget == this.toggle) {
            this._isNeedAudit = !this._isNeedAudit;
            this.toggle.texture = this._isNeedAudit ? RES.getRes("teahouse_json.t_toggleOn") : RES.getRes("teahouse_json.t_toggleOff");
        }
    };
    return TeahouseSetView;
}(IFrameBase));
__reflect(TeahouseSetView.prototype, "TeahouseSetView");
//# sourceMappingURL=TeahouseSetView.js.map