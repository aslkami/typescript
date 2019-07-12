var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
function f(_a) {
    var a = _a.a, b = _a.b;
    // ...
}
function f1(_a) {
    var _b = _a === void 0 ? { a: "", b: 0 } : _a, a = _b.a, b = _b.b;
    // ...
}
f1(); // ok, default to { a: "", b: 0 }
function f2(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    // ...
}
f2({ a: "yes" }); // ok, default b = 0
f2(); // ok, default to {a: ""}, which then defaults b = 0
// f2({}); // error, 'a' is required if you supply an argument
var ObjectC = /** @class */ (function () {
    function ObjectC() {
        this.p = 12;
    }
    ObjectC.prototype.m = function () {
    };
    return ObjectC;
}());
var co = new ObjectC();
var clone = __assign({}, co); // 只会枚举 自身属性  方法不会 被解构出来
clone.p; // ok
// clone.m(); // error!
