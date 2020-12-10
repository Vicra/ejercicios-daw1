// crear instancias de razas de perro
const razaFactory = require('./factory')

let golden = razaFactory.create('golden')
let golden2 = razaFactory.create('golden')

let pastorAleman = razaFactory.create('pastor')
let rottweiler = razaFactory.create('rottweiler')
golden.mostrarInfo();
golden2.mostrarInfo();
pastorAleman.mostrarInfo();
rottweiler.mostrarInfo();