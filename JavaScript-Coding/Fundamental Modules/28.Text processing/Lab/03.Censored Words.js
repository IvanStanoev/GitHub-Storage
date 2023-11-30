function censoredWorlds(text, str) {

    let censor = '*'.repeat(str.length);
    let result = text;

    while (result.includes(str)) {
        result = result.replace(str, censor);
    }

    console.log(result);

}

//   (text, str) => text.split(str).join('*'.repeat(str.length));

censoredWorlds('A small sentence with some words', 'small');