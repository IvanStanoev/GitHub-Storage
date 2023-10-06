function echo(input) {

    let parameter = typeof input;
    console.log(parameter);

    if (parameter == "string" || parameter == "number") {
        console.log(input);
    } else {
        console.log("Parameter is not suitable for printing");
    }

}
echo("Hello JavaScript!");