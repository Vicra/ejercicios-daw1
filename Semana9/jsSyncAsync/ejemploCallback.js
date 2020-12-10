const hacerAlgo = function(callback) {
    // haciendo/ejecutando instrucciones

    const result = 1 + 1
    callback(result)
}

/*
const hacerAlgo = callback => {
    const result = 1 + 1
    callback(result)
}
*/

// forma sincrona equivalente
// let valor = hacerAlgo();

hacerAlgo(result => {
    console.log(result)

    hacerAlgo2(result2 => {
        console.log(result + result2)

        hacerAlgo3(result3 => {
            console.log(result3 + result2)
        })
    })
    // nuevo codigo
})
