class MovieClipUtils {

    private static _all: HashMap = new HashMap();
    /**
    * 播放一次某影片剪辑
    * @param mc			要播放的影片剪辑
    * @param onComplete	播放完成后执行函数（如果为null，则播放完后自动从父容器移除）
    * @param onCompleteParams
    *
    */
    public static playOnce(mc: egret.MovieClip,onComplete: Function = null): void {
        if(onComplete == null)
            onComplete = this._onPlayOnceEnd;

        mc.gotoAndPlay(1);
        this._all.put(mc,onComplete);

        if(this._all.size() == 1)
            EnterFrameManager.addEnterFrameHandler(this._enterFrameHandler,this);
    }

    private static _enterFrameHandler(): void {
        for(var index in this._all.keys) {
            var mc: egret.MovieClip = this._all.keys[index];
            if(mc.currentFrame == mc.totalFrames) {
                mc.stop();
                var fun: Function = this._all.get(mc);
                if(fun)
                    fun(mc);
                this._all.remove(mc);
            }
        }

        if(this._all.size() == 0)
            EnterFrameManager.removeEnterFrameHandler(this._enterFrameHandler);
    }

    private static _onPlayOnceEnd(mc: egret.MovieClip): void {
        if(mc.parent != null)
            mc.parent.removeChild(mc);
    }

    public static remove(mc: egret.MovieClip,playEnd: Boolean = false): void {
        var onPlayEndHandler: Function = this._all.remove(mc);
        if(playEnd && onPlayEndHandler instanceof Function)
            onPlayEndHandler(mc);
    }
}