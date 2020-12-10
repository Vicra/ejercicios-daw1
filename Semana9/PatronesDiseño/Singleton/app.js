const Validator = require('./validator')

let validator = Validator.getInstance();
console.log(validator.isNumber('true'))