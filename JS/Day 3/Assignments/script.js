let cart_data = [
    {
        id: 1,
        name: "Watch",
        price: 2999,
        quantity: 2
    },
    {
        id: 2,
        name: "Shoes",
        price: 199,
        quantity: 1
    },
    {
        id: 3,
        name: "Earphone",
        price: 299,
        quantity: 3
    },
    {
        id: 4,
        name: "Laptop",
        price: 55000,
        quantity: 1
    },
    {
        id: 5,
        name: "Phone",
        price: 25000,
        quantity: 2
    }
];

let sortName = [...cart_data].sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
});

let sortPrice = [...cart_data].sort((a, b) => a.price - b.price);

let filtered =  [...cart_data].filter(item => item.price > 2000);


console.log("Sort by Price:", sortPrice);

console.log("Filtered:", filtered);

console.log("Sort by Name:", sortName);


