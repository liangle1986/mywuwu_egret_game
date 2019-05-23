var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 单张牌
 */
var Card = (function () {
    /**
     * 设置牌
     * @param num 牌值
     * @param color 颜色
     */
    function Card(num, color) {
        this._num = 0;
        this._color = 0;
        this._num = num;
        this._color = color;
    }
    Card.prototype.setNum = function (value) {
        this._num = value;
    };
    Card.prototype.getNum = function () {
        return this._num;
    };
    Card.prototype.setColor = function (value) {
        this._color = value;
    };
    Card.prototype.getColor = function () {
        return this._color;
    };
    Card.HEITAO = 4; //黑桃
    Card.HONGTAO = 3; //红桃
    Card.MEIHUA = 2; //梅花
    Card.FANGKUAI = 1; //方块
    Card.NUM_A = 14;
    Card.NUM_K = 13;
    Card.NUM_Q = 12;
    Card.NUM_J = 11;
    Card.NUM_10 = 10;
    Card.NUM_9 = 9;
    Card.NUM_8 = 8;
    Card.NUM_7 = 7;
    Card.NUM_6 = 6;
    Card.NUM_5 = 5;
    Card.NUM_4 = 4;
    Card.NUM_3 = 3;
    Card.NUM_2 = 2;
    return Card;
}());
__reflect(Card.prototype, "Card");
//# sourceMappingURL=Card.js.map