
const path = require('path')

console.log(path.sep) // sep viene de separator

const filePath = path.join('/content','subfolder','text.txt')
console.log(filePath) 

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)

console.log(__dirname);

