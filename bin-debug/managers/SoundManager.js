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
var SoundManager = (function (_super) {
    __extends(SoundManager, _super);
    function SoundManager() {
        var _this = _super.call(this) || this;
        _this._isMusicOn = true;
        _this._isSoundOn = true;
        _this._bgmVoice = 0.5;
        _this._currentSoundChannel = null;
        _this._currentSoundName = "";
        return _this;
    }
    Object.defineProperty(SoundManager, "instance", {
        get: function () {
            if (this._instance == null)
                this._instance = new SoundManager();
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    // 播放背景音乐
    SoundManager.prototype.playMusic = function (name, volume) {
        if (volume === void 0) { volume = 0.5; }
        if (!this.isMusicOn)
            return;
        this.stopMusic();
        this._bgmVoice = volume;
        this._bgSound = RES.getRes(name);
        this._bgSoundChannel = this._bgSound.play(0, 0);
        this._bgSoundChannel.volume = this._bgmVoice;
    };
    Object.defineProperty(SoundManager.prototype, "isMusicOn", {
        get: function () { return this._isMusicOn; },
        set: function (value) {
            if (this._isMusicOn == value)
                return;
            this._isMusicOn = value;
            if (this._isMusicOn) {
                (this._bgSoundChannel) && (this._bgSoundChannel.volume = this._bgmVoice);
            }
            else {
                (this._bgSoundChannel) && (this._bgSoundChannel.volume = 0);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoundManager.prototype, "isSoundOn", {
        get: function () {
            return this._isSoundOn;
        },
        set: function (value) {
            this._isSoundOn = value;
        },
        enumerable: true,
        configurable: true
    });
    // 播放音乐
    SoundManager.prototype.playSound = function (name, loop, voume) {
        if (loop === void 0) { loop = 1; }
        if (voume === void 0) { voume = 1; }
        if (!this._isSoundOn)
            return;
        // this.stopSound();
        var sound = RES.getRes(name);
        if (sound == null || sound == undefined)
            return;
        this._currentSoundName = name;
        this._currentSoundChannel = sound.play(0, loop);
        this._currentSoundChannel.addEventListener(egret.Event.SOUND_COMPLETE, this.onLoadSoundComplete, this);
    };
    // 音乐播放完成事件
    SoundManager.prototype.onLoadSoundComplete = function (e) {
        this._currentSoundChannel.removeEventListener(egret.Event.SOUND_COMPLETE, this.onLoadSoundComplete, this);
        this.dispatchEvent(new DEvent(DEvent.COMPLETE, this._currentSoundName));
    };
    // 音乐停止事件
    SoundManager.prototype.stopSound = function () {
        if (this._currentSoundChannel != null)
            this._currentSoundChannel.stop();
    };
    // 停止背景音乐
    SoundManager.prototype.stopMusic = function () {
        if (this._bgSoundChannel != null)
            this._bgSoundChannel.stop();
    };
    return SoundManager;
}(egret.EventDispatcher));
__reflect(SoundManager.prototype, "SoundManager");
//# sourceMappingURL=SoundManager.js.map