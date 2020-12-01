const bcrypt = require('bcrypt')
const numberOfRouds = 10;


// ejemplo de peticion de login, potencialmente viene en 'req.body'
let credenciales = {
    user: "michaelCorleone",
    password: "admin"
}

// obtener la salt
let salt = userService.getUserSalt(credenciales.user);
    /*
        function getUserSalt (user) {
            let selectSQL = `
                SELECT salt
                FROM users
                WHERE user = ${user} `;
            return await dbManager.execute('proyecto', selectSQl)
        }
    */

// condicion para saber si el usuario esta bueno
if(salt){
    // encriptada de parametro
    let encryptedPasswordCredentials = bcrypt.hashSync(credenciales.password, salt);

    // contrasena legitima de base de datos
    let currentEncryptedPassword = userService.getUserPassword(credenciales.user);

    if (encryptedPasswordCredentials === currentEncryptedPassword){
        // credenciales estan buenas
    }
    else {
        // credenciales estan malas
    }
}
