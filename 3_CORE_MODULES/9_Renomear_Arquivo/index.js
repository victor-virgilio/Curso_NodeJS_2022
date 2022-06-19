const fs = require('fs')

const arqAntigo = "arquivo.txt"
const arqNovo   = "novoArquivo.txt" 

fs.rename(arqAntigo, arqNovo, function(err){
    if (err){
        console.log(err)
        return //comando return faz parar de executar o programa
    }

    console.log(`Arquivo ${arqAntigo} renomeado para ${arqNovo} com sucesso!`)
})