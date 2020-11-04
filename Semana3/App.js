const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json({ extended: true }));
const aplicanteController = require('./controllers/aplicanteController')

app.get('/', (req, res) => { 
    res.send(aplicanteController.getAplicantes()) 
})

app.get('/getWithFilter', function (req, res) {
    res.send(aplicantes.filter(aplicante=> aplicante.borrado==false));
})

// params NOTA: solo usarlo cuando es solamente 1 parametro
app.get('/aplicante/:id', function (req, res) {
    // convertir de string a entero
    let applicantId = Number(req.params.id);

    // inicializar objecto en vacio
    let aplicanteAdevolver = {};
    aplicantes.map((aplicante)=>{
        if(aplicante.id === applicantId){
            aplicanteAdevolver = aplicante
        }
    })
    res.send(aplicanteAdevolver)
})

// query params NOTA: usarlo para cuando sean mas de un parametro
app.get('/aplicante', function (req, res) {
    
    res.send(aplicanteController.getAplicanteById(req.query.id))
})

app.post('/',(req,res)=>{
    aplicanteController.crearAplicante(req.body);
    res.sendStatus(200);

})

app.put('/',(req,res)=>{
   aplicanteController.modificarAplicante(req.body)
    res.sendStatus(200);
})

app.delete('/:id',(req,res)=>{
    aplicanteController.eliminarAplicante(req.params.id)
    res.sendStatus(200);
})

app.listen(3000);
