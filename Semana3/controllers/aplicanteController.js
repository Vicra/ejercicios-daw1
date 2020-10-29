class AplicanteController {
    constructor() {
        this.aplicantes = [
            {
                id: 1
                , nombre: "Luis"
                , correo: "lufera25@hotamail.com"
                , edad: 31
                , borrado: false
            },
            {
                id: 2
                , nombre: "German"
                , correo: "german@hotamail.com"
                , edad: 63
                , borrado: false
            }
        ]
    }

    getAplicantes() {
        let aplicantesAretornar = [];
        this.aplicantes.forEach(element => {
            if (element.borrado == false) {
                aplicantesAretornar.push(element);
            }
        });
        return aplicantesAretornar;
    }

}

module.exports = new AplicanteController();