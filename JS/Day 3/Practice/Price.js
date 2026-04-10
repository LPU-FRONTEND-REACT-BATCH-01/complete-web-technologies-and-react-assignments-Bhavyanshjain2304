let arr1 = [10, 20, 30, 40]; // Define arr1 with sample numbers

let total = arr1.reduce((prev, curr) => {
    return prev + curr;
});
console.log(total); // 100


let cart_data = [
    {
        id: 1,
        name:"Watch",
        price:2999
    },
    {
        id: 2,
        name: "Shoes",
        price: 199
    },
    {
        id: 3,
        name:"Earphone",
        price:299
    }
];
let total_amount = cart_data.reduce((prev, value) => {
    return prev + value.price;
}, 0); // Add initialValue 0

console.log(total_amount); // 3397
