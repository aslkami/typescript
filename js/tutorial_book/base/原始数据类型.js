"use strict";
/**
 * 1. 布尔值
 */
Object.defineProperty(exports, "__esModule", { value: true });
var isDone = false; // 后面约定，未强调编译错误的代码片段，默认为编译通过
var createdByNewBoolean = Boolean(1); // okay
// let createdByNewBoolean: boolean = new Boolean(1); // 不能使用构造函数， 这样创建的是对象，不是布尔值
// Type 'Boolean' is not assignable to type 'boolean'.
// 'boolean' is a primitive, but 'Boolean' is a wrapper object.Prefer using 'boolean' when possible.
/**
 * 2. 数值
 */
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10; // ES6 中的二进制表示法
var octalLiteral = 484; // ES6 中的八进制表示法
var notANumber = NaN;
var infinityNumber = Infinity;
/**
 * 3. 字符串
 */
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
/**
 * 4. 空值
 */
function alertName() {
    alert('My name is Tom');
}
var unusable = undefined; // 明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
/**
 * 5. Null 和 Undefined
 */
var u = undefined;
var n = null;
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。
// 也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
var num = undefined; // 这样不会报错
