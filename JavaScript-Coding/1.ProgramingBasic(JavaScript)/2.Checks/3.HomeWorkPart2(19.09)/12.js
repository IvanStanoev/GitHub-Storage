function calc(input) {

    let currentPrice = Number(input[0]);
    let quantity = Number(input[1]);
    let totalPrice = quantity * currentPrice;
    console.log(totalPrice);

    

}
calc(["1813.50", "2.88"])