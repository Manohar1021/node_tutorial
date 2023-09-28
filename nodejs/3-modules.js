// Modules
// modules are used to encapsulate code 
// every file is a module


const names=require('./4-names')       //here calledby file name with ./ followed by file name
const sayHi=require('./5-utils')       //here calledby file name with ./ followed by file name
sayHi('man')
sayHi(names.a)
sayHi(names.b)

