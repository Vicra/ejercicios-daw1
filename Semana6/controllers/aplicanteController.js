const { aplicantes } = require("../../Semana5/controllers/aplicanteController")

class AplicanteController {
    constructor() {
        this.aplicantes = [
            {
                id: 1
                , nombre: "Luis"
                , correo: "lufera25@hotamail.com"
                , edad: 31
                , borrado: false
            },
            {
                id: 2
                , nombre: "German"
                , correo: "german@hotamail.com"
                , edad: 63
                , borrado: false
            }
        ]
    }

    getAplicanteById(id){
        let response = {
            statusCode: 200
            , message: 'OK'
            , data: []
            , success: true
        }
        let aplicanteAdevolver = {}
        this.aplicantes.map(aplicante => {
            if(aplicante.id == id){
                aplicanteAdevolver = aplicante
            }
        })
        response.data = aplicanteAdevolver;
        return response;
    }

    getAplicantes() {
        let response = {
            statusCode: 200
            , message: 'OK'
            , data: []
            , success: true
        }

        try {
            let aplicantesAretornar = [];
            this.aplicantes.forEach(element => {
                if (element.borrado == false) {
                    aplicantesAretornar.push(element);
                }
            });
            // throw('Database Error');
            response.data = aplicantesAretornar;
            return response;
        }
        catch(e){
            // internal server error
            response.statusCode = 500
            response.message = `Internal Server Error | ${e}`
            response.success = false
            return response;
        }
    }
}


module.exports = new AplicanteController();