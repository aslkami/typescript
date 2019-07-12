/**
 * 可选属性
 */

// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
interface Person {
  name: string;
  age?: number; // roperty 'age' of type 'number' is not assignable to string index type 'string'
  // [propName: string]: string;
  [propName: string]: any;
}

// Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'
let tom: Person = { 
  name: 'Tom',
  age: 25,
  gender: 'male'
};
// 上例中，任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性，所以报错了。
// [propName: string]: string; 改成 [propName: string]: any; 即可

export {}