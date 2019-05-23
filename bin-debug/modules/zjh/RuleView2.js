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
var RuleView2 = (function (_super) {
    __extends(RuleView2, _super);
    function RuleView2() {
        var _this = _super.call(this) || this;
        _this.skinName = "RuleSkin2";
        _this.name = "RuleView2";
        return _this;
    }
    RuleView2.prototype.show = function () {
        this.bindButton(this.closeBtn);
    };
    RuleView2.prototype.childrenCreated = function () {
    };
    RuleView2.prototype.createComplete = function (event) {
        _super.prototype.createComplete.call(this, event);
        // this.ruleTF.text = "";
        // var ruleLen:number = this._ruleArr.length;
        // for(var i:number = 0; i < ruleLen; i++)
        // {
        // 	this.ruleTF.appendText(this._ruleArr[i]+"\n\n");
        // }
        // this.ruleTF.height = this.ruleTF.textHeight + 10;
        // this.scroller.percentHeight = 0
    };
    RuleView2.prototype.touchBindButtonHandler = function (clickTarget) {
        _super.prototype.touchBindButtonHandler.call(this, clickTarget);
        if (clickTarget == this.closeBtn) {
            this.close();
        }
    };
    return RuleView2;
}(IFrameBase));
__reflect(RuleView2.prototype, "RuleView2");
//# sourceMappingURL=RuleView2.js.map