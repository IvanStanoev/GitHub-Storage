function worldSwimmingRecord(input) {

    let recordInSeconds = Number(input[0]);
    let rangeInMeter = Number(input[1]);
    let ivanSecondsForMeter = Number(input[2]);

    let totalTimeInSeconds = rangeInMeter * ivanSecondsForMeter;
    let addTime = Math.floor(rangeInMeter / 15) * 12.5;

    let ivanTimeInSeconds = totalTimeInSeconds + addTime;

    let diff = Math.abs(ivanTimeInSeconds - recordInSeconds);
    if (ivanTimeInSeconds < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${ivanTimeInSeconds.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(["55555.67",
"3017",
"5.03"])