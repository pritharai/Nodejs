// 1. import readline
const readline = require('readline')

// 2. configure interface to connect with terminal/command line
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Reading values
interface.question("enter first number", (num1)=> {
    interface.question("enter second number", (num2) => {
        // num1, num2
        const sum = Number(num1) + Number(num2);
        console.log(sum);
    })
})