class ObjectPool {

    private _objTable: HashMap = new HashMap();

    public constructor() {
    }

    public getObject(classObj: any): any {
        var key: string = classObj.key;
        console.log(key);
        var objArr: Array<any> = this._objTable.get(key);
        var resultObj: any;
        if (objArr == null || objArr.length == 0) {
            resultObj = new classObj();
            resultObj.key = key;
            return resultObj;
        }
        return objArr.pop();
    }

    public putObject(obj: any): void {
        var key: string = obj.key;
        var objArr: Array<any> = this._objTable.get(key);
        if (objArr == null)
            this._objTable.put(key, objArr = new Array());
        objArr.push(obj);
    }
}