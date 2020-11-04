const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json({ extended: true }));
const aplicanteController = require('./controllers/aplicanteController')

app.get('/aplicante', aplicanteController.getAplicantes)
app.get('/aplicante/:id', aplicanteController.getAplicanteById) // req.params.id

app.listen(3000);
