// ECMAScript 的内置对象
let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;

// BOM 和 DOM
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function (e: MouseEvent) {
  // Do something
});


// TypeScript 核心库的定义文件
// Math.pow(10, '2'); // Argument of type '"2"' is not assignable to parameter of type 'number'
// 相当于规范一个规范接口
interface Math {
  /**
   * Returns the value of a base expression taken to a specified power.
   * @param x The base value of the expression.
   * @param y The exponent value of the expression.
   */
  pow(x: number, y: number): number;
}


document.addEventListener('click', function (e) {
  // console.log(e.targetCurrent); // Property 'targetCurrent' does not exist on type 'MouseEvent'.
});

// e 被推断成了 MouseEvent，而 MouseEvent 是没有 targetCurrent 属性的，所以报错了。
// interface Document extends Node, GlobalEventHandlers, NodeSelector, DocumentEvent {
//   // nterface 'Document' cannot simultaneously extend types 'Node' and 'GlobalEventHandlers
//   // Cannot find name 'NodeSelector'.
//   addEventListener(type: string, listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
// }
interface Document extends GlobalEventHandlers, DocumentEvent {
  addEventListener(type: string, listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
}

// 用 TypeScript 写 Node.js
// Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件
// npm install @types/node --save-dev
export {}