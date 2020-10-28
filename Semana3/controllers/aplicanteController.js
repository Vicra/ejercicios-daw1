class AplicanteController {
    /*getAplicantes(limit=100, offset=0){
   
    }
    */
    constructor() {
        this.aplicantes = [
            {
                id: 1,
                nombre: "Luis"
                , correo: "lufera25@hotamail.com"
                , edad: 31
                , borrado: false
            },
            {
                id: 2,
                nombre: "German"
                , correo: "german@hotamail.com"
                , edad: 63
                , borrado: false
            }
        ]
    }
    getAplicantes(req, res) {
        let aplicantesAretornar = [];
        this.aplicantes.forEach(element => {
            if (element.borrado == false) {
                aplicantesAretornar.push(element);
            }
        });

        res.send(aplicantesAretornar);
    }

}

module.exports = new AplicanteController();