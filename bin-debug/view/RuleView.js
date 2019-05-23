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
var RuleView = (function (_super) {
    __extends(RuleView, _super);
    function RuleView() {
        var _this = _super.call(this) || this;
        _this._ruleArr = [
            "游戏用牌为一副牌除大小王以外，共计52张。",
            "玩家人数为2人至5人，每人随机发5张牌。所有的大小比较中过程均是庄家和闲家比较，闲家和闲家之间不进行比较。",
            "玩家必须将发到手中的5张牌分成两组，进行大小比较。第一组牌为3张，第二组牌为2张。\n玩家把5张牌分为两组后，需要各自和庄家进行大小比较。",
            "第一组3张牌的比较规则：要求玩家必须拿且只拿3张牌组成10、20、30的整数（加法运算）。数字A-10的扑克牌数字代表其大小，JQK统一以10计算。若庄家和闲家有那么三张牌能凑成10或20或30的整数，我们称之为有牛，那么则进行第2组两张牌的大小比较。若庄家或闲家有某人无法使用3张牌凑成10或20或30的整数，我们称之为没牛，同时该玩家判定为输。",
            "第二组牌的比较则把剩下的两张牌按照加法计算，10的整数倍数最大，1最小，若大于10小于20则取个位数计算。数字越大则牌型越大，数字越小则牌型越小。若第2组牌数字为1我们称之为牛丁，若第2组数字为10或20我们称之为牛牛，其他以牛二、牛三等名称称呼。牌型从小到大排序为：没牛-牛丁-牛二……牛八-牛九-牛牛-三条-顺子-同花-葫芦-四炸-同花顺-五花牛-五小牛。",
            "若庄家和闲家都无法使用3张牌凑成10或20或30的整数，即庄闲两家均无牛，则此时进行5张牌中最大一张牌的比较，大小次序为K-Q-J-10-9……A，若最大一张牌也相同则根据花色进行比较，大小次序为黑桃、红桃、梅花、方片。",
            "炸弹——即5张牌中有4张一样的牌，此时无需有牛。若庄家闲家都是四炸牌型，则比较4张一样的牌的大小。",
            "五花牛（金牛）——花指的是JQK，五花牛指的是手上的5张牌全为JQK的特殊牛牛牌型。若庄家闲家都是五花牛牌型，则比较最大一张牌的大小，若最大一张牌的大小一样则按照花色比较。",
            "五小牛——即五张牌都小余5，且牌点总数小余或等于10。",
            "若5张牌既符合四炸又符合五花牛则按照大的计算牌型。",
            "倍数：",
            "炸弹牛-7倍",
            "五小牛-6倍",
            "金牛（五花牛）-5倍",
            "牛牛-4倍",
            "牛九-3倍",
            "牛八-2倍",
            "牛1至牛7-1倍",
            "无牛--1倍"
        ];
        _this.skinName = "RuleSkin";
        _this.name = "RuleView";
        return _this;
    }
    RuleView.prototype.show = function () {
        this.bindButton(this.closeBtn);
    };
    RuleView.prototype.childrenCreated = function () {
    };
    RuleView.prototype.createComplete = function (event) {
        _super.prototype.createComplete.call(this, event);
        this.ruleTF.text = "";
        var ruleLen = this._ruleArr.length;
        for (var i = 0; i < ruleLen; i++) {
            this.ruleTF.appendText(this._ruleArr[i] + "\n\n");
        }
        this.ruleTF.height = this.ruleTF.textHeight + 10;
        // this.scroller.percentHeight = 0
    };
    RuleView.prototype.touchBindButtonHandler = function (clickTarget) {
        _super.prototype.touchBindButtonHandler.call(this, clickTarget);
        if (clickTarget == this.closeBtn) {
            this.close();
        }
    };
    return RuleView;
}(IFrameBase));
__reflect(RuleView.prototype, "RuleView");
//# sourceMappingURL=RuleView.js.map