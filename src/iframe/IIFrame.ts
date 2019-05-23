interface IIFrame {
        /** 界面名称 */
        getIframeName():string;
        setIframeName(value:string):void;
        /** esc关闭界面，仅针对pc有用*/
        isEscToClose():boolean;
        /** 是否模态窗口，带遮罩*/
        isModal(): boolean;
        /** 界面显示调用 */
        onShow():void;
        /** 界面显示完成调用，用于缓动效果结束*/
        onShowComplete():void;
        /** 界面关闭调用 */
        onStop():void;
        /** 界面关闭完成调用，用于缓动效果结束*/
        onStopComplete():void;
        /** 界面宽 */
        getWidth():number;
        /** 界面高 */
        getHeight():number;
        /** 当前缓动效果参数，如从某个位置scale0缓动刀scale1*/
        getBirthXY_Alpha_Scale():Object;
        /** 返回自身容器 */
        getSelf():egret.Sprite;
        
}