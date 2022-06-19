const fs = require('fs')

fs.stat('arquivo.txt', (err, stats) => {
    if(err){
        console.log(err)
        return
    }

    console.log(stats.isFile())  //retorna booleano se é um arquivo
    console.log(stats.isDirectory())  //Retorna booleano se é um diretório
    console.log(stats.isSymbolicLink()) //Retorna boolean se é um link simbólico (Linux)
    console.log(stats.ctime) // Retrona string da data de criação do arquivo
    console.log(stats.size) // Retorna o tamanho do arquivo
})