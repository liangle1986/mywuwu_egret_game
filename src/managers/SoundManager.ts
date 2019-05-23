class SoundManager extends egret.EventDispatcher
 {
	private static _instance: SoundManager;
    public static get instance(): SoundManager
    {
        if(this._instance == null)
            this._instance = new SoundManager();
        return this._instance;
    }

	private _isMusicOn:boolean = true;
	private _isSoundOn:boolean = true;

	
	private _bgSoundChannel:egret.SoundChannel;
	private _bgSound:egret.Sound;
	private _bgmVoice: number = 0.5;

	private _currentSoundChannel:egret.SoundChannel = null;
	private _currentSoundName:string = "";

	public constructor() 
	{
		super();
	}

	// 播放背景音乐
	public playMusic(name:string, volume:number = 0.5):void
	{
		if(!this.isMusicOn)
			return;
		this.stopMusic();
		this._bgmVoice = volume;
		this._bgSound = RES.getRes(name);
		this._bgSoundChannel = this._bgSound.play(0, 0);
		this._bgSoundChannel.volume = this._bgmVoice;
	}
	public set isMusicOn(value:boolean)
	{
		if(this._isMusicOn == value)
			return;
		this._isMusicOn = value;
		if(this._isMusicOn)
		{
			(this._bgSoundChannel) &&( this._bgSoundChannel.volume = this._bgmVoice);
		}
		else
		{
			(this._bgSoundChannel) &&( this._bgSoundChannel.volume = 0);
		}
	}

	public get isMusicOn():boolean { return this._isMusicOn;}

	public set isSoundOn(value:boolean)
	{
		this._isSoundOn = value;
	}

	public get isSoundOn():boolean
	{
		return this._isSoundOn;
	}

	// 播放音乐
	public playSound(name:string, loop:number = 1, voume:number = 1):void
	{
		if(!this._isSoundOn)
			return;

		// this.stopSound();
		
		var sound:egret.Sound = RES.getRes(name);
		if(sound == null || sound == undefined)
			return;
		this._currentSoundName = name;
		this._currentSoundChannel = sound.play(0, loop);
		this._currentSoundChannel.addEventListener(egret.Event.SOUND_COMPLETE, this.onLoadSoundComplete, this);
	}

	// 音乐播放完成事件
	private onLoadSoundComplete(e: egret.Event): void 
    {
        this._currentSoundChannel.removeEventListener(egret.Event.SOUND_COMPLETE,this.onLoadSoundComplete,this);
        this.dispatchEvent(new DEvent(DEvent.COMPLETE,this._currentSoundName));
    }

	// 音乐停止事件
	public stopSound():void
	{
		if(this._currentSoundChannel != null)
			this._currentSoundChannel.stop();
	}

	// 停止背景音乐
	public stopMusic():void
	{
		if(this._bgSoundChannel != null)
			this._bgSoundChannel.stop();
	}
}