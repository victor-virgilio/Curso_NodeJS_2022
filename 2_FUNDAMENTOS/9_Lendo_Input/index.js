const { stdout } = require('process');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual é sua cor favorita? ", (variavel1) => {
    console.log(` A minha cor favorita é ${variavel1}`)
    readline.close()
})

