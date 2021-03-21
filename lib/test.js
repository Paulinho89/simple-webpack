const { getAst, getDependencis, transform } = require('./parser');
const path = require('path');

// console.log(getAst(path.join(__dirname, '../src/index.js')));

const ast = getAst(path.join(__dirname, '../src/index.js'));

// console.log(getDependencis(ast));

console.log(transform(ast));