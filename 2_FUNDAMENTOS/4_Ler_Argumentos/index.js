//

console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split("=")[1]
console.log(nome)

const idade = args[1].split("=")[1]
console.log(idade)

const sexo = args[2].split("=")[1]
console.log(sexo)

console.log('O nome é ' + nome + ' e ele tem ' + idade + ' anos de idade!')