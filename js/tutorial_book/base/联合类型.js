/**
 * 访问联合类型的属性或方法
 */
//  TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
// function getLength(something: string | number): number {
// return something.length;  // ength 不是 string 和 number 的共有属性，所以会报错。
// }
