// let arr = ["Apple","Kiwi","Banana"]

// let result = arr.some(ele => ele === "Apple")
// console.log(result)

let users = [
    {
        id:1,
        username:"Jim",
        password:"12345"
    },
    {
        id:2,
        username:"Pam",
        password:"12345"
    },
    {
        id:3,
        username:"Kevin",
        password:"@@@@@"
    }
]

let inputData = {
    username:"Kevin",
    password:"@@@@@"
}


let user = users.find(u => u.username === inputData.username);

if (!user) {
    console.log("User Not Found");

} else if (user.password === inputData.password) {
    console.log("Navigate to Home");

} else {
    console.log("Wrong Password");
}