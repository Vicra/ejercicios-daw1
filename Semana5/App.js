const express = require('express');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(basicAuth({ 
    users: { 'admin' : 'supersecret'} 
}));
const aplicanteController = require('./controllers/aplicanteController')

app.get('/aplicantes', (req, res) => {
    let controllerResponse = aplicanteController.getAplicantes()
    res.status(controllerResponse.statusCode)
    res.send(controllerResponse)
})

app.listen(3000);
