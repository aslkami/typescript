/**
 * 1. 布尔值
 */

let isDone: boolean = false; // 后面约定，未强调编译错误的代码片段，默认为编译通过
let createdByNewBoolean: boolean = Boolean(1); // okay
// let createdByNewBoolean: boolean = new Boolean(1); // 不能使用构造函数， 这样创建的是对象，不是布尔值
// Type 'Boolean' is not assignable to type 'boolean'.
// 'boolean' is a primitive, but 'Boolean' is a wrapper object.Prefer using 'boolean' when possible.



/**
 * 2. 数值
 */

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010; // ES6 中的二进制表示法
let octalLiteral: number = 0o744;  // ES6 中的八进制表示法
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

/**
 * 3. 字符串
 */

let myName: string = 'Tom';
let myAge: number = 25;
// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

/**
 * 4. 空值
 */

function alertName(): void {
  alert('My name is Tom');
}
let unusable: void = undefined;  // 明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null


/**
 * 5. Null 和 Undefined
 */

let u: undefined = undefined;
let n: null = null;
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。
// 也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
let num: number = undefined; // 这样不会报错

// let u: undefined; // 这样也不会报错
// let num: number = u;

// let u: void;  // 报错，void 类型的变量不能赋值给 number 类型的变量：
// let num: number = u;
export {}