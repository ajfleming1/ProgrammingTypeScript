var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var MySet = /** @class */ (function () {
    function MySet() {
        this.mySet = [];
    }
    MySet.prototype.has = function (value) {
        return this.mySet.indexOf(value) > -1;
    };
    MySet.prototype.add = function (value) {
        if (!this.has(value)) {
            this.mySet = __spreadArrays(this.mySet, [value]);
            return this;
        }
    };
    return MySet;
}());
var set = new MySet();
set.add(1).add(2).add(3);
console.log(set);
var MutableSet = /** @class */ (function (_super) {
    __extends(MutableSet, _super);
    function MutableSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MutableSet.prototype["delete"] = function (value) {
        if (this.has(value)) {
            this.mySet = this.mySet.filter(function (f) { return f !== value; });
            return true;
        }
        return false;
    };
    return MutableSet;
}(MySet));
var myMuSet = new MutableSet();
myMuSet.add(1).add(2).add(3);
console.log(myMuSet["delete"](1));
console.log(myMuSet);
console.log(myMuSet["delete"](10));
