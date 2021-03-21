/*
 * @Author: caoyp
 * @Date: 2021-03-21 14:55:27
 * @Last Modified by: caoyp
 * @Last Modified time: 2021-03-21 16:36:52
 * @Description: 解析器
 * @Description: 使用babylon将src中的es6转换成Ast树
 * @Description: 使用traverse收集依赖 [ './greeting.js' ]
 * @Description: 使用transformFromAst 将Ast转换为es5
 */

const fs = require('fs');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const { transformFromAst } = require('babel-core');

module.exports = {
    getAST: (path) => {
        const content = fs.readFileSync(path, 'utf-8')
    
        return babylon.parse(content, {
            sourceType: 'module',
        });
    },
    getDependencis: (ast) => {
        const dependencies = []
        traverse(ast, {
          ImportDeclaration: ({ node }) => {
            dependencies.push(node.source.value);
          }
        });
        return dependencies;
    },
    transform: (ast) => {
        const { code } = transformFromAst(ast, null, {
            presets: ['env']
        });
      
        return code;
    }
};