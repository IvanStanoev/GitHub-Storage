function yardGreening(input) {

let squareMeters = Number(input[0]);
let calc = squareMeters * 7.61;
let discount = calc * 0.18;
let finalPrice = calc - discount;
console.log(`The final price is: ${finalPrice} lv.`); 
console.log(`The discount is: ${discount} lv.`);

}
yardGreening([`550`]);