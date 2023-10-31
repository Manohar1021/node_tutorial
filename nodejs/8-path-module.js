const path=require('path')

// console.log(path)

const filepath=path.join('content','subfolder','test.txt')//joins the specified path into one
console.log(filepath)

const base=path.basename(filepath)//returns the last part of the path

console.log(base)