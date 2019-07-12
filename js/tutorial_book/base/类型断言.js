/* function getLength(something: string | number): number {
  if (something.length) {
    return something.length; // error TS2339: Property 'length' does not exist on type 'string | number'.
  } else {
    return something.toString().length;
  }
} */
// 时可以使用类型断言，将 something 断言成 string：
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
// function toBoolean(something: string | number): boolean {
//   return <boolean>something;
//   // Conversion of type 'string | number' to type 'boolean' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
//   // Type 'number' is not comparable to type 'boolean'.
// }
