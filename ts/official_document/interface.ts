/* // 类型检查器会查看printLabel的调用。 
// printLabel有一个参数，并要求这个对象参数有一个名为label类型为string的属性。 
// 需要注意的是，我们传入的对象参数实际上会包含很多属性，但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配。
// 下面的必须根据接口来传参， 参数里必须要有label字段并且是string类型的
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}
let myObj = { size: 10};
printLabel(myObj);  // 会编译报错 


// 这里采用接口的形式， 下面的必须根据接口来传参， 参数里必须要有label字段并且是string类型的
interface LabelledValue {
  label: string;
}
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj);
}
let myObj = { size: 10, label: '2000'};
printLabel(myObj); */


/**
 * 可选属性
 */

// 可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误
interface SquareConfig {
  color?: string;
  width?: number;  // 加问号表示可选属性
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare = createSquare({ color: "black" });


/**
 * 只读属性
 */

interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error! Cannot assign to 'x' because it is a read-only property.
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error! Index signature in type 'readonly number[]' only permits reading.
// ro.push(5); // error! Property 'push' does not exist on type 'readonly number[]'
// ro.length = 100; // error!  Cannot assign to 'length' because it is a read-only property.
// a = ro; // error! The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.
a = ro as number[]  // ok, 类型断言重写，将其转化成普通数组再赋值


// readonly vs const
// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用const，若做为属性则使用readonly。

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;  // 这里表示可以 传入额外不存在的属性
}
// let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig); // 也可以使用类型断言重写



/**
 * 函数类型
 */

// 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 
// 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
interface SearchFunc {
  (source: string, subString: string): boolean;
}
// 这样定义后，我们可以像使用其它接口一样使用这个函数类型的接口。 
// 下例展示了如何创建一个函数类型的变量，并将一个同类型的函数赋值给这个变量。
/* let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
} */

// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配
/* let mySearch: SearchFunc;
mySearch = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
} */

// 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。 
// 如果你不想指定类型，TypeScript的类型系统会推断出参数类型，因为函数直接赋值给了SearchFunc类型变量。 
// 函数的返回值类型是通过其返回值推断出来的（此例是false和true）。 
// 如果让这个函数返回数字或字符串，类型检查器会警告我们函数的返回值类型与SearchFunc接口中的定义不匹配。
/* let mySearch: SearchFunc;
mySearch = function (src, sub) {
  let result = src.search(sub);
  return result > -1;
} */



/**
 * 可索引的类型
 */

interface StringArray {
  [index: number]: string;
}
let myArray: StringArray;
// myArray = ["Bob", "Fred", 3];  //  Type 'number' is not assignable to type 'string'
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];


// 共有支持两种索引签名：字符串和数字。 
// 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 
// 这是因为当使用number来索引时，JavaScript会将它转换成string然后再去索引对象。 
// 也就是说用100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。
class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}
// 错误：使用'string'索引，有时会得到Animal!
interface NotOkay {
  // [x: number]: Animal;  // Numeric index type 'Animal' is not assignable to string index type 'Dog'
  [x: string]: Dog;
}


// 字符串索引签名能够很好的描述dictionary模式，并且它们也会确保所有属性与其返回值类型相匹配。 
// 因为字符串索引声明了obj.property和obj["property"]两种形式都可以。 
// 下面的例子里，name的类型与字符串索引类型不匹配，所以类型检查器给出一个错误提示：
interface NumberDictionary {
  [index: string]: number;
  length: number;    // 可以，length是number类型
  // name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray1: ReadonlyStringArray = ["Alice", "Bob"];
// myArray1[2] = "Mallory"; // error!  Index signature in type 'ReadonlyStringArray' only permits reading







/**
 * 类类型
 */

/* interface ClockInterface {
  currentTime: Date;
}
class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) { }
} */

/* interface ClockConstructor {
  // new(hour: number, minute: number);  
  // Class 'Clock' incorrectly implements interface 'ClockConstructor'.
  // Type 'Clock' provides no match for the signature 'new (hour: number, minute: number): any'.
}

class Clock implements ClockConstructor {
  currentTime: Date;
  constructor(h: number, m: number) { }
} */

/* 
interface ClockConstructor {
  new(hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick(); // tick', which lacks return-type annotation, implicitly has an 'any' return type.
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32); */




/**
 * 继承接口
 */

interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;



/**
 * 混合类型
 */

interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let cc = getCounter();
cc(10);
cc.reset();
cc.interval = 5.0;





/**
 * 接口继承类
 */

// 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 
// 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 
// 接口同样会继承到类的private和protected成员。 
// 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。

// 当你有一个庞大的继承结构时这很有用，但要指出的是你的代码只在子类拥有特定属性时起作用。 
// 这个子类除了继承至基类外与基类没有任何关系。 例：

class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}
class Button extends Control implements SelectableControl {
  select() { }
}
class TextBox extends Control {

}
// Error: Property 'state' is missing in type 'Image'.
// Class 'Image' incorrectly implements interface 'SelectableControl
//  Property 'state' is missing in type 'Image' but required in type 'SelectableControl'
// class Image implements SelectableControl {
//   select() { }
// }
// class Location {

// }



// 在上面的例子里，SelectableControl包含了Control的所有成员，包括私有成员state。 
// 因为state是私有成员，所以只能够是Control的子类们才能实现SelectableControl接口。 
// 因为只有Control的子类才能够拥有一个声明于Control的私有成员state，这对私有成员的兼容性是必需的。
// 在Control类内部，是允许通过SelectableControl的实例来访问私有成员state的。 
// 实际上，SelectableControl就像Control一样，并拥有一个select方法。 
// Button和TextBox类是SelectableControl的子类（因为它们都继承自Control并有select方法），但Image和Location类并不是这样的。