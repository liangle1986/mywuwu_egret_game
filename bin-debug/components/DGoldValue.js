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
 * 金币 / 钻石 显示条
 */
var DGoldValue = (function (_super) {
    __extends(DGoldValue, _super);
    function DGoldValue() {
        var _this = _super.call(this) || this;
        _this.initView();
        return _this;
    }
    DGoldValue.prototype.setValue = function (value) {
        this._valueTF.text = value.toString();
    };
    DGoldValue.prototype.setType = function (type) {
        if (type === void 0) { type = 0; }
        if (type == DGoldValue.DIAMOND) {
            this._iconImg.texture = RES.getRes("main_json.diamondIcon");
        }
        else {
            this._iconImg.texture = RES.getRes("main_json.moneyIcon");
        }
    };
    DGoldValue.prototype.initView = function () {
        this._bg = new egret.Bitmap();
        this.addChild(this._bg);
        this._bg.x = 5;
        this._bg.y = 1;
        this._bg.texture = RES.getRes("main_json.goldValueBg");
        this._iconImg = new egret.Bitmap();
        this.addChild(this._iconImg);
        this._iconImg.texture = RES.getRes("main_json.moneyIcon");
        this._iconImg.x = 0;
        this._iconImg.y = 1;
        this._valueTF = new egret.TextField();
        this._valueTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        this._valueTF.size = 24;
        this._valueTF.textColor = 0xffffff;
        this.addChild(this._valueTF);
        this._valueTF.textAlign = egret.HorizontalAlign.CENTER;
        this._valueTF.text = "0";
        this._valueTF.width = 126;
        this._valueTF.x = 42;
        this._valueTF.y = 7;
        this._addBtn = new egret.Bitmap();
        this._addBtn.touchEnabled = true;
        this.addChild(this._addBtn);
        this._addBtn.x = 162;
        this._addBtn.y = 0;
        this._addBtn.texture = RES.getRes("main_json.main_addicon");
        this._addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    };
    DGoldValue.prototype.onTouchTap = function (evt) {
        AlertView.getInstance().show("开发中，敬请期待！");
    };
    DGoldValue.GOLD = 0;
    DGoldValue.DIAMOND = 1;
    return DGoldValue;
}(egret.Sprite));
__reflect(DGoldValue.prototype, "DGoldValue");
//# sourceMappingURL=DGoldValue.js.map