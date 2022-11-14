// index.js
// ini akan mengimport module bernama 'os'
const os = require('os')
const luasSegitiga = require('./segitiga.js')

console.log("Free Memory: ", os.freemem())
console.log("Luas Segitiga dengan alas 3 dan tinggi 4: ", luasSegitiga(3,4))
console.log("Hello World")