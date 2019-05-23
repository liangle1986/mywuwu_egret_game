var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameUtls = (function () {
    function GameUtls() {
    }
    //按坐位号来取得玩家在我的左边还是右边
    GameUtls.sitId2LR = function (myOrder, playerOrder) {
        if (myOrder == playerOrder)
            return 0;
        if (myOrder == 6) {
            return playerOrder;
        }
        else if (myOrder == 5) {
            if (playerOrder == 6)
                return 1;
            if (playerOrder == 1)
                return 2;
            if (playerOrder == 2)
                return 3;
            if (playerOrder == 3)
                return 4;
            if (playerOrder == 4)
                return 5;
        }
        else if (myOrder == 4) {
            if (playerOrder == 5)
                return 1;
            if (playerOrder == 6)
                return 2;
            if (playerOrder == 1)
                return 3;
            if (playerOrder == 2)
                return 4;
            if (playerOrder == 3)
                return 5;
        }
        else if (myOrder == 3) {
            if (playerOrder == 4)
                return 1;
            if (playerOrder == 5)
                return 2;
            if (playerOrder == 6)
                return 3;
            if (playerOrder == 1)
                return 4;
            if (playerOrder == 2)
                return 5;
        }
        else if (myOrder == 2) {
            if (playerOrder == 3)
                return 1;
            if (playerOrder == 4)
                return 2;
            if (playerOrder == 5)
                return 3;
            if (playerOrder == 6)
                return 4;
            if (playerOrder == 1)
                return 5;
        }
        else {
            if (playerOrder == 2)
                return 1;
            if (playerOrder == 3)
                return 2;
            if (playerOrder == 4)
                return 3;
            if (playerOrder == 5)
                return 4;
            if (playerOrder == 6)
                return 5;
        }
    };
    /**
     * 玩家位置信息
     */
    GameUtls.PLAYER_SEAT_POS = [
        [949, 310], [816, 103], [480, 46], [120, 102], [6, 310]
    ];
    return GameUtls;
}());
__reflect(GameUtls.prototype, "GameUtls");
//# sourceMappingURL=GameUtls.js.map