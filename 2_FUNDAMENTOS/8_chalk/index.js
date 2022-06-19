const chalk = require("chalk")

const nota = 6

if (nota >= 7){
    console.log(chalk.green.bold.italic('Parabéns! Você está aprovado!'))
} else {
    console.log(chalk.green.bold.italic('Você precisa fazer a prova de recuperação.'))
}