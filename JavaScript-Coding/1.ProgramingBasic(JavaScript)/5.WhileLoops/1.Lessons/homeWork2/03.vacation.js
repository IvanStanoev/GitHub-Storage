function vacation(input) {

    let index = 0;
    let moneyForTrip = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;

    let totalDays = 0;
    let totalSpendDays = 0;

    while (money < moneyForTrip) {

        let command = input[index];
        index++;
        let tempMoney = Number(input[index]);
        index++;
        totalDays++;

        switch (command) {

            case "save":
                totalSpendDays = 0;
                money += tempMoney;
                break;

            case "spend":
                totalSpendDays++;
                money -= tempMoney;
                if (money < 0) {
                    money = 0;
                }

        }
        if (totalSpendDays === 5) {
            console.log(`You can't save the money.`);
            console.log(totalDays);
            break;
        }
    }
    if (money >= moneyForTrip) {
        console.log(`You saved the money for ${totalDays} days.`);
    }
}
vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"])