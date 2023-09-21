function Password(input) {
    let pass = input[0];

    if (pass === pass) {
        console.log("Wrong Password!");
    } else {
        console.log("Welcome");
    }
}
Password(["s3cr3t!p@ss"])