function passwordGeneration(arr) {

    let [str1, str2, replacedStr] = arr;

    let concatedStr = str1 + str2;

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let idx = 0;

    for (let char of concatedStr) {

        if (vowels.includes(char)) {                // (/[aeoui]/.test(char)) - regex ако vowels има [aeoui] влизаме в проверката без [] го брой като цяла дума
            concatedStr = concatedStr.replace(char, replacedStr[idx].toUpperCase());
            idx++;

            if (idx == replacedStr.length) {
                idx = 0;
            }
        }
    }

    let password = concatedStr.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}


passwordGeneration([

    'ilovepizza',
    'ihatevegetables',
    'orange'

]);