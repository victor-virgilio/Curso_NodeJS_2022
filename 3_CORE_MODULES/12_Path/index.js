const path = require('path')

const customPath = 'relatórios/dinâmicos/setembro22/arquivo.txt'

console.log(path.dirname(customPath))  //traz todo o path do arquivo selecionado
console.log(path.basename(customPath)) //traz o nome do arquivo selecionado
console.log(path.extname(customPath))  //traz o nome da extensão do arquivo selecionado
