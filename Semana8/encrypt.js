const bcrypt = require('bcrypt')

const numberOfRouds = 10;
// metodo post crear usuario

// lo que vendria en el body
let user = {
    user: "michaelCorleone",
    password: "admin",
    name: 'michael'
}

// generar salt (llave para encriptar) ejemplo: as5d4-as5d4-s6d5f-d21ffg
let salt = bcrypt.genSaltSync(numberOfRouds);

// generar contrasena encriptada ejemplo: as45d78qw4dfsdf87sdf
let encryptedPassword = bcrypt.hashSync(user.password, salt);

console.log('salt', salt);
console.log('encryptedPassword', encryptedPassword);

// guardar la contrasena encriptada y la sal
/*
    userService.insertUser(user);
        |
            INSERT INTO users/usuarios
            (name, user, encrypted_password, salt)
            VALUES ('michael', 'michaelCorleone', '$2b$10$b7ECpPZwzu4D8hMDt9Rvbu9pzj4/HQe4Ju93K1V74Oh4hXrF5OI0K', '$2b$10$FhkQ5AdE/GE5G./1w7Lyx.')

            INSERT INTO users/usuarios
            (name, user, encrypted_password, salt)
            VALUES (${user.name}, ${user.user}, ${encryptedPassword}, ${salt})
*/

// one-way encryption  ||  cifrado unidireccional
/*
    YES encrypt
    NO decrypt (conceptual)
*/


// two-way encryption  ||  cifrado bidireccional
/*
    YES encrypt
    YES decrypt
*/