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
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var p1 = { x: 10, y: 20 };
// p1.x = 5; // error! Cannot assign to 'x' because it is a read-only property.
var a = [1, 2, 3, 4];
var ro = a;
// ro[0] = 12; // error! Index signature in type 'readonly number[]' only permits reading.
// ro.push(5); // error! Property 'push' does not exist on type 'readonly number[]'
// ro.length = 100; // error!  Cannot assign to 'length' because it is a read-only property.
// a = ro; // error! The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.
a = ro; // ok, 类型断言重写，将其转化成普通数组再赋值
var myArray;
// myArray = ["Bob", "Fred", 3];  //  Type 'number' is not assignable to type 'string'
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
// 共有支持两种索引签名：字符串和数字。 
// 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 
// 这是因为当使用number来索引时，JavaScript会将它转换成string然后再去索引对象。 
// 也就是说用100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var myArray1 = ["Alice", "Bob"];
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var cc = getCounter();
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
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TextBox;
}(Control));
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
