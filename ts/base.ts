/**
 * 基础类型
 */



/**
 * 布尔类型 
 */
let bool: boolean = Boolean(1); // 去掉new， 返回的是boolean 类型
//let createdByNewBoolean: boolean = new Boolean(1); // new Boolan() 返回的是对象



/**
 * 数值类型 
 */
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;



/**
 * 字符串 
 */
let myName: string = "Tom";
let myAge: number = 25;
// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;



/**
 * 数组 
 */
let list: number[] = [1, 2, 3];  // number类型的数组
let list1: Array<number> = [1, 2, 3]; // 数组泛型



/**
 * 元组 Tuple 
 */
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
// Declare a tuple type
let x: [string, number];
x = ['hello', 10]; // OK
// x = [10, 'hello']; // Error 数据类型没有对应
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'



/**
 * 枚举
 */
// enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
enum Color { Red = 1, Green = 2, Blue = 4 } //  默认从0开始为元素编号。 你也可以手动的指定成员的数值。
let c: Color = Color.Green;
let colorName: string = Color[2];
console.log(colorName);  // 显示'Green'因为上面代码里它的值是2



/**
 * Any
 */
// 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 
// 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 
// 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 
// 那么我们可以使用 any类型来标记这些变量：
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4; // Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
let list2: any[] = [1, true, "free"]; 
list2[1] = 100; // 你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据


/**
 * 空值void 
 */
let unusable: void = undefined; // 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
function alertName(): void {
  alert('My name is Tom');  // JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
}



/**
 * Null 和 Undefined 
 */
// undefined 类型的变量只能被赋值为 undefined
// null 类型的变量只能被赋值为 null。
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量( 以前的版本 )
// 当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 这能避免 很多常见的问题。 也许在某处你想传入一个 string或null或undefined，你可以使用联合类型string | null | undefined
// 我们鼓励尽可能地使用--strictNullChecks
let u: undefined = undefined;
let n: null = null;



/**
 * Object
 */
// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
// 使用object类型，就可以更好的表示像Object.create这样的API。例如：
declare function create(o: object | null): void;
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
function error(message: string): never {
  throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}



/**
 * 类型断言
 */
// 类型断言有两种形式。 其一是“尖括号”语法：
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
// 另一个为as语法，当你在TypeScript里使用JSX时，只有as语法断言是被允许的。
let someValue1: any = "this is a string";
let strLength1: number = (someValue1 as string).length;