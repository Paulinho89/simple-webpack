# simple-webpack
一个简单的手写webpack

# 实现

可以将 ES6 语法转换成 ES5 的语法
- 通过 babylon 生成AST
- 通过 babel-core 将AST重新生成源码

分析打包模块之间的依赖关系

- 通过 babel-traverse 的 ImportDeclaration 方法获取依赖属性

生成的 JS 文件可以在浏览器中运行


完整的流程：源码转化成AST -> AST 转化成目标代码 -> 遍历依赖 -> 字符串拼接 -> 写入文件
