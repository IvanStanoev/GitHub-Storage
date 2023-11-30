let str = 'hello world hello';

let lastIndex = 0;

while (str.indexOf('hello', lastIndex) != -1) {
    let foundAt = str.indexOf('hello', lastIndex);
    console.log('found match at', foundAt);
    lastIndex = foundAt + 5;
}

let str2 = 'hello world hello';
console.log(str.substring(6, 11));

let str3 = 'world';
console.log(str.replace("ld", "ds"));

let str4 = 'hello world hello';
console.log(str4.split('ll').join('tt'));