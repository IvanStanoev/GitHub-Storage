function largestN(n1, n2, n3) {

    let result;

    if (n1 > n2 && n1 > n3) {
        result = n1;
    }

    if (n2 > n3 && n2 > n1) {
        result = n2;
    }

    if (n3 > n2 && n3 > n1) {
        result = n3;
    }

    console.log(`The largest number is ${result}.`);
}
largestN(5, -3, 16)