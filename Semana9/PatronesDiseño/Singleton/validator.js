class ValidatorPrivate{
    isNumber(input) {
        return Number.isInteger(input);
    }
}

class Validator {
    static getInstance(){
        if (!this.instance){
            this.instance = new ValidatorPrivate()
        }
        return this.instance
    }
}

module.exports = Validator