function foreignLanguage(country) {

    let language = "";

    switch (country) {
        case "USA":
        case "England":
            language = "English";
            console.log(language);
            break;
        case "Spain":
        case "Argentina":
        case "Mexico":
            language = "Spanish";
            console.log(language);
            break;

        default:
            console.log("unknown");
            break;
    }
}
foreignLanguage("Spain");