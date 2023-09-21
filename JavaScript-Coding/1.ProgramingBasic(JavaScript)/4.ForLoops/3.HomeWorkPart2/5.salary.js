function salary(input) {

    let index = 0;
    
    let openTabs = Number(input[index]); //Тези кодове вървят ръка за ръка.
    index++;
    
    let money = Number(input[index]);
    index++;

    let isHaveMoney = true;  // Булеон флаг (Boolean)
    
    for (let i = 0; i <= openTabs; i++) { //Щом ползваме index( i = 0;) - винаги
        
        let currentOpenTab = input[index];
        index++;

        if (currentOpenTab === "Facebook") {
            money -= 150;
        } else if (currentOpenTab === "Instagram") {
            money -= 100;
        } else if (currentOpenTab === "Reddit") {
            money -= 50;
        }

        if (money <= 0) {
            isHaveMoney = false;  //Булеон флаг (Boolean)
            console.log("You have lost your salary.");
            break;
        }
    }
    
    if (isHaveMoney) {
        console.log(money);
    }

    
}
salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])



//       if (money > 0) {
//       |   console.log(money);  - Стандартно решение.
//       }
