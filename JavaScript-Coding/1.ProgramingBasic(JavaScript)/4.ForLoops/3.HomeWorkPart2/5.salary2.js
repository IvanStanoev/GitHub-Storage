function salary(input) {
    
    let openTabs = Number(input[0]); // 
    let money = Number(input[1]);
    
    let isHaveMoney = true;  // Булеон флаг (Boolean)
    
    for (let i = 2; i <= openTabs + 1; i++) { //Щом не ползваме index( i = 2; i <= openTabs + 1)
        let currentOpenTab = input[i];

        if (currentOpenTab === "Facebook") {
            money -= 150;
        } else if (currentOpenTab === "Instagram") {
            money -= 100;
        } else if (currentOpenTab === "Reddit") {
            money -= 50;
        }

        if (money <= 0) {
            isHaveMoney = false;  //Булеон флаг (Boolean)
            console.log(`You have lost your salary.`);
            break;
        }
    }

    if (isHaveMoney) {
        console.log(money);
    }

    
}
salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])