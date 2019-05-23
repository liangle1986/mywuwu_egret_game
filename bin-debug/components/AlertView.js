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
 * 警告框 / 确认框
 */
var AlertView = (function (_super) {
    __extends(AlertView, _super);
    function AlertView() {
        var _this = _super.call(this) || this;
        _this.initView();
        return _this;
    }
    AlertView.getInstance = function () {
        if (this._instance == null)
            this._instance = new AlertView();
        return this._instance;
    };
    AlertView.prototype.setConfirmCallBack = function (backFun, thisObj) {
        this._confirmCallBackFun = backFun;
        this._thisObj = thisObj;
    };
    AlertView.prototype.setCancelCallBack = function (backFun, thisObj) {
        this._cancelCallBackFun = backFun;
        this._thisObj = thisObj;
    };
    AlertView.prototype.show = function (text, mode) {
        if (mode === void 0) { mode = AlertView.CONFIRM_MODE; }
        this._messageTF.text = text;
        GameGlobal.stage.addChild(this);
        if (mode == AlertView.ALERT_MODE) {
            this._confirmBtn2.visible = true;
            this._cancelBtn.visible = this._confirmBtn.visible = false;
        }
        else {
            this._confirmBtn2.visible = false;
            this._cancelBtn.visible = this._confirmBtn.visible = true;
        }
    };
    AlertView.prototype.hide = function () {
        if (this.stage)
            GameGlobal.stage.removeChild(this);
        this._confirmCallBackFun = null;
        this._cancelCallBackFun = null;
    };
    AlertView.prototype.initView = function () {
        var _this = this;
        this._bg = new egret.Shape();
        this._bg.graphics.beginFill(0, 0.5);
        this._bg.graphics.drawRect(0, 0, GameGlobal.stage.stageWidth, GameGlobal.stage.stageHeight);
        this._bg.graphics.endFill();
        this.addChild(this._bg);
        var content = new egret.Sprite();
        this.addChild(content);
        this._kuang = new egret.Bitmap();
        this._kuang.texture = RES.getRes("alert_bg_png");
        content.addChild(this._kuang);
        this._messageTF = new egret.TextField();
        this._messageTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        this._messageTF.multiline = true;
        this._messageTF.height = 152;
        this._messageTF.width = 548; //this._kuang.width;
        this._messageTF.wordWrap = true;
        // this._messageTF.height = 
        this._messageTF.textAlign = egret.HorizontalAlign.CENTER;
        this._messageTF.size = 25;
        this._messageTF.textColor = 0xffffff; //0x63370a;
        this._messageTF.y = 77;
        this._messageTF.x = 25;
        this._messageTF.text = "系统提示";
        content.addChild(this._messageTF);
        this._messageTF.lineSpacing = 8;
        this._confirmBtn = new egret.Bitmap();
        this._confirmBtn.texture = RES.getRes("hall_json.confirmBtn");
        this._confirmBtn.x = 83;
        this._confirmBtn.y = 234;
        content.addChild(this._confirmBtn);
        this._confirmBtn.touchEnabled = true;
        this._confirmBtn2 = new egret.Bitmap();
        this._confirmBtn2.texture = RES.getRes("hall_json.confirmBtn");
        this._confirmBtn2.y = 234;
        content.addChild(this._confirmBtn2);
        this._confirmBtn2.touchEnabled = true;
        this._confirmBtn2.visible = false;
        this._cancelBtn = new egret.Bitmap();
        this._cancelBtn.texture = RES.getRes("hall_json.cancelBtn");
        this._cancelBtn.x = 350;
        this._cancelBtn.y = 234;
        content.addChild(this._cancelBtn);
        this._cancelBtn.touchEnabled = true;
        this._cancelBtn.visible = false;
        // this._confirmBtn.x = (GameGlobal.stageW - this._confirmBtn.width) * 0.5;
        // this._kuang.x = (GameGlobal.stageW - this._kuang.width) * 0.5;
        this._confirmBtn2.x = (content.width - this._confirmBtn2.width) * 0.5;
        // this._cancelBtn.x = GameGlobal.stageW / 2 - 336;
        content.x = (GameGlobal.stageW - content.width) >> 1;
        content.y = (GameGlobal.stageH - content.height) >> 1;
        this._confirmBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this._confirmCallBackFun != null) {
                _this._confirmCallBackFun.call(_this._thisObj);
            }
            _this.hide();
        }, this);
        this._cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this._cancelCallBackFun != null) {
                _this._cancelCallBackFun.call(_this._thisObj);
            }
            _this.hide();
        }, this);
        this._confirmBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this._confirmCallBackFun != null) {
                _this._confirmCallBackFun.call(_this._thisObj);
            }
            _this.hide();
        }, this);
        this.touchEnabled = true;
    };
    AlertView.ALERT_MODE = 1;
    AlertView.CONFIRM_MODE = 2;
    AlertView._instance = null;
    return AlertView;
}(egret.Sprite));
__reflect(AlertView.prototype, "AlertView");
//# sourceMappingURL=AlertView.js.map