function requiredReading(numPages, oneHourPages, days) {

    let totalTime = numPages / oneHourPages;
    let requiredHours = totalTime / days;

    console.log(requiredHours);
}
requiredReading(432, 15, 4);