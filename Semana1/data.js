// xml sample
<User>
    <name>victor</name>
    <lastname>ramirez</lastname>
    <age>25</age>
    ...
</User>


// json sample
{
    name: 'Victor'
    lastname: 'ramirez'
    age: 25
}

let productos = [
    {
        id:1,
        name: 'Huevos en Carton de 30 und',
        amount: 3,
        price: 10
    },
    {
        id:2,
        name: ' Mirinda 3 litross',
        amount: 2,
        price: 25
    }
]

localStorage.setItem('productos', JSON.stringify(productos));
//
// JSON.parse(localStorage.getItem('productos'))

// let htmlDiv = 
// `<div>
//     <table>
//         <thead>
//             <th>
//                 Producto
//             </th>
//             <th>
//                 Cantidad
//             </th>`
// productos.array.forEach(element => {
//     htmlDiv += 
//         `<tr> 
//             <td>${element.name}</td>
//             <td>${element.amount}</td>
//             ...
//         </tr>
//         `
// });


// .send(subject, body = htmlDiv)
