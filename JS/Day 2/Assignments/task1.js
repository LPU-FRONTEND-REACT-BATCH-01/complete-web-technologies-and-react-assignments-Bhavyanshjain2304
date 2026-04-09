
function calculatePrice(price) {
    let result;

    if (price > 6000) {
        result = 'Discount of 25% applied. Final price is ' + (price - (price * 0.25));

    } else if (price > 2000) {
        result = 'Discount of 15% applied. Final price is ' + (price - (price * 0.15));

    } else {
        result = 'No Discount. Price is ' + price;
    }

    return result;
}

console.log(calculatePrice(2000));
console.log(calculatePrice(3000));