const getEstrellasDelFutbol = function(){
    return new Promise((resolve, reject) => {
        let jugadores = [
            {
                'nombre': 'crisanto',
                'correo': 'crisanto@unitec.edu',
                'fechaContratoOlimpia': '12/07/2020'
            },
            {
                'nombre': 'leomessi',
                'correo': 'leomessi@unitec.edu',
                'fechaContratoOlimpia': '12/07/2020'
            },
            {
                'nombre': 'rubilio',
                'correo': 'rubilio@unitec.edu',
                'fechaContratoOlimpia': '12/07/2020'
            }
        ]

        // simular leer de base datos
        setTimeout(() => {
            resolve(jugadores)    
        }, 2000);
    })
}


setTimeout(() => {
    const valorMasiso = async () => {
        let estrellas = await getEstrellasDelFutbol()
        console.log(estrellas)
    }
    valorMasiso();
}, 3000);

