// let arr = [21,312,2312,3]
// let a = arr[0]
// console.log(a)
// let [a,b,c] = arr
// console.log(a,c)


//object destructuring

// let users = {
//     id : 1,
//     username : "Anmol",
//     location:{
//         city:"Jalandhar",
//         state:"Punjab"
//     }
// }

// let { id, username, location: { city, state } } = users;

// console.log(id)

// console.log(id, username, city, state);

// let users = {
//     id : 1,
//     username : "Anmol",
//     userLocation : {
//         city : "JAlandhar",
//         state : "Punjab"
//     },
     
//     phone : "123454d323",
//     skills : {
//         frontend : ["react","html","css"],
//         backend : ["JAva","Springboot"]
//     }
// }

// let {id,username,userLocation:{city,state},phone,skills:{frontend,backend} }=users;
// console.log(id, username, city, state, phone, frontend, backend);



let price = 500
let name = "Anmol"

export const pName = name;
export const productName = price;
