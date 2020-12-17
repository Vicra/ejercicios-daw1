const validator = require('../sys/validator')
const bcrypt = require('bcrypt');
const e = require('express');
const numberOfRouds = 10;
const jwt = require('jsonwebtoken')

class UsuarioController {
    constructor() {
        this.usuarios = [
            {
                id: 1,
                nombre: 'messi',
                correo: 'messi@hotamail.com',
                salt: '$2b$10$DfVZ2Ocg95wpOYVUrDyro.',
                contrasenaEncriptada: '$2b$10$DfVZ2Ocg95wpOYVUrDyro.3jAnxmWtA64ibw9chD.GIY3qylmU.oe'
            },
            {
                id: 2,
                nombre: 'cristiano',
                correo: 'cr7@hotamail.com',
                salt: '$2b$10$uPFF4SXlvLbSi95BJb1EMe',
                contrasenaEncriptada: '$2b$10$uPFF4SXlvLbSi95BJb1EMemZOKT9Qu1EQNDpJrrIlqXhJ5QCk.ShC'
            }
        ]
    }

    async crearUsuario(usuario){
        let response = {
            statusCode: 200
            , message: 'Create'
            , data: []
            , success: true
        }

        let errorMessage = [];
        if(!usuario.correo){
            errorMessage.push('Parametro correo es requerido')
        }
        else if (!validator.isValidEmail(usuario.correo)){
            errorMessage.push('Parametro correo necesita ser un texto')
        }

        if(!usuario.contrasena){
            errorMessage.push('Parametro contraseña es requerido')
        }
        else if (!validator.isPassword(usuario.contrasena)){
            errorMessage.push('Parametro contraseña necesita ser un texto')
        }

        if(errorMessage.length){
            response.statusCode = 400;
            response.message = errorMessage
            response.message.unshift('Bad Request')
            response.success = false
            return response;
        }

        else{
            let salt = bcrypt.genSaltSync(numberOfRouds);
            let encryptedPassword = bcrypt.hashSync(usuario.contrasena, salt);

            this.usuarios.push({
                id: this.usuarios.length + 1,
                correo: usuario.correo,
                nombre: usuario.nombre,
                salt: salt, 
                contrasenaEncriptada: encryptedPassword
            });
            console.log(this.usuarios);
            response.statusCode = 201;
            return response;
        }
    }

    checkLogin(usuario){
        let response = {
            statusCode: 200
            , message: 'Create'
            , data: []
            , success: true
        }

        let errorMessage = [];
        if(!usuario.correo){
            errorMessage.push('Parametro correo es requerido')
        }
        else if (!validator.isValidEmail(usuario.correo)){
            errorMessage.push('Parametro correo necesita ser un texto')
        }

        if(!usuario.contrasena){
            errorMessage.push('Parametro contraseña es requerido')
        }
        else if (!validator.isPassword(usuario.contrasena)){
            errorMessage.push('Parametro contraseña necesita ser un texto')
        }

        if(errorMessage.length){
            response.statusCode = 400;
            response.message = errorMessage
            response.message.unshift('Bad Request')
            response.success = false
            return response;
        }
        else {
            const theUser = this.usuarios.find(user => user.correo == usuario.correo);
             
            if(theUser){
                let salt = theUser.salt;
                let encryptedPassword = bcrypt.hashSync(usuario.contrasena, salt);

                if(encryptedPassword == theUser.contrasenaEncriptada)
                {
                    const payload = {
                        check: true
                    }
            
                    const token = jwt.sign(payload, "alksdjkad8242784sdfhsf", {
                        expiresIn: "12h"
                    })
        
                    response.data = {
                        token: token
                    };
                    return response;
                }
                else {
                    response.statusCode = 401;
                    response.message = errorMessage
                    response.message.unshift('Credenciales incorrectas')
                    response.success = false
                    return response;
                }     
            }
            else {
                response.statusCode = 401;
                response.message = errorMessage
                response.message.unshift('Usuario no existe')
                response.success = false
                return response;
            } 
        }
    }

    getUsuarios() {
        let response = {
            statusCode: 200
            , message: 'OK'
            , data: []
            , success: true
        }

        try {
            let usuariosAretornar = [];
            this.usuarios.forEach(element => {
                if (element) {
                    usuariosAretornar.push({
                        id: element.id,
                        nombre: element.nombre,
                        correo: element.correo
                    });
                }
            });
            response.data = usuariosAretornar;
            return response;
        }
        catch(e){
            response.statusCode = 500
            response.message = `Internal Server Error | ${e}`
            response.success = false
            return response;
        }
    }
}


module.exports = new UsuarioController();