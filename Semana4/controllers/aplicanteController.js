const aplicateService = require('../services/aplicanteService')

class AplicanteController {
    async getAplicantes(req, res) {
        let response = {
            statusCode : 200
            , message: 'OK'
            , data: {}
            , success: true
        }
        let aplicantes = await aplicateService.getAplicantes();
        response.data = aplicantes;
        res.status(response.statusCode).send(response);
    }
}


module.exports = new AplicanteController();