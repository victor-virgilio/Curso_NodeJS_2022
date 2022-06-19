const fs = require('fs')

console.log('Início')

fs.writeFileSync('arquivo.txt', 'Arquivo de texto criado pelo .')

console.log('Fim!')