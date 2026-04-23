// let user = {
//     id : 1,
//     username :"Sam",
//     location : {
//         city : "Scranton",
//         state : "PA"
//     }
// }

// let {id, username, location: {city,state}} = user;

// console.log(id);
// console.log(username);
// console.log(city);
// console.log(state);


let users = {
    id :1,
    username : "Sam",
    location : {
        city : "Scranton",
        state : "PA"
    },
    phone : "123-456-7890",
    skills : {
        frontend : ["React","html","css"],
        backend : ["Java","SpringBoot"]
    }

}


let {id, username, location: {city,state}, phone, skills: {frontend, backend}} = users;

console.log(id);
console.log(username);
console.log(city);
console.log(state);
console.log(phone);
console.log(frontend);
console.log(backend);