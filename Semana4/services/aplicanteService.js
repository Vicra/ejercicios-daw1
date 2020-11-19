const dbManager = new (require('../db/dbmanager'));

class AplicanteService {
    async getAplicantes() {
        const selectSQl =
            `SELECT * FROM clientes`;
        return await dbManager.execute('aplicantes', selectSQl);
    }

    async getAplicanteById(id) {
        const selectSQl =
            `SELECT * FROM aplicantes WHERE id = ${id}`;
        return await dbManager.execute('aplicantes', selectSQl);
    }
    
}


module.exports = new AplicanteService();