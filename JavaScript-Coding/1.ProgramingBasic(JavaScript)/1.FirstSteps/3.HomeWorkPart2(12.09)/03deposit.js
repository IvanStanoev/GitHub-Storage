function calc(input){
    
    let deposit = Number(input[0]);
    let term = Number(input[1]);
    let percent = Number(input[2]);
    
    let totalpercent = deposit * (percent/100); 
    let percentpermonth = totalpercent/12;
    let total = deposit + term * percentpermonth;
    
    console.log(total);        
}
calc(["200 ","3 ","5.7 "]);