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
var BaseCardGroup = (function (_super) {
    __extends(BaseCardGroup, _super);
    function BaseCardGroup() {
        var _this = _super.call(this) || this;
        _this._cardViews = [];
        _this._cardNum = 5;
        _this.initView();
        return _this;
    }
    BaseCardGroup.prototype.setPokerData = function (data, cardType) {
        if (cardType === void 0) { cardType = -1; }
        if (data == null)
            return;
        var len = data.length;
        var cardDataList = [];
        for (var i = 0; i < len; i++) {
            var card = new Card(data[i].cardValue, data[i].cardSuit);
            cardDataList.push(card);
        }
        len = this._cardViews.length;
        for (var i = 0; i < len; i++) {
            var cardView = this._cardViews[i];
            cardView.data = null;
            if (i < cardDataList.length)
                cardView.data = cardDataList[i];
        }
    };
    BaseCardGroup.prototype.setPokerSize = function (scale, xSpacing) {
        if (xSpacing === void 0) { xSpacing = 82; }
        var len = this._cardViews.length;
        for (var i = 0; i < len; i++) {
            var cardView = this._cardViews[i];
            cardView.scaleX = cardView.scaleY = scale;
            cardView.x = i * xSpacing;
        }
    };
    BaseCardGroup.prototype.showPokerValue = function (value, showAnimation) {
        if (showAnimation === void 0) { showAnimation = false; }
        var len = this._cardViews.length;
        for (var i = 0; i < len; i++) {
            var cardView = this._cardViews[i];
            cardView.showValue(value, showAnimation);
        }
    };
    BaseCardGroup.prototype.resetCards = function () {
        while (this.numChildren > 0)
            this.removeChildAt(0);
        this._cardViews = [];
        var cardView;
        for (var i = 0; i < this._cardNum; i++) {
            cardView = new CardView();
            cardView.x = i * 124;
            this.addChild(cardView);
            this._cardViews.push(cardView);
        }
    };
    BaseCardGroup.prototype.initView = function () {
    };
    return BaseCardGroup;
}(egret.Sprite));
__reflect(BaseCardGroup.prototype, "BaseCardGroup");
//# sourceMappingURL=BaseCardGroup.js.map