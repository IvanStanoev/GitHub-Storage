function piramid(base, increment) {

    let stones = 0;
    let marbles = 0;
    let lapis = 0;
    let gold = 0;
    let countFloors = 0;
    let currentSumOfBlocks = 0;

    while (base >= 0) {

        countFloors += 1;
        currentSumOfBlocks = ((base * base) * increment);
        let currentStones = 0;

        if (countFloors % 10 == 5 || countFloors % 10 == 0) {

            leftBlocks = ((base * base) * increment)
            innerBlocks = (base - 2) * (base - 2);
            lapis = leftBlocks - innerBlocks;
            stones += innerBlocks;
        }

        if (base == increment) {
            gold = ((base * base) * increment);
            console.log(`Stone required: ${stones}`);
            console.log(`Marble required: ${marbles}`);
            console.log(`Lapis Lazuli required: ${lapis}`);
            console.log(`Gold required: ${gold}`);
            console.log(`Final pyramid height: ${countFloors}`);
            return;
        } else if (base < 0) {
            console.log(`Stone required: ${stones}`);
            console.log(`Marble required: ${marbles}`);
            console.log(`Lapis Lazuli required: ${lapis}`);
            console.log(`Gold required: ${gold}`);
            console.log(`Final pyramid height: ${countFloors}`);
            return;
        }

        if (countFloors != 5) {
            currentStones = currentSumOfBlocks;
            perimeter = ((base - 2) * (base - 2) * increment);
            stones += perimeter;
            marbles += ((base * base) * increment) - perimeter;
        }
        base -= 2;
        base = base.Max_SAFE_INTEGER;
    }
}
piramid(11, 0.75);