class Raza {
    constructor(nombre){
        this.nombre = nombre
    }

    mostrarInfo(){
        console.log(`Soy de raza: ${this.nombre} ${Math.random().toString(36).substring(2, 15)}`)
    }
}

module.exports = Raza;