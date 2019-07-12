/* 
declare var 声明全局变量
declare function 声明全局方法
declare class 声明全局类
declare enum 声明全局枚举类型
declare namespace 声明（含有子属性的）全局对象
interface 和 type 声明全局类型
export 导出变量
export namespace 导出（含有子属性的）对象
export default ES6 默认导出
export = commonjs 导出模块
export as namespace UMD 库声明全局变量
declare global 扩展全局变量
declare module 扩展模块
/// <reference /> 三斜线指令
 */


/**
 * 1. 声明语句
 */
// jQuery('#foo'); // ERROR: Cannot find name 'jQuery'.
declare var jQuery: (selector: string) => any; // 这样才能使用

/**
 * 2. 声明文件
 */
// 通常我们会把声明语句放到一个单独的文件（jQuery.d.ts）中，这就是声明文件
// src/jQuery.d.ts 文件里加上 declare var jQuery: (selector: string) => any; 声明文件必需以 .d.ts 为后缀
// 一般来说，ts 会解析项目中所有的 *.ts 文件，当然也包含以 .d.ts 结尾的文件。所以当我们将 jQuery.d.ts 放到项目中时，其他所有 *.ts 文件就都可以获得 jQuery 的类型定义了
// 假如仍然无法解析，那么可以检查下 tsconfig.json 中的 files、include 和 exclude 配置，确保其包含了 jQuery.d.ts 文件
// 这里只演示了全局变量这种模式的声明文件，假如是通过模块导入的方式使用第三方库的话，那么引入声明文件又是另一种方式了

/**
 * 3. 第三方文件声明
 */
// 使用 @types 统一管理第三方库的声明文件
// npm install @types/jquery --save-dev

/**
 * 4. 书写声明文件
 */

// 全局变量：通过 < script > 标签引入第三方库，注入全局变量
// npm 包：通过 import foo from 'foo' 导入，符合 ES6 模块规范
// UMD 库：既可以通过 < script > 标签引入，又可以通过 import 导入
// 直接扩展全局变量：通过 < script > 标签引入后，改变一个全局变量的结构
// 在 npm 包或 UMD 库中扩展全局变量：引用 npm 包或 UMD 库后，改变一个全局变量的结构
// 模块插件：通过 < script > 或 import 导入后，改变另一个模块的结构

/**
 * 5. 全局变量
 */

// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明（含有子属性的）全局对象
// interface 和 type 声明全局类型