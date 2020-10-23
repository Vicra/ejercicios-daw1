const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json({ extended: true }));

let aplicantes = [
    {
        id: 1,
        nombre:"Luis"
        ,correo:"lufera25@hotamail.com"
        ,edad:31
    },
    {
        id: 2,
        nombre:"German"
        ,correo:"german@hotamail.com"
        ,edad:63

    }
]
app.get('/', function (req, res) {
    res.send(aplicantes);
})

app.post('/',(req,res)=>{

  
    aplicantes.push(req.body);
    console.log(aplicantes);

    res.sendStatus(200);

})
app.put('/',(req,res)=>{

  
    aplicantes.forEach(element => {

        if (element.id == req.body.id ){
            element.nombre = req.body.nombre ;
            element.correo = req.body.correo ;
            element.edad = req.body.edad ;
        }
     
        
    });
    console.log(aplicantes);
    res.sendStatus(200);

})
app.listen(3000);
