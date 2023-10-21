function building(input) {

    let index = 0;
    let floorsNum = Number(input[index]);
    index++;
    let roomsNum = Number(input[index]);
    let type = "";
    let roomsCount = 0;

    for (let f = floorsNum; f >= 1; f--) {

        if (f % 2 == 0) {
            type = "O";
        } else if (f % 2 != 0) {
            type = "A";
        }
        if (f == floorsNum) {
            type = "L";
        }

        let currentFloor = "";
        for (let r = 0; r <= roomsNum; r++) {

            if (roomsCount == roomsNum) {
                roomsCount = 0;
                break;
            }
            currentFloor += (`${type}${f}${roomsCount} `);
            roomsCount++;
        }
        console.log(currentFloor);
    }
}
building(["4", "4"]);