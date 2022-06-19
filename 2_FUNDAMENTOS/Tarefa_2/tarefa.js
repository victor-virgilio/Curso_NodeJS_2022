const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer
    .prompt([
        {
            name: 'InpNome',
            message: "Por favor, informe o nome: "
        }, 
        {
            name: 'InpIdade', 
            message: "Por favor, informe a idade: "
        },
    ])
    .then((answers) => {
        console.log(chalk.bgYellow.black.bold.italic(`  O nome digitado foi ${answers.InpNome} e sua idade é ${answers.InpIdade}  `))
        chalk = 'Bla'  //Gera um erro proposital tentando alterar o valor da constante chalk
    })
    .catch((err) => {
        console.log(chalk.bgRed.white.bold('  ATENÇÃO! Um erro foi gerado.  '))
        // console.log(err) 
    })
