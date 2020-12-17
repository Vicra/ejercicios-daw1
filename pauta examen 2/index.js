const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json({ extended: true }));
const jwt = require('jsonwebtoken')

const usuarioController = require('./controllers/usuarioController');

app.post('/register', async (req,res)=>{
    let response = await usuarioController.crearUsuario(req.body);
    res.status(response.statusCode).send(response);
})

app.post('/login', async (req,res)=>{
    let response = await usuarioController.checkLogin(req.body);
    res.status(response.statusCode).send(response);
})

const validarToken = express.Router();
validarToken.use((req, res, next) => {
    const token = req.headers['access-token']
    if (token){
        jwt.verify(token, "alksdjkad8242784sdfhsf", (err, decoded) => {
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

app.get('/users', validarToken, (req, res) => { 
    res.send(usuarioController.getUsuarios()) 
})

app.listen(3000);