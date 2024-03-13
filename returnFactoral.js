let num = window.prompt("Enter a number: ");

function returnFactorial(x) {
    let total = 1;
    for (let i = 1; i <= x; i++) {
        total = total * i;
    }
    return total;
}
console.log(returnFactorial(num));