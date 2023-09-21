function fishTank(input) {
    
    let lenght = Number(input[0]);
    let wight = Number(input[1]);
    let height = Number(input[2]);
    let precentegeReserve = Number(input[3]);
   
    let tankVolume = lenght * wight * height ;
   
    let volumelt = tankVolume * 0.001;
   
    let total = volumelt * (1 - (precentegeReserve / 100));

    console.log(total);
}
fishTank(["85","75","47","17"]);