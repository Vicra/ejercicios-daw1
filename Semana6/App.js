const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const { llave } = require('./llave')

const app = express();
app.use(bodyParser.json({ extended: true }));
const aplicanteController = require('./controllers/aplicanteController')

app.set('llave', llave)
const payload = {
    check: true
}

const token = jwt.sign(payload, app.get('llave'), {
    expiresIn: "12h"
})
console.log(token);

const validarToken = express.Router();
validarToken.use((req, res, next) => {
    const token = req.headers['access-token']
    if (token){
        jwt.verify(token, app.get('llave'), (err, decoded) => {
            if(err) {
                let response = {
                    message: 'Token no valido',
                    statusCode: 401,
                    success: false,
                    data: {}
                }
                return res.status(response.statusCode).send(response)
            }
            else {
                req.decoded = decoded;
                next();
            }
        })
    }
    else {
        let response = {
            message: 'Token no proveida',
            statusCode: 401,
            success: false,
            data: {}
        }
        res.status(response.statusCode).send(response)
    }
})

app.get('/aplicantes', validarToken, (req, res) => {
    let controllerResponse = aplicanteController.getAplicantes()
    res.status(controllerResponse.statusCode)
    res.send(controllerResponse)
})

app.get('/aplicante/:id', (req, res) => {
    let controllerResponse = aplicanteController.getAplicanteById(req.params.id)
    res.status(controllerResponse.statusCode)
    res.send(controllerResponse)
})

app.listen(3000);
