## TypeScript Note

### 中文官网 [传送门](https://typescript.bootcss.com/)
### gulp配置 [传送门](https://typescript.bootcss.com/tutorials/gulp.html)
### 民间教程 [传送门](https://ts.xcatliu.com/)

------

### 问题：
#### 1. Cannot redeclare block-scoped variable xxxx
> 在默认状态下，typescript 将 DOM typings 作为全局的运行环境，所以当我们声明 xxx时， 与 DOM 中的全局 window 对象下的 xxx 属性出现了重名。因此，报了 error TS2451: Cannot redeclare block-scoped variable 'xxx'. 错误。

我们在脚本的最后一行，添加了 export {};。将文件声明为 module， 变量 xxx 被限制在了 module 的作用域下，因此不会与全局的 xxx 产生冲突。

