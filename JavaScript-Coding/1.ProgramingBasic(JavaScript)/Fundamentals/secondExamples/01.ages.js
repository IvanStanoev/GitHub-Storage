function demo(ages) {

    let type = 0;
    if (ages < 0) {
        console.log(`out of bounds`);
    } else if (ages >= 0 && ages <= 2) {
        type = "baby";
    } else if (ages <= 13) {
        type = "child";
    } else if (ages <= 19) {
        type = "teenager";
    } else if (ages <= 65) {
        type = "adult";
    } else if (ages >= 66) {
        type = "elder";
    }

    switch (type) {
        case "baby":
            console.log(type);
            break;
        case "child":
            console.log(type);
            break;
        case "teenager":
            console.log(type);
            break;
        case "adult":
            console.log(type);
            break;
        case "elder":
            console.log(type);
            break;
    }
}
demo(20)