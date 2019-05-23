var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 对牌型分类，并提供牌大小值的算法，和已经计算好的牌型最大值
 */
var PlayerType = (function () {
    function PlayerType() {
    }
    PlayerType.getPokerTypeName = function (type) {
        var typeStr = "普通牌";
        switch (type) {
            case PlayerType.NORMAL:
                typeStr = "普通牌";
                break;
            case PlayerType.DOUBLE:
                typeStr = "对子";
                break;
            case PlayerType.STRAIGHT:
                typeStr = "顺子";
                break;
            case PlayerType.FLUSH:
                typeStr = "金花";
                break;
            case PlayerType.STRAIGHT_FLUSH:
                typeStr = "同花顺";
                break;
            case PlayerType.BOMB:
                typeStr = "豹子";
                break;
        }
        return typeStr;
    };
    PlayerType.BOMB = 7; //炸弹，如AAA KKK
    // 最大值AAA=14，加上同花顺7867=7881
    PlayerType.BOMB_MAX_VALUE = 7881;
    // 同花顺，顺金，A32也是顺子，是最小的同花顺(参考自百度百科)
    PlayerType.STRAIGHT_FLUSH = 6;
    // 最大值AKQ=12，加上同花7855=7867
    PlayerType.STRAIGHT_FLUSH_MAX_VALUE = 7867;
    // 同花
    PlayerType.FLUSH = 5;
    // 最大值AKJ，14*16*16+13*16+11=3803，加上顺子4052=7855
    PlayerType.FLUSH_MAX_VALUE = 7855;
    // 顺子，A32也是顺子，是最小的同花顺(参考自百度百科)
    PlayerType.STRAIGHT = 4;
    // 最大值AKQ=12，加上对子的最大值基数4040=4052
    PlayerType.STRAIGHT_MAX_VALUE = 4052;
    // 对子
    PlayerType.DOUBLE = 3;
    // 最大值AAK=14*16+13=237,加上普通牌的基数3803=4040
    PlayerType.DOUBLE_MAX_VALUE = 4040;
    // 普通牌，里面包含一种特殊牌532不同花色 ???
    // 对于特殊牌，本算法不提供特殊大小计算，但会将这副牌标记为特殊牌
    // 外部调用者自行判断是否有炸弹玩家产生
    PlayerType.NORMAL = 2;
    // 最大值AKJ=14*16*16+13*16+11=3803
    PlayerType.NORMAL_MAX_VALUE = 3803;
    return PlayerType;
}());
__reflect(PlayerType.prototype, "PlayerType");
//# sourceMappingURL=PlayerType.js.map