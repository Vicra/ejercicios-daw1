function suma(a, b){
    return a + b
}

console.log('suma',suma(1,2))

// ejemplo 1 funcion flecha
// let suma2 = (a,b) => {
//     return a + b
// }
// console.log(suma2(3,4))

// ejemplo 2 funcion flecha - funcion anonima
async () => {
    console.log('funciona anonima')
}
let paises = ['Honduras', 'El Salvador', 'Cr']
paises.push('USA')

// map es iterar de 0 a length
paises.map(pais => {
    console.log(pais);
})

// la funcionalidad de las funciones flecha
// linea 27 y 28 son exactamente lo mismo
paises.map(pais => { return console.log(pais.length) } )
paises.map(pais => console.log(pais.length))

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }