
const mat = require ('./mat.js')

console.log('ingrar numero');

var b = process.openStdin();
b.addListener('data', (data)=> {

    console.log(mat.dividir(data.toString()));

    process.exit();
});



