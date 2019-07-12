function keepWholeObject(wholeObject: { a: string, b?: number }) {
  let { a, b = 1001 } = wholeObject;
}


type C = { a: string, b?: number }
function f({ a, b }: C): void {
  // ...
}

function f1({ a, b } = { a: "", b: 0 }): void {
  // ...
}
f1(); // ok, default to { a: "", b: 0 }


function f2({ a, b = 0 } = { a: "" }): void {
  // ...
}
f2({ a: "yes" }); // ok, default b = 0
f2(); // ok, default to {a: ""}, which then defaults b = 0
// f2({}); // error, 'a' is required if you supply an argument




class ObjectC {
  p = 12;
  m() {
  }
}
let co = new ObjectC();
let clone = { ...co };  // 只会枚举 自身属性  方法不会 被解构出来
clone.p; // ok
// clone.m(); // error!