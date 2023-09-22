function piramid(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let countFloors = 0;

    //inner layer should be from stones
    //outer layer should be from marble
    //every 5-th outer layer is made from lapis not marble
    //final step is made from gold

    while (base >= increment) {
        
        countFloors += 1;

        //first step is base * base
        currenSumOfBlocks = base * base;
        

        //every second floor - base is reduced by 2 (one for each side)
        base -= 2;
    }
    
    

    //stones - reduce base(current floor) with 2 and multiply with increment.
    //lapis - for 5-th floor (lapis insteat marble)
    //marble (base - 4) * inctement

    //top layer = gold = base * increment

    //print total amound (rounded up)
    //final height (rounded dowm)

}
piramid(11, 1);



   //Чети добре условията
