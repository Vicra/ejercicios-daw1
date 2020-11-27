const dbManager = new (require('../db/dbmanager'));

class ClienteService {
    async getClientes(offset,limit) {
        const selectSQl =
            `SELECT * FROM clientes
            LIMIT ${limit} OFFSET ${offset}`;
        return await dbManager.execute('proyecto', selectSQl);
    }

    async getClienteById(id) {
        const selectSQl =
            `SELECT * FROM clientes WHERE id = ${id}`;
        return await dbManager.execute('proyecto', selectSQl);
    }

    async createCliente(cliente){
        const selectSQl =
            `INSERT INTO clientes
            (nombre, edad, email)
            VALUES
            (
            '${cliente.nombre}',
            ${cliente.edad},
            '${cliente.email}'
            ) `
        console.log(selectSQl);
        return await dbManager.execute('proyecto', selectSQl);
    }
    
}


module.exports = new ClienteService();