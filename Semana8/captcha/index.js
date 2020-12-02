var express = require('express');
var path = require('path');
var hbs = require('hbs');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get("/register", function (req, res) {
    (async () => {
        let siteKeyDev = '6LdPovUZAAAAAOe50s_XpFK1_OiLWFRicOWe_vce';
        let siteKeyProd = '6LcDr_UZAAAAAHvFjUeOV9UuO_TMPw_cfNcLW_vl';

        let host = req.get('host'); // localhost || baleadaConTodo.com
        let siteKey = siteKeyProd
        if(host.includes('localhost')){
            siteKey = siteKeyDev
        }
        
        res.render("register", {
            siteKey: siteKey
        });
    })();
});

app.post("/register", function (req, res) {
    console.log(req.body);
    (async () => {
        
    })();
});

var port = 3030;
app.set('port', port);
var server = http.createServer(app);
server.listen(port);