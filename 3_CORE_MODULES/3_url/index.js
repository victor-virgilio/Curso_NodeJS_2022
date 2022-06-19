const url = require('url')

const address = 'http://www.meusite.com.br/sections/catalog?produtos=cadeira'
const parsedUrl = new url.URL(address)

console.log(parsedUrl.host) //Imprime o site/host
console.log(parsedUrl.pathname) // mostra o caminho para a pasta/página que foi executada
console.log(parsedUrl.search) // mostra os dados da busca
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get('produtos'))