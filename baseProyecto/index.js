const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json({ extended: true }));
const clienteController = require('./controllers/clienteController');
const usuarioController = require('./controllers/usuarioController');

app.get('/clientes', async (req, res) => {
    let response = {
        statusCode : 200
        , message: 'OK'
        , data: {}
        , success: true
    }
    let controllerResponse = await clienteController.getClientes(req.query.limit, req.query.offset)

    if(controllerResponse.success){
        response.data = controllerResponse.data;
        res.status(response.statusCode).send(response);
    }
    else {
        // yo se que 400 porque solo se levanta false cuando un parameetro esta malo
        response.success = false;
        response.message = controllerResponse.message;
        response.statusCode = 400;
        res.status(response.statusCode).send(response);
    }
})

app.get('/cliente/:id', clienteController.getClienteById) // req.params.id
app.post('/cliente', clienteController.createCliente)


app.get('/usuario', async (req, res) => {
    let response = {
        statusCode : 200
        , message: 'OK'
        , data: {}
        , success: true
    }
    let controllerResponse = await usuarioController.getUsuarios(req.query.limit, req.query.offset)

    if(controllerResponse.success){
        response.data = controllerResponse.data;
        res.status(response.statusCode).send(response);
    }
    else {
        // yo se que 400 porque solo se levanta false cuando un parameetro esta malo
        response.success = false;
        response.message = controllerResponse.message;
        response.statusCode = 400;
        res.status(response.statusCode).send(response);
    }
})
app.post('/usuario',usuarioController.createUsuario )


app.listen(3000);
