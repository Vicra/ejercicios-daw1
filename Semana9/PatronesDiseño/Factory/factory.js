const GoldenRetriever = require('./razas/goldenRetriever')
const PastorAleman = require('./razas/pastorAleman')
const Rottweiler = require('./razas/rottweiler')

class RazaFactory {
    create(raza){
        switch(raza){
            case 'golden' : {
                return new GoldenRetriever()
            }
            case 'pastor' : {
                return new PastorAleman()
            }
            case 'rottweiler' : {
                return new Rottweiler()
            }
            default : {
                return 0
            }
        }
    }
}

module.exports = new RazaFactory();