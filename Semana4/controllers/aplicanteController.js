const aplicateService = require('../services/aplicanteService')

class AplicanteController {
    async getAplicantes(req, res) {
        let response = {
            statusCode : 200
            , message: 'OK'
            , data: {}
            , success: true
        }
        let aplicantes = await aplicateService.getAplicantes(); // de asinc -> sinc
        response.data = aplicantes;
        res.status(response.statusCode).send(response);
    }

    async getAplicanteById(req, res) {
        // req.params.id
        let response = {
            statusCode : 200
            , message: 'OK'
            , data: {}
            , success: true
        }
        let aplicante = await aplicateService.getAplicanteById(req.params.id); // de asinc -> sinc
        response.data = aplicante[0];
        res.status(response.statusCode).send(response);
    }
    
}


module.exports = new AplicanteController();