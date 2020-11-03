const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json({ extended: true }));
const aplicanteController = require('./controllers/aplicanteController')

app.get('/', aplicanteController.getAplicantes)

app.listen(3000);
