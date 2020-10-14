function ingresarUsuario(nombre, apellido){
    const edad = 25
    console.log(nombre, apellido)
}

ingresarUsuario('Victor', 'Ramirez')

// esta instruccion falla porque no pertenece al mismo block scope
// console.log(edad)