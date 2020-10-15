function insertUser(username, password, image, country = 'No especificado'){
    console.log(`username ${username}, password ${password}, image ${image}, country ${country}`)
}


insertUser('gatito', 'supersecreto', 'https://image.png', 'Bahamas')


let limit = 100;

// function selectUsers(limit = 100){
// `select * from users limit ${limit}`