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
 * 界面管理
 */
var IFrameLayer = (function (_super) {
    __extends(IFrameLayer, _super);
    function IFrameLayer() {
        var _this = _super.call(this) || this;
        /**已经打开的列表 */
        _this.openList = [];
        /**全屏显示列表 */
        _this.fullSceneList = [];
        _this.viewList = [];
        return _this;
    }
    /**
     * 打开界面
     */
    IFrameLayer.prototype.showIFrame = function (UIClass, uiOpenData, parent, isback) {
        if (uiOpenData === void 0) { uiOpenData = null; }
        if (parent === void 0) { parent = null; }
        if (isback === void 0) { isback = false; }
        //是否已经打开
        var win = this.getIFrame(UIClass);
        if (win) {
            console.log("win = " + UIClass + ", aleady opened!!!");
            win.uiOpenData = uiOpenData;
            return win;
        }
        for (var i = 0, len = this.viewList.length; i < len; i++) {
            win = this.viewList[i];
            if (win instanceof UIClass) {
                win.uiOpenData = uiOpenData;
                this.addIFrame(win, parent, isback);
                return win;
            }
        }
        win = new UIClass();
        win.UIClass = UIClass;
        win.uiOpenData = uiOpenData;
        //需要热加载资源
        if (win.groupNames && win.groupNames.length > 0) {
            this.loadIFrameRes(win, parent, isback);
        }
        else
            this.addIFrame(win, parent, isback);
        return win;
    };
    /**
     *
     */
    IFrameLayer.prototype.loadIFrameRes = function (win, parent, isback) {
        DataLoading.getInstance().show(); //改成资源加载界面
        this.loadwin = win;
        this.loadwinparent = parent;
        this.loadwinisback = isback;
        this.groupNames = win.groupNames.concat();
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadErr, this);
        var grp = this.groupNames.concat();
        for (var i = 0; i < grp.length; i++) {
            RES.loadGroup(grp[i]);
        }
    };
    /**
     *
     */
    IFrameLayer.prototype.onResourceLoadComplete = function (event) {
        var index = this.groupNames.indexOf(event.groupName);
        if (index != -1)
            this.groupNames.splice(index, 1);
        if (this.groupNames.length == 0) {
            this.clearListener();
            if (this.loadwin) {
                this.addIFrame(this.loadwin, this.loadwinparent, this.loadwinisback);
                this.loadwin = null;
                this.loadwinparent = null;
            }
        }
    };
    IFrameLayer.prototype.onResourceLoadErr = function (event) {
        AlertView.getInstance().show("网络不稳定引响预置加载:" + event.groupName + "失败!");
        var index = this.groupNames.indexOf(event.groupName);
        if (index != -1)
            this.groupNames.splice(index, 1);
        if (this.groupNames.length == 0) {
            this.clearListener();
            if (this.loadwin) {
                this.loadwin.dispose();
                this.loadwin = null;
                this.loadwinparent = null;
            }
        }
    };
    IFrameLayer.prototype.clearListener = function () {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadErr, this);
        //todo 改成资源加载loading       
        DataLoading.getInstance().hide();
    };
    IFrameLayer.prototype.addIFrame = function (win, parent, isback) {
        var iscreat = win.initialized;
        if (parent)
            parent.addChild(win);
        else
            this.addChild(win);
        if (iscreat)
            win.addToParent();
        if (win.isFullScene) {
            if (this.currentFullScene && this.currentFullScene != win) {
                if (!isback)
                    this.fullSceneList.push(this.currentFullScene.UIClass);
                this.hideIFrame(this.currentFullScene);
            }
            this.currentFullScene = win;
        }
        this.openList.push(win);
    };
    /**
     * 返回上个界面
     */
    IFrameLayer.prototype.backIframe = function () {
        var UIClass = this.fullSceneList.pop();
        if (UIClass)
            this.showIFrame(UIClass, null, null, true);
    };
    /**
     * 关闭界面
     */
    IFrameLayer.prototype.hideIFrame = function (win) {
        var index = this.openList.indexOf(win);
        if (index != -1)
            this.openList.splice(index, 1);
        //缓存界面
        index = this.viewList.indexOf(win);
        if (index == -1)
            this.viewList.push(win);
        win.tweenRemove();
    };
    IFrameLayer.prototype.hideIFrame2 = function (UIClass) {
        //是否已经打开
        var win = this.getIFrame(UIClass);
        if (win) {
            this.hideIFrame(win);
        }
    };
    IFrameLayer.prototype.closeAllIFrame = function () {
        for (var i = 0, len = this.openList.length; i < len; i++) {
            var win = this.openList[i];
            win.removeFromParent(true);
        }
        this.openList = [];
    };
    /**
     * 获取当前打开界面
     */
    IFrameLayer.prototype.getIFrame = function (UIClass) {
        for (var i = 0, len = this.openList.length; i < len; i++) {
            var win = this.openList[i];
            if (win instanceof UIClass) {
                return win;
            }
        }
    };
    return IFrameLayer;
}(egret.DisplayObjectContainer));
__reflect(IFrameLayer.prototype, "IFrameLayer");
// var __OPEN_WINDOW = function(UIClass:any,uiOpenData:any=null,parent:egret.DisplayObjectContainer=null,isback:boolean = false):sgame.BaseWindow {
//    return sgame.WindowsManger.instance.showWindow(UIClass,uiOpenData,parent,isback);
// }
// var __GET_WINDOW = function(UIClass:any):sgame.BaseWindow{
//      return sgame.WindowsManger.instance.getWindow(UIClass);
// }
// var __CLOSE_WINDOW = function(win:sgame.BaseWindow) {
//     sgame.WindowsManger.instance.closeWindow(win);
// }
// var __CLOSEALL_WINDOW = function() {
//     sgame.WindowsManger.instance.closeAllWindow();
// }
// var __BACK_WINDOW = function () {
//     sgame.WindowsManger.instance.backWindow();
// } 
//# sourceMappingURL=IFrameLayer.js.map