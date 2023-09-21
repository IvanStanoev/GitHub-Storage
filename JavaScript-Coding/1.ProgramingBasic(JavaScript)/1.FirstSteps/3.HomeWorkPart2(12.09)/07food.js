function foodDelivery(input) {

    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vegan = Number(input[2]);

    let chickenMenu = chicken * 10.35;
    let fishMenu = fish * 12.40;
    let veganMenu = vegan * 8.15;

    let totalCoast = chickenMenu + fishMenu + veganMenu;
    let desert = (20 * (totalCoast / 100));
    let delivery = 2.50;

    let total = totalCoast + desert + delivery;
    
    console.log(total);
        
}
foodDelivery(["9 ","2 ","6 "]);