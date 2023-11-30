function replaceChars(str) {

    let noRepeatStr = '';
    let prevChar = '';

    for (let curChar of str) {

        if (curChar !== prevChar) { // добавяме само символа различен от предния
            noRepeatStr += curChar; // добавяме новия символ понеже го няма
            prevChar = curChar;     // сегашния символ вече е променен с новия
        }
    }
    console.log(noRepeatStr);
}

replaceChars('aaaaabbbbbcdddeeeedssaa');