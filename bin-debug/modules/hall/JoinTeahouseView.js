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
 * 加入房间
 */
var JoinTeahouseView = (function (_super) {
    __extends(JoinTeahouseView, _super);
    function JoinTeahouseView() {
        var _this = _super.call(this) || this;
        _this.skinName = "JoinRoomSkin";
        return _this;
    }
    JoinTeahouseView.prototype.show = function () {
        this.numTF.text = JoinTeahouseView.DEFAULT_TIP_STR;
    };
    JoinTeahouseView.prototype.childrenCreated = function () {
    };
    JoinTeahouseView.prototype.createComplete = function (event) {
        _super.prototype.createComplete.call(this, event);
        this.initButtons();
    };
    JoinTeahouseView.prototype.touchBindButtonHandler = function (clickTarget) {
        _super.prototype.touchBindButtonHandler.call(this, clickTarget);
    };
    JoinTeahouseView.prototype.initButtons = function () {
        var len = 12;
        var btn;
        for (var i = 0; i < len; i++) {
            // if(i == 9)
            // 	btn = new DButton("hall_json.delNumBtn");
            // else if(i == 10)
            // 	btn = new DButton("hall_json.data0");
            // else if(i == 11)
            // 	btn = new DButton("hall_json.resetBtn");
            // else
            // 	btn = new DButton("hall_json.data"+(i+1));
            btn = this["btn" + i];
            btn["index"] = i;
            // btn.x = 28 + (i  % 3)* 175; //348
            // if(i == 2 || i == 5 || i == 8 || i == 11)
            // btn.x = 28 + 348;
            // btn.y = 223 + Math.floor(i / 3) * 66;
            // if(i >= 6  && i<= 8)
            // btn.y = 223+130;
            // else if(i >=9 && i <=11)
            // {
            // btn.y = 223+194;
            // }
            // this.addChild(btn);
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        }
    };
    JoinTeahouseView.prototype.onTouchTap = function (evt) {
        var button = evt.currentTarget;
        var index = button["index"];
        if (index == 10) {
            this.clearNumTF();
        }
        else if (index == 11) {
            this.removeNum();
        }
        else {
            this.addNum(index);
        }
        var curStr = this.numTF.text.trim();
        if (curStr.length >= 6) {
            var roomId = this.getRoomId();
            LogUtils.log("roomId = " + roomId);
            var data = {};
            data["msgType"] = NetAction.teahouse_join;
            data["gameType"] = 0;
            data["msg"] = { "teaHouseNum": roomId };
            SocketCommand.getInstance().send(data);
        }
    };
    JoinTeahouseView.prototype.getRoomId = function () {
        return this.numTF.text.trim();
    };
    // private _tfIndex:number = -1;
    JoinTeahouseView.prototype.addNum = function (index) {
        // this._tfIndex++;
        // this._tfIndex = Math.min(this._numTFs.length - 1, this._tfIndex);
        // var tf:egret.TextField = this._numTFs[this._tfIndex];
        // tf.text = (index+1).toString();
        if (this.numTF.text.trim() == JoinTeahouseView.DEFAULT_TIP_STR)
            this.numTF.text = "";
        this.numTF.appendText(index.toString());
    };
    JoinTeahouseView.prototype.clearNumTF = function () {
        // this._tfIndex = -1;
        // var len:number = this._numTFs.length;
        // for(var i:number = 0; i < len; i++)
        // {
        // 	this._numTFs[i].text = "";
        // }
        this.numTF.text = JoinTeahouseView.DEFAULT_TIP_STR;
    };
    JoinTeahouseView.prototype.removeNum = function () {
        var curStr = this.numTF.text.trim();
        if (curStr == "" || curStr == JoinTeahouseView.DEFAULT_TIP_STR)
            return;
        this.numTF.text = curStr.substr(0, curStr.length - 1);
        if (this.numTF.text == "")
            this.numTF.text = JoinTeahouseView.DEFAULT_TIP_STR;
        // if(this._tfIndex == -1) return;
        // var tf:egret.TextField = this._numTFs[this._tfIndex];
        // tf.text = "";
        // this._tfIndex--;
        // this._tfIndex = Math.max(-1, this._tfIndex);
    };
    JoinTeahouseView.DEFAULT_TIP_STR = "请输入茶楼ID";
    return JoinTeahouseView;
}(IFrameBase));
__reflect(JoinTeahouseView.prototype, "JoinTeahouseView");
//# sourceMappingURL=JoinTeahouseView.js.map