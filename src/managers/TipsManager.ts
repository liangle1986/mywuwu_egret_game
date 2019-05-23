/**
* tips弹出管理类
* by dily
* (c) copyright 2014 - 2035
    * All Rights Reserved. 
* tips弹出的管理类
*/
module TipsManager {
    //tips面板
    var _tips:TipsPanel;
    //tip 对象数据存贮
    // var _dict:Object;
    var _dict:Array<any> = [];
    /**
    * 添加tips方法
    * attachment       		绑定对象
    * descStr        		tips内容
    * effectType        0：没有动画 1:从下到上渐现 2：从左向右 3：从右向左
    */
    export function registerTips(attachment:any, descStr:string = "",effectType:number = 0):void{ 
        
        unRegisterTips(attachment);
        
        if(this._dict == null){
            this._dict = [];
        }
        attachment.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.showTips,this);		
        attachment.addEventListener(egret.TouchEvent.TOUCH_END,this.removeTips,this);	
        attachment.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.removeTips,this);	
        
        if(this._dict[attachment.hashCode] == null){
            this._dict[attachment.hashCode] = [];
        }
        this._dict[attachment.hashCode].descStr = descStr;
        this._dict[attachment.hashCode].effectType = effectType;
    }
    
    export function unRegisterTips(attachment: any): void
    { 
        attachment.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.showTips,this);		
        attachment.removeEventListener(egret.TouchEvent.TOUCH_END,this.removeTips,this);	
        attachment.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.removeTips,this);
        removeTips(null);
    }
    
    /**
    * 显示tips方法
    */
    export function showTips(e):void{
        var attachment = e.currentTarget;
        var descStr:string = "";
        var effectType:number = 0;
        if(this._tips == null){
            if(this._dict[attachment.hashCode] != null){
                descStr = this._dict[attachment.hashCode].descStr;
                effectType = this._dict[attachment.hashCode].effectType;
            }
            this._tips = new TipsPanel(this._dict[attachment.hashCode].descStr);
            if(!GameGlobal.stage.contains(this._tips)){
                GameGlobal.stage.addChild( this._tips );
            }
            var point:egret.Point = attachment.parent.localToGlobal(attachment.x,attachment.y);
            point.x = point.x + attachment.width/2;
            point.y = point.y - this._tips.height; 
            //tips定位
            if(point.x + this._tips.width > GameGlobal.stage.stageWidth){
                point.x = GameGlobal.stage.stageWidth - this._tips.width;
            }else if(point.x < 0){
                point.x = 0;
            }
            if(point.y + this._tips.height > GameGlobal.stage.stageHeight){
                point.y = GameGlobal.stage.stageHeight - this._tips.height;
            }else if(point.y < 0){
                point.y = 0;
            }
            this._tips.x = point.x;
            this._tips.y = point.y;
            switch (effectType){
                case 0: {
                    // TODO: Implement case content
                    this._tips.alpha = 0;
                    egret.Tween.get(this._tips).to({alpha:1},300);
                    break;
                }
                case 1: {
                    this._tips.alpha = 0;
                    this._tips.y += this._tips.height;
                    egret.Tween.get(this._tips).to({alpha:1,y:this._tips.y - this._tips.height},500,egret.Ease.backOut);
                    break;
                }
                case 2: {
                    this._tips.alpha = 0;
                    this._tips.x -= this._tips.width;
                    egret.Tween.get(this._tips).to({alpha:1,x:this._tips.x + this._tips.width},500,egret.Ease.backOut);
                    break;
                }
                case 3: {
                    this._tips.alpha = 0;
                    this._tips.x += this._tips.width;
                    egret.Tween.get(this._tips).to({alpha:1,x:this._tips.x - this._tips.width},500,egret.Ease.backOut);
                    break;
                }
                default: {
                }
            }
        }	
    }
    /**
    * 移除tips方法
    */
    export function removeTips(e:egret.TouchEvent):void
    { 
        if(this._tips != null){
            var onComplete:Function = function(){
                if(GameGlobal.stage.contains(this._tips)){
                    GameGlobal.stage.removeChild( this._tips );
                    this._tips = null;
                }
            }; 
            egret.Tween.get(this._tips).to({alpha:0},300).call(onComplete,this);      
        }	
    }
}