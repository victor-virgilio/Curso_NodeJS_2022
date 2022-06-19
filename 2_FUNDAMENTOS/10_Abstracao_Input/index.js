const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            name: 'p1',
            message: "Informar o primeiro valor: "
        }, 
        {
            name: 'p2', 
            message: "Informar o segundo valor: "
        },
    ])
    .then((answers) => {
        console.log(answers)
        const media = ((parseInt(answers.p1) + parseInt(answers.p2)) / 2)
        console.log(`A média dos valores digitados é ${media}`)
    })
    .catch((err) => console.log(err))