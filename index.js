let n = 100;

function add(a, b) {
    return a + b

}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function increment(n) {
    n++;
    return n;
}

increment(12);

function decrement(n) {
    n--;
    return n;
}

decrement(12);

function makeInt(n) {
    return parseInt(n, 10);
}

makeInt("Heeeyy");

function preserveDecimal(n) {
    return parseFloat(n);
}

preserveDecimal(1.4312);