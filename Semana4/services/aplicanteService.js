const dbManager = new (require('../db/dbmanager'));

class AplicanteService {
    async getAplicantes() {
        const selectSQl =
            `SELECT * FROM aplicantes`;
        return await dbManager.execute('aplicantes', selectSQl);
    }
}


module.exports = new AplicanteService();