
let str; // Assume str is undefined

// Check if str is defined before using split
if (str !== undefined) {
    let parts = str.split(' '); // Split the string by space
    console.log(parts);
} else {
    console.log("The variable is undefined.");
}