//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isThemeLoadEnd = false;
        // 资源加载结束后设置成tree
        _this.isResourceLoadEnd = false;
        _this._game = null;
        return _this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        //Config loading process interface
        // 是否在移动设置中运行
        if (!egret.Capabilities.isMobile) {
            this.stage.scaleMode = egret.StageScaleMode.SHOW_ALL, this.stage.orientation = "auto";
        }
        // 初始化游戏界面大小
        GameGlobal.init(this, this.stage);
        // 设置默认字体
        egret.TextField.default_fontFamily = eui.Label.default_fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        //设置加载进度界面
        // initialize the Resource loading library
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        // 展示版本号信箱
        this.showVersion();
    };
    Main.prototype.showVersion = function () {
        if (GameGlobal.showVersion) {
            GameGlobal.versionTF = new egret.TextField();
            GameGlobal.versionTF.textAlign = egret.HorizontalAlign.LEFT;
            GameGlobal.versionTF.textColor = 0xffffff;
            GameGlobal.versionTF.size = 14;
            GameGlobal.versionTF.text = "V" + GameGlobal.version;
            GameGlobal.stage.addChild(GameGlobal.versionTF);
            GameGlobal.versionTF.x = (GameGlobal.stageW - GameGlobal.versionTF.textWidth) - 10;
            GameGlobal.versionTF.y = GameGlobal.stageH - GameGlobal.versionTF.textHeight - 10;
            GameGlobal.versionTF.touchEnabled = true;
            GameGlobal.versionTF.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchVersion, this);
        }
    };
    Main.prototype.onTouchVersion = function (event) {
        //显示日志信息，方便在线查看分析
        // GameGlobal.mapUILayer.showTeahouseView(event);
    };
    /**
     * 配置文件加载完成,开始预加载皮肤主题资源和preload资源组。
     * Loading of configuration file is complete, start to pre-load the theme configuration file and the preload resource group
     */
    Main.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        // load skin theme configuration file, you can manually modify the file. And replace the default skin.
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        var theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("loading");
        RES.loadGroup("sound", 2);
    };
    /**
     * 主题文件加载完成,开始预加载
     * Loading of theme configuration file is complete, start to pre-load the
     */
    Main.prototype.onThemeLoadComplete = function () {
        this.isThemeLoadEnd = true;
        this.createScene();
    };
    /**
     * preload资源组加载完成
     * preload resource group is loaded
     */
    Main.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.isResourceLoadEnd = true;
            this.createScene();
        }
        else if (event.groupName == "loading") {
            egret.ExternalInterface.call("egret_init_complete", "egret_init_complete");
            this.loadingView = new LoadingUI();
            this.addChild(this.loadingView);
            RES.loadGroup("preload");
        }
        else if (event.groupName == "sound") {
            SoundManager.instance.playMusic("preloadMusic_mp3");
        }
    };
    Main.prototype.createScene = function () {
        if (this.isThemeLoadEnd && this.isResourceLoadEnd) {
            this.startCreateScene();
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    Main.prototype.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     * Resource group loading failed
     */
    Main.prototype.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //ignore loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * loading process of preload resource
     */
    Main.prototype.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.startCreateScene = function () {
        GameEventManager.addEvent(GameEventManager.LOGIN_SUCCESS, this.onLoginSuccess, this);
        var self = this;
        //登陆返回
        egret.ExternalInterface.addCallback("loginCallBack", function (message) {
            GameModel.instance().code = message;
            var command = new CommandVo();
            command.action = HttpCommand.LOGIN;
            HttpCommand.send(command, self, self.loginResponse);
        });
        if (this.loadingView) {
            this.loadingView.showLogin();
        }
        //监听NATIVE发来的消息（如返回按钮）
        egret.ExternalInterface.addCallback("exitGame", function (message) {
            AlertView.getInstance().setConfirmCallBack(self.quitConfirm, self);
            AlertView.getInstance().show("确定要离开游戏吗？", AlertView.CONFIRM_MODE);
        });
    };
    // 登录返回后连接socket
    Main.prototype.onLoginSuccess = function (evt) {
        if (evt === void 0) { evt = null; }
        GameEventManager.addEvent(GameEventManager.SOCKET_CONNECTED, this.onSocketConnected, this);
        SocketCommand.getInstance().connect();
        DataLoading.getInstance().show();
    };
    // socket 连接成功返回
    Main.prototype.onSocketConnected = function (evt) {
        GameEventManager.removeEvent(GameEventManager.SOCKET_CONNECTED, this.onSocketConnected, this);
        // 如果是掉线直接进入房间
        if (GameModel.instance().roomId != 0) {
            this.startGame();
        }
        else {
            // 否则进入大厅
            GameEventManager.addEvent(NetAction.enterHall.toString(), this.onEnterHallResponse, this);
            var data = {};
            data["msgType"] = NetAction.enterHall;
            data["gameType"] = 0;
            data["token"] = GameModel.instance().token;
            data["msg"] = { "playerId": MyUserInfo.getInstance().userId };
            SocketCommand.getInstance().send(data);
        }
    };
    // 进入大厅后回去大厅需要的数据信息 socket获取
    Main.prototype.onEnterHallResponse = function (evt) {
        if (evt === void 0) { evt = null; }
        GameEventManager.removeEvent(NetAction.enterHall.toString(), this.onEnterHallResponse, this);
        DataLoading.getInstance().hide();
        alert("大厅");
        // 绘制大厅
        this.startGame();
    };
    // 绘制舞台
    Main.prototype.startGame = function () {
        DataLoading.getInstance().hide();
        // 移除登录框架
        if (this.loadingView && this.contains(this.loadingView))
            this.removeChild(this.loadingView);
        // 创建新游戏
        this._game = new Game();
        this.addChild(this._game);
        this._game.init();
        //获取地理位置返回（app专用）
        egret.ExternalInterface.addCallback("getPositionCallBack", function (message) {
            var messageArr = message.split("|");
            var longitude = messageArr[0];
            var latitude = messageArr[1];
            var city = messageArr[2];
            MyUserInfo.getInstance().longitude = longitude;
            MyUserInfo.getInstance().latitude = latitude;
            MyUserInfo.getInstance().city = city;
            //同步给服务端
            var data = {};
            data["msgType"] = NetAction.updatePosition;
            data["token"] = GameModel.instance().token;
            data["gameType"] = 0;
            data["msg"] = { "address": MyUserInfo.getInstance().city, "x": longitude, "y": latitude };
            SocketCommand.getInstance().send(data);
        });
        //获取玩家地理位置信息
        egret.ExternalInterface.call("getPosition", "getPosition");
    };
    // 退出游戏
    Main.prototype.quitConfirm = function () {
        egret.ExternalInterface.call("exitGame", "exitGame");
    };
    Main.prototype.loginResponse = function (result) {
        var data = result["data"];
        MyUserInfo.getInstance().init(data);
        GameGlobal.SOCKET_IP = data["serverIp"];
        GameGlobal.SOCKET_PORT = data["port"];
        GameModel.instance().token = data["token"];
        egret.ExternalInterface.call("sendToken", GameGlobal.UPDATE_VOICE_API + "|" + GameModel.instance().token);
        if (data.hasOwnProperty("roomId") && data["roomId"] != null) {
            GameModel.instance().roomId = data["roomId"];
        }
        //上次进入的茶楼编号
        if (data.hasOwnProperty("teaHouseNum") && data["teaHouseNum"] != null) {
            GameModel.instance().teaHouseNum = data["teaHouseNum"];
        }
        this.onLoginSuccess();
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map