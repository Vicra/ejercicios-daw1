//map, push, splice, foreach, for invertido


// iterar arreglos
let materias = ['Progra Web1', 'Progra Web2', 'Des App Web1']
// materias.map(function(materia){
//     console.log(materia)
// })

// materias.forEach(materia => {
//     console.log(materia)
// })

// for (let i = 0; i < materias.length; i++) {
//     const materia = materias[i]
//     console.log(materia)
// }


// agregar elementos
materias.push('Teoria de Base datos')
// console.log(materias)

// eliminar elementos en posicion n (cualquier numero entre 0 y length-1)
materias.splice(0, 1) // borrar un elemento empezando desde primer parametro
// console.log(materias)

let numeros = [1,2,4,5,6,7,8,10,11,12,13,14] //.length = 7
//             0 1 2 3 4 5 6 7  8   9 10  11
// borrar todos los pares del arreglo
// for (let i = 0; i < numeros.length; i++) {
//     const numero = numeros[i];
//     if (numero%2 == 0){ // detectar si es par
//         numeros.splice(i,1);
//     }
// }

for (let i = numeros.length - 1; i>=0 ; i--) {
    if(numeros[i]%2 === 0) {
        numeros.splice(i, 1);
    }
}

// '1' == 1 // true
// '1' == 1 // false
console.log(numeros);