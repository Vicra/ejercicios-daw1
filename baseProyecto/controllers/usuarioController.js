const bcrypt = require('bcrypt')
const numberOfRouds = 10;

const usuarioService = require('../services/usuarioService')
const validator = require('../sys/validator')

class UsuarioController {
    async getUsuarios(plimit, poffset) {
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
            let usuarios = await usuarioService.getUsuarios(offset,limit); // de asinc -> sinc
            response.data = usuarios
            return response;
        }
    }

    // async getClienteById(req, res) {
    //     // req.params.id
    //     let response = {
    //         statusCode : 200
    //         , message: 'OK'
    //         , data: {}
    //         , success: true
    //     }
    //     let cliente = await clienteService.getclienteById(req.params.id); // de asinc -> sinc
    //     response.data = cliente[0];
    //     res.status(response.statusCode).send(response);
    // }

    async createUsuario(req, res){
        let response = {
            statusCode : 200
            , message: 'OK'
            , data: {}
            , success: true
        }

       
        
        // validar parametros
        let errorMessage = [];
        if(!req.body.email){
            errorMessage.push('Parametro email es requerido')
        }
        else if (!validator.isValidEmail(req.body.email)){
            errorMessage.push('Parametro email necesita ser un texto')
        }

        if(!req.body.password){
            errorMessage.push('Parametro password es requerido')
        }
        else if (!validator.isPassword(req.body.password)){
            errorMessage.push('Parametro password necesita ser un texto')
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
                let salt = bcrypt.genSaltSync(numberOfRouds);
                let encryptedPassword = bcrypt.hashSync(req.body.password, salt);

            await usuarioService.createUsuario(req.body,encryptedPassword,salt);
            response.statusCode = 201; // created
            res.status(response.statusCode).send(response);
        }

    }
    
}


module.exports = new UsuarioController();