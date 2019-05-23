var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ObjectPool = (function () {
    function ObjectPool() {
        this._objTable = new HashMap();
    }
    ObjectPool.prototype.getObject = function (classObj) {
        var key = classObj.key;
        console.log(key);
        var objArr = this._objTable.get(key);
        var resultObj;
        if (objArr == null || objArr.length == 0) {
            resultObj = new classObj();
            resultObj.key = key;
            return resultObj;
        }
        return objArr.pop();
    };
    ObjectPool.prototype.putObject = function (obj) {
        var key = obj.key;
        var objArr = this._objTable.get(key);
        if (objArr == null)
            this._objTable.put(key, objArr = new Array());
        objArr.push(obj);
    };
    return ObjectPool;
}());
__reflect(ObjectPool.prototype, "ObjectPool");
//# sourceMappingURL=ObjectPool.js.map