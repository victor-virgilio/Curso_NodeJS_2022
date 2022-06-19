//mais de um valor

const x = 10
const y = 'String genérica'
const z = [1, 2, 'Bla', 4.865, true]

console.log(x, y, z)


//contagem de impressões
console.count(`O valor de x é ${x}, o valor de y é ${y} e o valor de z é ${z}`)
console.count(`O valor de x é ${x}, o valor de y é ${y} e o valor de z é ${z}`)
console.count(`O valor de x é ${x}, o valor de y é ${y} e o valor de z é ${z}`)
console.count(`O valor de x é ${x}, o valor de y é ${y} e o valor de z é ${z}`)

//variavel entre string
console.count('O valor de x é %s e ok!', x) //%s = x
console.count('O valor de y é %s e ok!', y) //%s = y
console.count('O valor de z é %s e ok!', z) //%s = z

//limpar o console    
setTimeout(() => {   // Isso aqui funciona como um tTimer 
   console.clear()   // do delphi. Console.clear() é o comando
}, 3000);            // que vai ser executado após 3 segundos (3000 milissegundos)

