const dbManager = new (require('../db/dbmanager'));

class UsuarioService {
    async getUsuarios(offset,limit) {
        const selectSQl =
            `SELECT id,correo FROM usuarios
            LIMIT ${limit} OFFSET ${offset}`;
        return await dbManager.execute('proyecto', selectSQl);
    }

    // async getClienteById(id) {
    //     const selectSQl =
    //         `SELECT * FROM clientes WHERE id = ${id}`;
    //     return await dbManager.execute('proyecto', selectSQl);
    // }

    async createUsuario(usuario,password,salt){
        const selectSQl =
            `INSERT INTO usuarios
            (correo,contrasena,salt)
            VALUES
            (
            '${usuario.email}',
            '${password}',
            '${salt}'
            ) `
        console.log(selectSQl);


        return await dbManager.execute('proyecto', selectSQl);
    }
    
}


module.exports = new UsuarioService();