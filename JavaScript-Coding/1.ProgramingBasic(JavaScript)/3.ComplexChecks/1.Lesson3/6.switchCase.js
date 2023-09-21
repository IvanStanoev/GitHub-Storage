   function switchCase(){

    let pass = 'Aa1!';

    switch (pass) {
        case 'Hi123':console.log('Hi User!'); break;
        case 'PBJS2021':console.log('JS is the best!'); break;
        case 'Aa1!':console.log('Cool pass!'); break;
        case 'Ivan123':console.log('Hi Ivan!'); break;
   default:console.log('Error!'); break;
   }
    // case 'name': have if(){} function
    // break; should exist after every case
    // default: have else {} function
    // when break; miss all case will be typed at console.log()   
}
switchCase()
//Switch works much faster with "String".
//if works much faster with value.