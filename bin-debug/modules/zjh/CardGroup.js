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
 * 牌组
 */
var CardGroup = (function (_super) {
    __extends(CardGroup, _super);
    function CardGroup() {
        var _this = _super.call(this) || this;
        _this._isMySelf = true;
        _this._cardViews = [];
        _this.initView();
        return _this;
    }
    Object.defineProperty(CardGroup.prototype, "isMySelf", {
        set: function (value) {
            this._isMySelf = value;
            if (value) {
                // this.setPokerSize(80 / 120, 82);
            }
            else {
                this.setPokerSize(56 / 99, 20);
            }
        },
        enumerable: true,
        configurable: true
    });
    // 从来一局
    CardGroup.prototype.reset = function () {
        var len = this._cardViews.length;
        for (var i = 0; i < len; i++) {
            var cardView = this._cardViews[i];
            cardView.showValue(false);
            cardView.data = null;
        }
    };
    // 设置直接牌的位置
    CardGroup.prototype.setPokerSize = function (scale, xSpacing) {
        if (xSpacing === void 0) { xSpacing = 82; }
        var len = this._cardViews.length;
        for (var i = 0; i < len; i++) {
            var cardView = this._cardViews[i];
            cardView.scaleX = cardView.scaleY = scale;
            cardView.x = i * xSpacing;
        }
    };
    // 展示扑克信息（可优化只循环一次就可以了，等我熟悉项目后在做调整TODO）
    CardGroup.prototype.setPokerData = function (data) {
        // 单张牌信息
        var len = data.length;
        var cardDataList = [];
        for (var i = 0; i < len; i++) {
            var card = new Card(data[i].cardValue, data[i].cardSuit);
            cardDataList.push(card);
        }
        // 牌视图组装
        var len = cardDataList.length;
        for (var i = 0; i < len; i++) {
            var cardView = this._cardViews[i];
            cardView.data = cardDataList[i];
        }
    };
    // 展示扑克的信息
    CardGroup.prototype.showPokerValue = function (value, showAnimation) {
        if (showAnimation === void 0) { showAnimation = false; }
        var len = this._cardViews.length;
        for (var i = 0; i < len; i++) {
            var cardView = this._cardViews[i];
            cardView.showValue(value, showAnimation);
            //设置牌的位置一致排开
            if (this._isMySelf) {
                // cardView.scaleX = 80 / 120; cardView.scaleY = 80 / 120;
                cardView.x = i * 108;
            }
            else {
                // 一张压一张
                cardView.scaleX = 56 / 99;
                cardView.scaleY = 56 / 99;
                cardView.x = i * 20;
            }
        }
    };
    // 初始化牌组
    CardGroup.prototype.initView = function () {
        this.resetCards();
    };
    // 创建牌组
    CardGroup.prototype.resetCards = function () {
        // 先移除当前组下的所有节点
        while (this.numChildren > 0)
            this.removeChildAt(0);
        this._cardViews = [];
        var num = 3;
        // 加入默认的牌视图
        var cardView;
        for (var i = 0; i < num; i++) {
            cardView = new CardView();
            cardView.x = i * 108;
            // cardView.width = 57; cardView.height = 79;
            this.addChild(cardView);
            this._cardViews.push(cardView);
        }
    };
    return CardGroup;
}(egret.Sprite));
__reflect(CardGroup.prototype, "CardGroup");
//# sourceMappingURL=CardGroup.js.map