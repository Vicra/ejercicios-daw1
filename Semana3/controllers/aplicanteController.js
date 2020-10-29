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

    getAplicanteById(id ){
        
        let aplicanteAdevolver = {};
        this.aplicantes.map((aplicante)=>{
            if(aplicante.id == id){
                aplicanteAdevolver = aplicante
            }
        })
        return aplicanteAdevolver;
    }

    crearAplicante(newAplicante){
        
        newAplicante.borrado = false;
        this.aplicantes.push(newAplicante);
        console.log(this.aplicantes);
        
        return true;
    }

    modificarAplicante(aplicante){
        
        this.aplicantes.forEach(element => {
            if (element.id == aplicante.id ){
                element.nombre = aplicante.nombre ;
                element.correo = aplicante.correo ;
                element.edad = aplicante.edad ;
            }
        });
        console.log(this.aplicantes);
    }

    eliminarAplicante(id){
        this.aplicantes.forEach(element => {

            if (element.id == id ){
                element.borrado = true ;
            }
        });
        console.log(this.aplicantes);
    }
}


module.exports = new AplicanteController();