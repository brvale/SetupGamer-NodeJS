var string = 'oi eu sou goku'
var emBase64 = new Buffer.from(string).toString('base64')
console.log(emBase64) // Saída: RGV2UGxlbm8=

var deBase64 = new Buffer.from(emBase64, 'base64').toString('ascii')
console.log(deBase64) // Saída: DevPleno