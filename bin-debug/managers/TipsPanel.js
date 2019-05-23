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
var TipsPanel = (function (_super) {
    __extends(TipsPanel, _super);
    function TipsPanel(descStr) {
        if (descStr === void 0) { descStr = ""; }
        var _this = _super.call(this) || this;
        _this.descStr = "";
        _this.descStr = descStr;
        _this.initUI();
        return _this;
    }
    TipsPanel.prototype.initUI = function () {
        this.bg = new egret.Bitmap();
        this.bg.texture = RES.getRes("tipsBg");
        this.addChild(this.bg);
        this.bg.touchEnabled = true;
        this.descTF = new egret.TextField();
        this.addChild(this.descTF);
        this.descTF.textColor = 0xffffff;
        this.descTF.size = 20;
        this.descTF.x = 20;
        this.descTF.y = 10;
        this.descTF.lineSpacing = 6;
        this.descTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        //this.descTF.textAlign = "center";
        this.descTF.text = this.descStr;
        //九宫格
        var rect = new egret.Rectangle(5, 5, 35, 35);
        this.bg.scale9Grid = rect;
        this.bg.width = this.descTF.width + 40;
        this.bg.height = this.descTF.height + 20;
    };
    return TipsPanel;
}(egret.Sprite));
__reflect(TipsPanel.prototype, "TipsPanel");
//# sourceMappingURL=TipsPanel.js.map