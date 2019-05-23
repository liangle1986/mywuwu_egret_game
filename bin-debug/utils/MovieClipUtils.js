var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MovieClipUtils = (function () {
    function MovieClipUtils() {
    }
    /**
    * 播放一次某影片剪辑
    * @param mc			要播放的影片剪辑
    * @param onComplete	播放完成后执行函数（如果为null，则播放完后自动从父容器移除）
    * @param onCompleteParams
    *
    */
    MovieClipUtils.playOnce = function (mc, onComplete) {
        if (onComplete === void 0) { onComplete = null; }
        if (onComplete == null)
            onComplete = this._onPlayOnceEnd;
        mc.gotoAndPlay(1);
        this._all.put(mc, onComplete);
        if (this._all.size() == 1)
            EnterFrameManager.addEnterFrameHandler(this._enterFrameHandler, this);
    };
    MovieClipUtils._enterFrameHandler = function () {
        for (var index in this._all.keys) {
            var mc = this._all.keys[index];
            if (mc.currentFrame == mc.totalFrames) {
                mc.stop();
                var fun = this._all.get(mc);
                if (fun)
                    fun(mc);
                this._all.remove(mc);
            }
        }
        if (this._all.size() == 0)
            EnterFrameManager.removeEnterFrameHandler(this._enterFrameHandler);
    };
    MovieClipUtils._onPlayOnceEnd = function (mc) {
        if (mc.parent != null)
            mc.parent.removeChild(mc);
    };
    MovieClipUtils.remove = function (mc, playEnd) {
        if (playEnd === void 0) { playEnd = false; }
        var onPlayEndHandler = this._all.remove(mc);
        if (playEnd && onPlayEndHandler instanceof Function)
            onPlayEndHandler(mc);
    };
    MovieClipUtils._all = new HashMap();
    return MovieClipUtils;
}());
__reflect(MovieClipUtils.prototype, "MovieClipUtils");
//# sourceMappingURL=MovieClipUtils.js.map