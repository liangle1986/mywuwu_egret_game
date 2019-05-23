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
 * 记录游戏公共信息
 */
var GameModel = (function (_super) {
    __extends(GameModel, _super);
    function GameModel() {
        var _this = _super.call(this) || this;
        _this.fromUserId = ""; //从别人的分享链接进入时用
        _this.fromRoomId = ""; //从别人的分享房间号
        _this.token = ""; //登陆token
        _this.code = "0116zWq81mjA1Q19fAr81nz8r816zWqx"; // 登陆code
        _this.deviceType = "android"; //设备类型
        _this.roomId = 0; //当前创建的房间id
        _this.myOrder = 1; //我的顺序号
        //茶楼
        _this.teaHouseNum = 0; //当前进入茶楼id
        return _this;
    }
    GameModel.instance = function () {
        return (GameModel._instance || (GameModel._instance = new GameModel()));
    };
    GameModel._instance = null;
    return GameModel;
}(egret.EventDispatcher));
__reflect(GameModel.prototype, "GameModel");
//# sourceMappingURL=GameModel.js.map