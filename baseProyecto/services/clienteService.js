const dbManager = new (require('../db/dbmanager'));

class ClienteService {
    async getClientes() {
        const selectSQl =
            `SELECT * FROM clientes`;
        return await dbManager.execute('proyecto', selectSQl);
    }

    async getClienteById(id) {
        const selectSQl =
            `SELECT * FROM clientes WHERE id = ${id}`;
        return await dbManager.execute('proyecto', selectSQl);
    }
    
}


module.exports = new ClienteService();