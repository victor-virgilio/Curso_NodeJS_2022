// throw é uma forma de tratar erros,  
// utilizar o throw implica na finalização do proograma.


const x = 10

//checar se x é datatype integer
if (!Number.isInteger(x)){
    throw new Error('O valor de x não é um inteiro')  //throw interrompe a execução do programa caso seja chamado
}

//Continuação do código
console.log('Continuando o código')