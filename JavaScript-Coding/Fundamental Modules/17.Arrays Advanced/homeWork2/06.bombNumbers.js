function sloveBombs(nums, bombInfo) {

    //let bombSerialNum = bombInfo[0];
    //let power = bombInfo[1];
    let [bombNum, power] = bombInfo;

    while (nums.includes(bombNum)) {
        let idx = nums.indexOf(bombNum);
        nums.splice(idx - power, power * 2 + 1, 0);
    }

    let sum = 0;

    for (let num of nums) {
        sum += num;
    }

    console.log((nums));
    console.log(sum);
}
sloveBombs([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]);
