// Módulos externos
import chalk    from 'chalk' 
import inquirer from 'inquirer'

// Módulos internos
import fs from 'fs'
import { Console } from 'console'
import { waitForDebugger } from 'inspector'


// console.log(chalk.bgYellow.green('  Hello!  '))

operation()

function operation(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: chalk.bgGreen.blue(' Escolha uma operação: '),
            choices: [
                'Criar Conta',
                'Consultar Saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ]
        },
    ]).then((answer) => {
        const action = answer['action']
        
        if (action === 'Criar Conta'){
            CriarConta()
        } 
        else
            if (action === 'Consultar Saldo'){
                MostrarSaldo()
            } 
            else
                if (action === 'Depositar'){
                    Depositar()
                }
                else
                    if (action === 'Sacar'){
                        Sacar()
                    }
                    else
                        if (action === 'Sair'){
                            console.log('')
                            console.log(chalk.bgBlue.red.bold('Obrigado por usar nosso sistema! Até mais!!'))
                            process.exit; //Esse comando para a exucução do sistema
                        }
                        else
                            console.log(chalk.bgRed.bold('Houve algum problema na execução do comando.'))
                            return
    }).catch(err => console.log(err))
}


function CriarConta(){
    console.log(chalk.bgBlue.green(' Bem vindo ao cadastro de novas contas! '))
    console.log(chalk.red(' A seguir informe seus dados: '))

    PrepararConta()
}

function PrepararConta(){
    inquirer.prompt([
        {
            name: "NomeConta",
            message:"Digite o nome da conta:",
        }
    ]).then(answer => {
        const NomeConta = answer['NomeConta']    

        if (!fs.existsSync('accounts')){   // Verifica se existe um diretório chamado accounts
            fs.mkdirSync('accounts')       // Cria o diret´roio accounts caso ele ainda não exista
        }

        if (fs.existsSync(`accounts/${NomeConta}.json`)){
            console.log(chalk.bgRed.bold(' Já existe uma conta com esse nome, favor escolher um outro nome.'))
            PrepararConta()
            return
        }

        if (NomeConta == ''){
            console.log(chalk.bgRed.bold(' O nome da conta não pode estar em branco, favor digitar um nome.'))
            PrepararConta()
            return
        }

        fs.writeFileSync(
            `accounts/${NomeConta}.json`, 
            '{"saldo": 0}', 
            function(err){
                console.log(err)
            }
        )

        console.log(chalk.bgYellow(`Parabéns ${NomeConta}! A sua conta foi criada com sucesso.`))

        operation()
    }).catch(err => console.log(err))
}



// Fazer depósito em uma conta
function Depositar(){
    inquirer.prompt([
        {
            name: "NomeConta",
            message: "Digite o nome da conta que receberá o depósito:"
        }
    ])
    .then((answer) => {
        const NomeConta = answer['NomeConta']
        
        if (!ChecarConta(NomeConta)){
            return Depositar()
        }

        inquirer.prompt([
            {
                name: "valor",
                message: "Digite o valor a ser depositado: ",
            },
        ]).then((answer) => {
            const valor = answer['valor']
            DepositarValor(NomeConta,valor)

            operation()
        }).catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}


//Verificar se a conta existe
function ChecarConta(NomeConta){
    if (!fs.existsSync(`accounts/${NomeConta}.json`)){
        console.log(chalk.bgRed.bold(' Essa conta não existe. '))
        return false
    }
    return true    
}


//Executar depósito
function DepositarValor(NomeConta,valor){
    const conta = PegarConta(NomeConta)

    if (!valor){
        console.log(chalk.bgRed.bold('É necessário digitar um valor de depósito'))
        return Depositar()
    }

    conta.saldo = parseFloat(valor) + parseFloat(conta.saldo)

    fs.writeFileSync(
        `accounts/${NomeConta}.json`,
        JSON.stringify(conta),
        function (err){
            console.log(err)
        },    
    )

    console.log(chalk.bgGreen.bold(`Foi depositado o valor de R$${valor} na sua conta`),)
}


//Pegar a conta
function PegarConta(NomeConta){
    const JSONConta = fs.readFileSync(`accounts/${NomeConta}.json`,{
        encoding: 'utf8',
        flag: 'r'
    })

    return JSON.parse(JSONConta)
}


//Mostrar o saldo da conta
function MostrarSaldo(){
    inquirer.prompt([
        {
            name: "NomeConta",
            message: "Favor informar o nome da conta."
        } 
    ])
    .then((answer) => {
        const NomeConta = answer["NomeConta"]

        if (!ChecarConta(NomeConta)){
            return MostrarSaldo()
        }

        const SaldoConta = PegarConta(NomeConta)
        
        console.log(chalk.bgGreen.bold(` O valor em conta é de R$${SaldoConta.saldo}`))
        console.log('')

        operation()
    }).catch((err) => console.log(err))
}



//Sacar da conta
function Sacar(){
    inquirer.prompt([
        {
            name: "NomeConta",
            message: "Favor informar o nome da conta."
        } 
    ])
    .then((answer) => {
        const NomeConta = answer["NomeConta"]

        if (!ChecarConta(NomeConta)){
            return Sacar()
        }

        inquirer.prompt([
            {
                name: 'valor',
                message: 'Digite o valor a ser sacado: ',
            },
        ]).then((answer) => {
            const valor = answer['valor']

            if (!valor){
                console.log(chalk.bgRed.bold(' É necessário digitar o valor que será sacado. '))
                return Sacar()
            }

            SacarValor(NomeConta,valor)
        }).catch(err => console.log(err))
    }).catch((err) => console.log(err))  
}


// Executar saque na conta
function SacarValor(NomeConta,valor){
    const conta = PegarConta(NomeConta)

    if (parseFloat(conta.saldo) < parseFloat(valor)){
        console.log(chalk.bgRed.black.bold('Saldo indisponível na conta.'))
        return Sacar()
    }
    
    conta.saldo = parseFloat(conta.saldo) - parseFloat(valor)

    fs.writeFileSync(
        `accounts/${NomeConta}.json`,
        JSON.stringify(conta),
        function (err){
            console.log(err)
        },    
    )

    console.log(chalk.bgGreen.bold(`Foi sacado o valor de R$${valor} da sua conta`),)
    operation()
}