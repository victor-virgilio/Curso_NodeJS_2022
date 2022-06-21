const path = require('path')


// Path Absoluto
console.log(path.resolve('teste.txt'))

// Formar Path
const midFolder = 'Relatorios'
const fileName = 'victor.txt'

const finalPath = path.join("/", 'arquivos', midFolder, fileName)

console.log(finalPath)