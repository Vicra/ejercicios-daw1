class Validator{
    isNumber(input) {
        return Number.isInteger(input);
    }
}


module.exports = new Validator();