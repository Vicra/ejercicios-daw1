console.log('inicio')
setTimeout(() => {
    // instrucciones que se van a ejecutar
    // potencialmente se tardan mucho tiempo
    console.log('dentro function')
}, 2000);
console.log('final')