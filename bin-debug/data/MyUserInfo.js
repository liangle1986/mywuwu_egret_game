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
 * 玩家信息
 */
var MyUserInfo = (function (_super) {
    __extends(MyUserInfo, _super);
    function MyUserInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.longitude = "";
        _this.latitude = "";
        _this.city = "";
        _this.mySideId = 0;
        _this._userName = "";
        _this._gender = 0; //0=男 1=女
        _this._lv = 1;
        _this._exp = 0;
        _this._gold = 0; //房卡
        _this._diamond = 0;
        _this._userId = "";
        _this._ip = "127.0.0.1";
        _this._mobile = "";
        // 头像图片链接
        _this._faceUrl = "";
        return _this;
    }
    MyUserInfo.getInstance = function () {
        if (this._instance == null)
            this._instance = new MyUserInfo();
        return this._instance;
    };
    Object.defineProperty(MyUserInfo.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        enumerable: true,
        configurable: true
    });
    MyUserInfo.prototype.getFormatUserName = function (limitLen) {
        var strLen = StringUtils.getStringLen(this._userName);
        if (strLen > limitLen && limitLen >= 3) {
            return this._userName.substr(0, limitLen - 3) + "...";
        }
        return this._userName;
    };
    Object.defineProperty(MyUserInfo.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (value) {
            this._gender = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyUserInfo.prototype, "level", {
        get: function () {
            return this._lv;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyUserInfo.prototype, "exp", {
        get: function () {
            return this._exp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyUserInfo.prototype, "gold", {
        get: function () {
            return this._gold;
        },
        set: function (value) {
            this._gold = value;
            GameEventManager.dispatchEvent(GameEventManager.UPDATE_USER_GOLD);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyUserInfo.prototype, "diamond", {
        get: function () {
            return this._diamond;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyUserInfo.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyUserInfo.prototype, "ip", {
        get: function () {
            return this._ip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyUserInfo.prototype, "mobile", {
        get: function () {
            return this._mobile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyUserInfo.prototype, "faceUrl", {
        get: function () {
            return this._faceUrl;
        },
        set: function (url) {
            this._faceUrl = url;
        },
        enumerable: true,
        configurable: true
    });
    // private _token:string = "";
    MyUserInfo.prototype.init = function (data) {
        this._userId = data["playerId"];
        // this._token = data["token"];
        this._userName = data["nickName"];
        this._gold = data["roomCardNum"];
        this._faceUrl = data["headImgUrl"];
        this._lv = data["level"];
        //...
    };
    return MyUserInfo;
}(egret.EventDispatcher));
__reflect(MyUserInfo.prototype, "MyUserInfo");
//# sourceMappingURL=MyUserInfo.js.map