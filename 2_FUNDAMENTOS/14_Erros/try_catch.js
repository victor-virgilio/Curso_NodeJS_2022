// try catch é uma forma de tratar erros.
// os erros gerados não fazem com que o progrma pare de rodar

const x = "10"

try {
    x = 2 //tentando alterar o valor de uma constante
} catch(err) {
    console.log(`O seguinte erro foi gerado: ${err}`)
}

console.log(x)