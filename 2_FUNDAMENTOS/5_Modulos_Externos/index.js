const minimist = require("minimist")

const args = minimist(process.argv.slice(2))

var sexo = 'Bla'

const nome  = args['nome']
const idade = args['idade']
      sexo  = args['sexo']

console.log(nome)
console.log(idade)
console.log(sexo)

if (sexo.charAt(0) == 'm'){
    artigo = 'e'
} else {
    artigo = 'a'
}

console.log(`O nome del${artigo} é ${nome}. El${artigo} tem ${idade} anos de idade, e é do sexo ${sexo}!`)