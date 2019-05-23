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
 * 战绩
 */
var ZhanjiView = (function (_super) {
    __extends(ZhanjiView, _super);
    function ZhanjiView() {
        var _this = _super.call(this) || this;
        _this._tabIndex = -1;
        _this.skinName = "ZhanjiSkin";
        _this.name = "ZhanjiView";
        return _this;
    }
    ZhanjiView.prototype.show = function () {
        this._tabIndex = -1;
        this.showTabView(1);
        this.bindButton(this.tab1);
        this.bindButton(this.tab2);
    };
    ZhanjiView.prototype.childrenCreated = function () {
        this.list.itemRenderer = ZhanjiTile;
    };
    ZhanjiView.prototype.showTabView = function (index) {
        if (this._tabIndex == index)
            return;
        this._tabIndex = index;
        if (index == 1) {
            this.tab1.texture = RES.getRes("hall_json.gameTab1_select");
            this.tab2.texture = RES.getRes("hall_json.gameTab2");
            GameEventManager.addEvent(NetAction.zhanji.toString(), this.onZhanjiResponse, this);
            var data = {};
            data["msgType"] = NetAction.zhanji;
            data["gameType"] = GameGlobal.ZJH_TYPE;
            SocketCommand.getInstance().send(data);
        }
        else {
            this.tab1.texture = RES.getRes("hall_json.gameTab1");
            this.tab2.texture = RES.getRes("hall_json.gameTab2_select");
            GameEventManager.addEvent(NetAction.zhanji.toString(), this.onZhanjiResponse, this);
            var data = {};
            data["msgType"] = NetAction.zhanji;
            data["gameType"] = GameGlobal.NIUNIU_TYPE;
            SocketCommand.getInstance().send(data);
        }
    };
    ZhanjiView.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        GameEventManager.removeEvent(NetAction.zhanji.toString(), this.onZhanjiResponse, this);
    };
    ZhanjiView.prototype.onZhanjiResponse = function (evt) {
        GameEventManager.removeEvent(NetAction.zhanji.toString(), this.onZhanjiResponse, this);
        var result = evt.data;
        var data = result["data"];
        this.updateList(data);
    };
    ZhanjiView.prototype.updateList = function (list) {
        // this._listContainer.removeChildren();
        // var len:number = list.length;
        // var tile:ZhanjiTile;
        // for(var i:number = 0; i < len; i++)
        // {
        // 	tile = new ZhanjiTile();
        // 	tile.setData(list[i], i+1);
        // 	this._listContainer.addChild(tile);
        // 	tile.y = i * 201;
        // }
        // this._scrollView.setScrollPosition(0, 0);
        list.forEach(function (value, index) {
            list[index]["rank"] = index + 1;
        }, this);
        this.dataList = new eui.ArrayCollection(list);
        this.list.dataProvider = this.dataList;
    };
    ZhanjiView.prototype.touchBindButtonHandler = function (clickTarget) {
        _super.prototype.touchBindButtonHandler.call(this, clickTarget);
        if (clickTarget == this.tab1) {
            this.showTabView(1);
        }
        else if (clickTarget == this.tab2) {
            this.showTabView(2);
        }
    };
    return ZhanjiView;
}(IFrameBase));
__reflect(ZhanjiView.prototype, "ZhanjiView");
var ZhanjiTile = (function (_super) {
    __extends(ZhanjiTile, _super);
    function ZhanjiTile() {
        var _this = _super.call(this) || this;
        _this.skinName = "ZhanjiTileSkin";
        return _this;
    }
    ZhanjiTile.prototype.childrenCreated = function () {
    };
    ZhanjiTile.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        LogUtils.log("this.data = " + this.data);
        this.updateView();
    };
    ZhanjiTile.prototype.updateView = function () {
        if (this.data != null) {
            var roomId = this.data["roomId"];
            this.roomNumTF.text = "房间号：" + roomId.toString();
            var createTime = this.data["createTime"];
            var date = new Date(createTime);
            var createTimeStr = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("/");
            createTimeStr += " " + date.toTimeString().substr(0, 8);
            ;
            this.timeTF.text = createTimeStr;
            this.rankTF.text = this.data["rank"];
            var recordList = this.data["recordList"];
            var len = recordList.length;
            this.detailTF.text = "";
            var recordStr = "";
            for (var i = 0; i < len; i++) {
                var score = recordList[i].score;
                var scoreStr = score > 0 ? "+" + score : score.toString();
                if ((i + 1) % 2 == 0)
                    recordStr = recordStr + (recordList[i].nickName + "  " + scoreStr + "    ") + "\n";
                else
                    recordStr = recordStr + (recordList[i].nickName + "  " + scoreStr + "    ");
            }
            this.detailTF.text = recordStr.trim();
        }
    };
    return ZhanjiTile;
}(eui.ItemRenderer));
__reflect(ZhanjiTile.prototype, "ZhanjiTile");
//# sourceMappingURL=ZhanjiView.js.map