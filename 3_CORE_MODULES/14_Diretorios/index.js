const fs = require('fs')

if (!fs.existsSync('./pastaTeste')){  //  "./" Significa pasta local
    console.log('Pasta inexistente.')
    fs.mkdirSync('./pastaTeste')
} else {     // if (fs.existsSync('./minhapasta'))
    console.log('Pasta encontrada!')
}