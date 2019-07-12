/**
 * 布尔类型
 */
var bool = Boolean(1); // 去掉new， 返回的是boolean 类型
//let createdByNewBoolean: boolean = new Boolean(1); // new Boolan() 返回的是对象
/**
 * 数值类型
 */
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
/**
 * 字符串
 */
var myName = "Tom";
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
/**
 * 数组
 */
var list = [1, 2, 3]; // number类型的数组
var list1 = [1, 2, 3]; // 数组泛型
/**
 * 元组 Tuple
 */
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
// Declare a tuple type
var x; // 定义了数组元素只能是字符串或者浮点类型
x = ['hello', 10]; // OK
// x = [10, 'hello']; // Error 数据类型没有对应
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
/**
 * 枚举
 */
// enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 6] = "Blue";
})(Color || (Color = {})); //  默认从0开始为元素编号。 你也可以手动的指定成员的数值。
var c = Color.Blue;
console.log(c);
var colorName = Color[2];
console.log(colorName); // 显示'Green'因为上面代码里它的值是2
/**
 * Any
 */
// 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 
// 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 
// 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 
// 那么我们可以使用 any类型来标记这些变量：
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// notSure.ifItExists(); // okay, ifItExists might exist at runtime  (这边显示 notSure.ifItExists is not a function )
// notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check) (这边显示 notSure.toFixed is not a function )
var prettySure = 4; // Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
var list2 = [1, true, "free"];
list2[1] = 100; // 你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据
console.log(list2);
/**
 * 空值void
 */
var unusable = undefined; // 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
function alertName() {
    alert('My name is Tom'); // JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
}
/**
 * Null 和 Undefined
 */
// undefined 类型的变量只能被赋值为 undefined
// null 类型的变量只能被赋值为 null。
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量( 以前的版本 )
// 当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 这能避免 很多常见的问题。 也许在某处你想传入一个 string或null或undefined，你可以使用联合类型string | null | undefined
// 我们鼓励尽可能地使用--strictNullChecks
var u = undefined;
var n = null;
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
/**
 * Never
 */
// never类型表示的是那些永不存在的值的类型。 
// 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
// never类型是任何类型的子类型，也可以赋值给任何类型；
// 然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
/**
 * 类型断言
 */
// 类型断言有两种形式。 其一是“尖括号”语法：
var someValue = "this is a string";
var strLength = someValue.length;
// 另一个为as语法，当你在TypeScript里使用JSX时，只有as语法断言是被允许的。
var someValue1 = "this is a string";
var strLength1 = someValue1.length;
