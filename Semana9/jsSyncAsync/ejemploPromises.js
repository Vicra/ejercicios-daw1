new Promise (function (resolve, reject){
    try{
        setTimeout(() => {
            resolve(1)
        }, 1000);
    }
    catch(e){
        reject(e)
    }
}).then(function (result){
    console.log(result);
    return result * 2;
}).catch(function(error){
    console.log(error)
})
.then(function(result){
    console.log('2', result)
    return result * 3;
})
.then(function(result){
    console.log('6',result)
})