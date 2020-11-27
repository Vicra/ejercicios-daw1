const clienteController = require('../controllers/clienteController')

test('get Clientes -> lista clientes', () => {
    let clientes = [];
    async () => {
        clientes = await clienteController.getClientes(1,0)
        expect(clientes).toBe({
            "id": 1,
            "nombre": "Melvin",
            "telefono": "8383838383",
            "correo": "m.asdknm@gmail.com",
            "direccion": "3 casas abajo"
        })
    }
});