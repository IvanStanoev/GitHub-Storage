let arr = [10, 20, 30, 40, 50];

console.log(includes(arr,20));


// includes
function includes(inputArr, element) {
    for (let item of inputArr) {
        if (item === element) {
            return true;
        }
    }

    return false;
}

// indexOf

console.log(indexOf(arr, 30));
function indexOf(inputArr, element) {
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === element) {
            return i;
        }
    }

    return -1;
}


// slice


console.log(slice(arr, 1, 3));

function slice(inputArr, startIndex, endIndex) {
    
    // create output array
    let result = [];

    // working with negative Numbers
    if (startIndex < 0) {
        start += inputArr.length;
    } 
    if (endIndex <0) {
        end += inputArr.length;
    }
    
    // begin itertion input array from starting index
    for (let i = startIndex; i < endIndex; i++) {
        
        // copy value from input to output
        result.push(inputArr[i]);
        //result[result.length] = inputArr[i];    //same
        
    }
    
    // when end index is reached, return result
    return result;
}

// join

console.log(join(arr, " -- "));
function join(inputArr, str) {
    let result = " ";

    for (let i = 0; i < inputArr.length - 1; i++) {
        result += String(inputArr[i]);
        result += str;
    }

    if (inputArr.length > 0) {
        result += inputArr[inputArr.length -1];
    }

    return result;
}

// splice() add/remove items to/from an array, and returns the removed item(s);