class User {
    constructor(emailParameter, passwordParameter, roleParameter = 'student'){
        this.email = emailParameter
        this.password = passwordParameter
        this.role = roleParameter
        // los docentes no tiene numero cuenta, tienen #TH
        // this.accountNumber = accountParameter;
    }

    printUser(){
        console.log(`email: ${this.email} 
            password: ${this.password}
            role: ${this.role}`
        )
    }

    changeRole(newRole){
        this.role = newRole
    }
}

// let user = new User('victor.ramirez@unitec.edu', 'SuperMasisa', 'professor');
// let user2 = new User('rene.alvarez@unitec.edu', 'MasMasisa');
// user.changeRole('professor')
// user.printUser();
// user2.printUser();

class Student extends User {
    constructor(emailParameter, passwordParameter, accountParameter){
        super(emailParameter, passwordParameter)
        this.accountNumber = accountParameter
    }

    printUser(){
        super.printUser();
        console.log(`           accountNumber: ${this.accountNumber}`)
    }
}

class Professor extends User{
    constructor(emailParameter, passwordParameter, talentNumberParameter){
        super(emailParameter, passwordParameter, 'professor')
        this.talentNumber = talentNumberParameter
    }

    printUser(){
        super.printUser();
        console.log(`           talentNumber: ${this.talentNumber}`)
    }
}

let professor = new Professor('victor.ramirez@unitec.edu', 'superMasisa', 21381);
professor.printUser()
console.log('');
let student = new Student('rene.alvarez@unitec.edu', 'masMasisa', 't319506');
student.printUser()


// camelCase
// UpperCamelCase
// snake_case
// sNombre 