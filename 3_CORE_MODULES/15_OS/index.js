const os = require('os')

console.log(os.cpus())  // exibe os processadores do servidor que estiver rodando o progrmama

console.log(os.freemem()) // exibe a memória livre do servidor

console.log(os.homedir()) // exibe o diretório base do OS

console.log(os.type()) // sistema operacional do servidor