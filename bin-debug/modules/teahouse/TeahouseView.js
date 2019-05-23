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
 * 茶楼界面
 */
var TeahouseView = (function (_super) {
    __extends(TeahouseView, _super);
    function TeahouseView() {
        var _this = _super.call(this) || this;
        _this._isDianXiaoer = 0; //是否为店小二，1为店小二
        _this.initView();
        return _this;
    }
    TeahouseView.prototype.dispose = function () {
    };
    TeahouseView.prototype.init = function (data) {
        this._data = data;
        this._isDianXiaoer = data["isDianXiaoer"];
        var teaHouseNum = data["teaHouseNum"]; //茶楼编号
        var gameType = GameGlobal.gameType;
        var totalGames = data["totalGame"];
        var payType = data["payType"];
        var teaHouseOwnerWord = data["teaHouseOwnerWord"];
        GameGlobal.teahouse_ownerId = data["playerId"];
        GameGlobal.isDianXiaoer = this._isDianXiaoer;
        this._noticeView.init();
        this._noticeView.addNotice("房间信息：只扣老板房卡，每轮" + totalGames + "局，老板留言：" + (teaHouseOwnerWord == null ? "" : teaHouseOwnerWord));
        this._tableView.init();
        this._topMenu.init(data);
        if (this._isDianXiaoer == 1) {
            GameGlobal.iframeLayer.showIFrame(TeahouseSetView);
        }
        else {
            if (data.hasOwnProperty("playerId")) {
                var playerId = data["playerId"];
                if (playerId == MyUserInfo.getInstance().userId)
                    GameGlobal.iframeLayer.showIFrame(TeahouseSetView);
            }
        }
        GameGlobal.iframeLayer.hideIFrame2(TeahouseManagerView);
    };
    TeahouseView.prototype.initView = function () {
        this._bg = new egret.Bitmap();
        this._bg.texture = RES.getRes("t_bg_png");
        this.addChild(this._bg);
        this._tableView = new TeahouseTableView();
        this.addChild(this._tableView);
        this._tableView.x = 11;
        this._tableView.y = 154;
        this._topMenu = new TeahouseTopMenu();
        this.addChild(this._topMenu);
        this._bottomMenu = new TeahouseBottomMenu();
        // this._bottomMenu.x = 0;
        // this._bottomMenu.y = 547;
        this.addChild(this._bottomMenu);
        this._bottomMenu.init();
        this._noticeView = new NoticeView();
        this._noticeView.x = 0;
        this._noticeView.y = 90;
        this.addChild(this._noticeView);
        GameEventManager.addEvent(NetAction.teahouse_table_memberList.toString(), this.onTableMemberListResponse, this);
        GameEventManager.addEvent(NetAction.teahouse_set.toString(), this.onTeahouseSetResponse, this);
    };
    TeahouseView.prototype.onTeahouseSetResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        GameGlobal.iframeLayer.hideIFrame2(TeahouseSetView);
    };
    TeahouseView.prototype.onTableMemberListResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        this._tableView.updatePlayerList(data);
    };
    TeahouseView.prototype.resize = function () {
    };
    return TeahouseView;
}(egret.DisplayObjectContainer));
__reflect(TeahouseView.prototype, "TeahouseView");
//# sourceMappingURL=TeahouseView.js.map