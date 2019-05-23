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
 * 推广界面
 */
var TuiGuangView = (function (_super) {
    __extends(TuiGuangView, _super);
    function TuiGuangView() {
        var _this = _super.call(this) || this;
        _this.skinName = "TuiGuangSkin";
        return _this;
    }
    TuiGuangView.prototype.createComplete = function (event) {
        var _this = this;
        _super.prototype.createComplete.call(this, event);
        this.inputTF.type = egret.TextFieldType.INPUT;
        this.inputTF.addEventListener(egret.FocusEvent.FOCUS_IN, function () {
            if (_this.inputTF.text == "请输入推荐码")
                _this.inputTF.text = "";
        }, this);
        this.inputTF.addEventListener(egret.FocusEvent.FOCUS_OUT, function () {
            if (_this.inputTF.text == "")
                _this.inputTF.text = "请输入推荐码";
        }, this);
    };
    TuiGuangView.prototype.show = function () {
        this.inputTF.text = "请输入推荐码";
        this.bindButton(this.bindBtn);
    };
    TuiGuangView.prototype.touchBindButtonHandler = function (clickTarget) {
        _super.prototype.touchBindButtonHandler.call(this, clickTarget);
        if (clickTarget == this.bindBtn) {
            var inputStr = this.inputTF.text.trim();
            if (inputStr == "") {
                AlertView.getInstance().show("请输入推荐码！", AlertView.ALERT_MODE);
                return;
            }
            GameEventManager.addEvent(NetAction.bind.toString(), this.onBindResponse, this);
            var data = {};
            data["msgType"] = NetAction.bind;
            data["gameType"] = 0;
            data["msg"] = { "proxyId": inputStr };
            SocketCommand.getInstance().send(data);
        }
    };
    TuiGuangView.prototype.onBindResponse = function (evt) {
        AlertView.getInstance().show("恭喜，绑定成功！", AlertView.ALERT_MODE);
        this.close();
    };
    return TuiGuangView;
}(IFrameBase));
__reflect(TuiGuangView.prototype, "TuiGuangView");
//# sourceMappingURL=TuiGuangView.js.map