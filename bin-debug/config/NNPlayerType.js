var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 对牌型分类，并提供牌大小值的算法，和已经计算好的牌型最大值
 */
var NNPlayerType = (function () {
    function NNPlayerType() {
    }
    NNPlayerType.getPokerTypeStrBySererNum = function (value) {
        return NNPlayerType.POKER_TYPE_IMGS[value];
    };
    NNPlayerType.getPokerTypeName = function (value) {
        return NNPlayerType.POKER_TYPE_NAMES[value];
    };
    /**
     * 获取牛牛牌类型
     * @param cards 牌值数组  1，2，3，4，5
     */
    NNPlayerType.getPokerType = function (cards) {
        var pokerObj = { "cards": cards, "type": 0, "power": 0 };
        if (cards == null || cards.length != 5)
            return pokerObj;
        var maxValue = NNPlayerType.getMaxValue(cards);
        //判断是否为炸弹牛
        var sameCounts = NNPlayerType.getSameCount(cards);
        if (sameCounts.length == 1) {
            var sameCountObj = sameCounts[0];
            if (sameCountObj["count"] == 4) {
                pokerObj["type"] = NNPlayerType.BOMB_NIU;
                pokerObj["power"] = sameCountObj["value"];
                return pokerObj;
            }
        }
        //判断是否为五小牛
        var sum = NNPlayerType.getSum(cards);
        if (cards.every(function (value, index, arr) { return value < 5; }) && sum <= 10) {
            pokerObj["type"] = NNPlayerType.FIVE_XIAONIU;
            pokerObj["power"] = maxValue;
            return pokerObj;
        }
        //判断是否为金牛（5张牌全为花）
        if (cards.every(function (value, index, arr) { return value > 10; })) {
            pokerObj["type"] = NNPlayerType.JIN_NIU;
            pokerObj["power"] = maxValue;
            return pokerObj;
        }
        //牛？
        var copyCards = NNPlayerType.makeBiggerToEqualTen(cards);
        var hasNiu = false;
        var isNiuNiu = false;
        for (var i = 0; i < 3; i++) {
            for (var j = i + 1; j < 4; j++) {
                for (var k = j + 1; k < 5; k++) {
                    sum = NNPlayerType.getSum([copyCards[i], copyCards[j], copyCards[k]]);
                    if (sum % 10 == 0) {
                        hasNiu = true;
                        copyCards.splice(i, 1);
                        copyCards.splice(j, 1);
                        copyCards.splice(k, 1);
                        break;
                    }
                }
            }
        }
        if (hasNiu) {
            sum = NNPlayerType.getSum(copyCards);
            var sumYu10 = sum % 10;
            if (sumYu10 == 0) {
                pokerObj["type"] = NNPlayerType.NIU10;
                pokerObj["power"] = 10;
            }
            else {
                if (sumYu10 == 9)
                    pokerObj["type"] = NNPlayerType.NIU9;
                else if (sumYu10 == 8)
                    pokerObj["type"] = NNPlayerType.NIU8;
                pokerObj["power"] = sumYu10;
            }
        }
        return pokerObj;
    };
    NNPlayerType.makeBiggerToEqualTen = function (cards) {
        var len = cards.length;
        var copyCards = cards.concat();
        for (var i = 0; i < len; i++) {
            copyCards[i] = copyCards[i] > 10 ? 10 : copyCards[i];
        }
        return copyCards;
    };
    /**
     *
     */
    NNPlayerType.getMaxValue = function (cards) {
        var maxValue = 0;
        var len = cards.length;
        for (var i = 0; i < len; i++) {
            var cardValue = cards[i];
            if (cardValue > maxValue)
                maxValue = cardValue;
        }
        return maxValue;
    };
    NNPlayerType.getSum = function (cards) {
        var sum = 0;
        var len = cards.length;
        for (var i = 0; i < len; i++) {
            sum += cards[i];
        }
        return sum;
    };
    /**
     * 获取相同值的牌
     */
    NNPlayerType.getSameCount = function (cards) {
        if (cards == null)
            throw new Error("param is null!!!");
        var copyCards = cards.concat();
        copyCards.sort();
        console.log("copyCards = " + copyCards);
        var sameCount = 1;
        var len = cards.length;
        var result = [];
        for (var i = 0; i < len;) {
            sameCount = 0;
            for (var j = i; j < len; j++) {
                if (copyCards[i] == copyCards[j])
                    sameCount++;
            }
            result.push({ "value": copyCards[i], "count": sameCount });
            i += sameCount;
        }
        return result;
    };
    NNPlayerType.BOMB_NIU = 14; //炸弹牛
    NNPlayerType.FIVE_XIAONIU = 13; //五小牛
    NNPlayerType.JIN_NIU = 12; //金牛
    NNPlayerType.NIU10 = 11; //牛牛
    NNPlayerType.NIU9 = 10; //牛9
    NNPlayerType.NIU8 = 9; //牛8
    NNPlayerType.NIU7 = 8; //牛7
    NNPlayerType.NIU6 = 7; //牛6
    NNPlayerType.NIU5 = 6; //牛5
    NNPlayerType.NIU4 = 5; //牛4
    NNPlayerType.NIU3 = 4; //牛3
    NNPlayerType.NIU2 = 3; //牛2
    NNPlayerType.NIU1 = 2; //牛1
    NNPlayerType.NIU0 = 1; //无牛
    NNPlayerType.ERROR = 0; //牌型错误
    NNPlayerType.POKER_TYPE_IMGS = ["niu0", "niu1", "niu2", "niu3", "niu4", "niu5", "niu6", "niu7", "niu8", "niu9", "niu10", "jinniu", "wuxiaoniu", "zdn"];
    NNPlayerType.POKER_TYPE_NAMES = ["没牛", "牛一", "牛二", "牛三", "牛四", "牛五", "牛六", "牛七", "牛八", "牛九", "牛牛", "金牛", "五小牛", "炸弹牛"];
    return NNPlayerType;
}());
__reflect(NNPlayerType.prototype, "NNPlayerType");
//# sourceMappingURL=NNPlayerType.js.map