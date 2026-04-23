let users = [
    { 
        id:1, 
        username:"Anmolsingh1222", 
        password:"1234567" },
    { 
        id:2, 
        username:"bhayansh", 
        password:"bhavya" },
    { 
        id:3, 
        username:"AkhilRana", 
        password:"anmol" 
    }
];

let input = {
    username:"AkhilRana",
    password:"anmol"
};

let userExists = users.some(u => u.username === input.username);

if(userExists){

    let user = users.find(u => u.username === input.username);

    if(user.password === input.password){
        console.log("Navigate to Home");
    } else {
        console.log("Invalid Password");
    }

} else {
    console.log("User not found");
}