// built in functions 
// os module


const os=require('os')

// gives the user information
const user=os.userInfo()
console.log(user)


const currentos={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem()
}

console.log(currentos)


