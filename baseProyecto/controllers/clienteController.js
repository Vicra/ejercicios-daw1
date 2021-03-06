const clienteService = require('../services/clienteService')
const validator = require('../sys/validator')

class ClienteController {
    async getClientes(plimit, poffset) {
        let response = {
            message: [],
            success: true,
            data: {}
        }

        let offset = 0
        let limit = 100

        if(poffset){
            if (Number.isInteger(poffset)){
                offset = poffset
            }
            else{
                // poffset = potaxio
                response.message.push('Parametro offset tiene que ser entero')
                response.success = false
            }
        }

        if(plimit){
            if (Number.isInteger(plimit)){
                limit = plimit
            }
            else{
                // plimit = potaxio
                response.message.push('Parametro limit tiene que ser entero')
                response.success = false
            }
        }

        if(response.message.length){
            return response;
        }
        else {
            let clientes = await clienteService.getClientes(offset,limit); // de asinc -> sinc
            response.data = clientes
            return response;
        }
    }

    async getClienteById(req, res) {
        // req.params.id
        let response = {
            statusCode : 200
            , message: 'OK'
            , data: {}
            , success: true
        }
        let cliente = await clienteService.getclienteById(req.params.id); // de asinc -> sinc
        response.data = cliente[0];
        res.status(response.statusCode).send(response);
    }

    async createCliente(req, res){
        let response = {
            statusCode : 200
            , message: 'OK'
            , data: {}
            , success: true
        }

        /*
            parametro cuerpo
            {
                nombre: 'victor',
                edad: 25,
                email: 'victor.ramirez@unitec.edu'
            }
        */
        
        // validar parametros
        let errorMessage = [];
        if(!req.body.nombre){
            errorMessage.push('Parametro nombre es requerido')
        }
        else if (!validator.isTexto(req.body.nombre)){
            errorMessage.push('Parametro nombre necesita ser un texto')
        }

        if(!req.body.edad){
            errorMessage.push('Parametro edad es requerido')
        }
        else if (!validator.isNumber(req.body.edad)){
            errorMessage.push('Parametro edad necesita ser un entero')
        }

        if(!req.body.email){
            errorMessage.push('Parametro email es requerido')
        }
        else if (!validator.isValidEmail(req.body.email)){
            errorMessage.push('Parametro email necesita tener un formato correcto')
        }

        if(errorMessage.length){
            // 400 bad request
            response.statusCode = 400;
            response.message = errorMessage
            response.message.unshift('Bad Request')
            response.success = false
            res.status(response.statusCode).send(response);
        }

        else{
            await clienteService.createCliente(req.body);
            response.statusCode = 201; // created
            res.status(response.statusCode).send(response);
        }
    }
    
}


module.exports = new ClienteController();