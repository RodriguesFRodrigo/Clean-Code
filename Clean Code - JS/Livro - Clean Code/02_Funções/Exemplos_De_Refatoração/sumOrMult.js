function calculate(x, y, operation) {
    let result;

    if (operation === "add") {
        result = x + y;
    } else if (operation === "multiply") {
        result = x * y;
    }

    return result;
}
