/**
 * 界面管理
 */
class IFrameLayer extends egret.DisplayObjectContainer
{
	/**已经打开的列表 */
	public openList: IFrameBase[] = [];
	/**全屏显示列表 */
	public fullSceneList: any[] = [];
	public viewList:IFrameBase[] = [];
	public currentFullScene: IFrameBase; //当前打开的全屏界面

	/**
	 * 打开界面
	 */
	public showIFrame(UIClass:any,uiOpenData:any = null,parent:egret.DisplayObjectContainer = null,isback:boolean = false):IFrameBase
	{
		//是否已经打开
		var win: IFrameBase = this.getIFrame(UIClass);
		if(win)
		{
			console.log("win = "+UIClass+", aleady opened!!!");
			win.uiOpenData = uiOpenData;
			return win;
		}
		for (var i = 0, len = this.viewList.length; i < len; i++) 
		{
			win = this.viewList[i]; 
			if (win instanceof UIClass) 
			{
				win.uiOpenData = uiOpenData;
				this.addIFrame(win, parent, isback);
				return win;
			}
		}

		win = new UIClass();
		win.UIClass = UIClass;
		win.uiOpenData = uiOpenData;
		//需要热加载资源
		if (win.groupNames && win.groupNames.length > 0) 
		{
			this.loadIFrameRes(win, parent,isback);
		} else this.addIFrame(win, parent,isback);
		
		return win;
	}

	private loadwin: IFrameBase;
	private groupNames: string[];
	private loadwinparent: egret.DisplayObjectContainer;
	private loadwinisback: boolean;
	/**
	 * 
	 */
	public loadIFrameRes(win: IFrameBase, parent: egret.DisplayObjectContainer, isback: boolean): void
	{
		DataLoading.getInstance().show(); //改成资源加载界面
		this.loadwin = win;
		this.loadwinparent = parent;
		this.loadwinisback = isback;
		this.groupNames = win.groupNames.concat();
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);            
		RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadErr, this);
		var grp = this.groupNames.concat();
		for (var i: number = 0; i < grp.length; i++){
			RES.loadGroup(grp[i]);
		}
	}
	/**
	 * 
	 */
	private onResourceLoadComplete(event: RES.ResourceEvent): void 
	{          
		var index = this.groupNames.indexOf(event.groupName);
		if (index != -1) this.groupNames.splice(index, 1)
		if (this.groupNames.length == 0) {
			this.clearListener();
			if (this.loadwin) {
				this.addIFrame(this.loadwin, this.loadwinparent, this.loadwinisback); 
				this.loadwin = null;
				this.loadwinparent = null;
			}                  
		}
		
	}

	private  onResourceLoadErr(event: RES.ResourceEvent): void 
	{
		AlertView.getInstance().show("网络不稳定引响预置加载:" + event.groupName  + "失败!");
		var index = this.groupNames.indexOf(event.groupName);
		if (index != -1) this.groupNames.splice(index, 1)
		if (this.groupNames.length == 0) 
		{
			this.clearListener();
			if (this.loadwin) 
			{
				this.loadwin.dispose();
				this.loadwin = null;
				this.loadwinparent = null;
			}
		}           
	}

	private  clearListener(): void 
	{
		RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
		RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadErr, this);  
		//todo 改成资源加载loading       
		DataLoading.getInstance().hide();
    }

	private addIFrame(win: IFrameBase, parent: egret.DisplayObjectContainer,isback:boolean):void
	{
		var iscreat = win.initialized;
		if (parent) parent.addChild(win);
		else this.addChild(win);
		if (iscreat) win.addToParent();

		if (win.isFullScene) 
		{
			if (this.currentFullScene && this.currentFullScene!=win){                 
				if(!isback)
					this.fullSceneList.push(this.currentFullScene.UIClass);
				this.hideIFrame(this.currentFullScene);
			}  
			this.currentFullScene = win;
		}
		this.openList.push(win);
	}
	/**
	 * 返回上个界面
	 */
	public backIframe():void
	{
		var UIClass = this.fullSceneList.pop();
		if (UIClass) this.showIFrame(UIClass,null, null, true);
	}
	/**
	 * 关闭界面
	 */
	public hideIFrame(win: IFrameBase): void
	{
		var index: number = this.openList.indexOf(win);
		if (index != -1) this.openList.splice(index, 1);
		//缓存界面
		index = this.viewList.indexOf(win);
		if(index==-1)  this.viewList.push(win);
		win.tweenRemove();
	}

	public hideIFrame2(UIClass:any):void
	{
		//是否已经打开
		var win: IFrameBase = this.getIFrame(UIClass);
		if(win)
		{
			this.hideIFrame(win);
		}
	}

	public closeAllIFrame():void
	{
		for (var i: number = 0, len: number = this.openList.length; i < len; i++) 
		{
			var win: IFrameBase = this.openList[i];
			win.removeFromParent(true);
		}
		this.openList = [];
	}

	/**
	 * 获取当前打开界面
	 */
	public getIFrame(UIClass:any): IFrameBase 
	{
		for (var i: number = 0, len: number = this.openList.length; i < len; i++) 
		{
			var win: IFrameBase = this.openList[i]; 
			if (win instanceof UIClass) 
			{
				return win;
			}
		}
    }

	public constructor() 
	{
		super();
	}
}


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