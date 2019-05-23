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
 * ItemRender 基类
 * 具有点击行为
 */
var BaseItemClickRenderer = (function (_super) {
    __extends(BaseItemClickRenderer, _super);
    function BaseItemClickRenderer() {
        var _this = _super.call(this) || this;
        _this.touchCache = {}; //可以改成hashmap
        _this.SCALE_ROAT = 1.1; //缩放系数
        _this.once(eui.UIEvent.CREATION_COMPLETE, _this.onCreateComplete, _this);
        return _this;
    }
    BaseItemClickRenderer.prototype.onCreateComplete = function (evt) {
        //            this.addBtn(this.btnfight);  
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.itemTouchBegin, this);
        this.setLanguage();
    };
    /**
     * 设置国际化语言
     * 子类覆盖
     */
    BaseItemClickRenderer.prototype.setLanguage = function () {
    };
    /**
     * 添加可点击的显示对象
     * @param tag 点击的显示对象
     * @param scaleEnable 点击时 是否缩放
     */
    BaseItemClickRenderer.prototype.addButton = function (tag, scaleEnable) {
        if (scaleEnable === void 0) { scaleEnable = false; }
        if (!this.touchCache[tag.hashCode]) {
            this.touchCache[tag.hashCode] = [tag.x, tag.y, tag.scaleX, tag.scaleY, scaleEnable];
        }
    };
    BaseItemClickRenderer.prototype.removeButton = function (tag) {
        if (this.touchCache[tag.hashCode]) {
            delete this.touchCache[tag.hashCode];
        }
    };
    /**
     *
     */
    BaseItemClickRenderer.prototype.itemTouchBegin = function (event) {
        this.startx = event.stageX;
        this.starty = event.stageY;
        var tag = event.target;
        var touchdata = this.touchCache[tag.hashCode];
        if (touchdata) {
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.itemTouchEnd, this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.itemTouchCancel, this);
            if (touchdata[4]) {
                tag.scaleX = touchdata[2] * this.SCALE_ROAT;
                tag.scaleY = touchdata[3] * this.SCALE_ROAT;
                tag.x = touchdata[0] - ((this.SCALE_ROAT - 1) * tag.width >> 1);
                tag.y = touchdata[1] - ((this.SCALE_ROAT - 1) * tag.height >> 1);
            }
        }
    };
    /**
     *
     */
    BaseItemClickRenderer.prototype.itemTouchEnd = function (event) {
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.itemTouchEnd, this);
        var px = this.startx - event.stageX;
        var py = this.starty - event.stageY;
        var tag = event.target;
        var touchdata = this.touchCache[tag.hashCode];
        if (touchdata) {
            if (touchdata[4]) {
                tag.x = touchdata[0];
                tag.y = touchdata[1];
                tag.scaleX = touchdata[2];
                tag.scaleY = touchdata[3];
            }
            if (px < 20 && px > -20 && py < 20 && py > -20) {
                this.click(tag);
            }
        }
    };
    BaseItemClickRenderer.prototype.itemTouchCancel = function (event) {
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.itemTouchCancel, this);
        var px = this.startx - event.stageX;
        var py = this.starty - event.stageY;
        var tag = event.target;
        var touchdata = this.touchCache[tag.hashCode];
        if (touchdata) {
            if (touchdata[4]) {
                tag.x = touchdata[0];
                tag.y = touchdata[1];
                tag.scaleX = touchdata[2];
                tag.scaleY = touchdata[3];
            }
        }
    };
    /**
     * 按钮点击  tag 点中的显示对象
     * */
    BaseItemClickRenderer.prototype.click = function (tag) {
        //这里可以统一播放声音等
    };
    return BaseItemClickRenderer;
}(eui.ItemRenderer));
__reflect(BaseItemClickRenderer.prototype, "BaseItemClickRenderer");
//# sourceMappingURL=BaseItemClickRenderer.js.map