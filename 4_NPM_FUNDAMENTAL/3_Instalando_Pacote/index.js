const _ = require('lodash')


const a = [ 1, 2, 3, 4, 5, 6, 5000 ]
const b = [ 1, 3, 5, 6, 7, 8 ]

const diff = _.difference(a, b)

console.log(diff)