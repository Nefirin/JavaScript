/*
//let results = [0, 0, 0, 0, 0, 0]
function randomHat(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;

}
function d6() { 
    return randomHat(1, 6);
}

function throwTest() {
    let results = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 10000; i++) {
        let kockadobas = d6();
        results[kockadobas - 1] = results[kockadobas - 1];        
    }
    console.log(d6)
    return results;
}
console.log(throwTest());
function listResults() {

}*/

let tomb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //0 -> tomb.length -1
let sum = 0;
for (let i = 0; i < tomb.length; i++) {
    sum += tomb[i];
}
console.log(sum);

function sumArray(arr) {
    let sum = 0;

    if (!Array.isArray(arr)) {
        return NaN;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            sum++;
        }
    }
    return sum;
}

console.log(sumArray([-1, 0, 2, -5, 0, -6]));

let eldontes = [1, 2, 3, 4];
function keresem(a) {
    for (let i = 0; i <= eldontes.length; i++) {
        if (eldontes[i] === a) {
            return true;
        }
    }
    return false;
}
console.log(keresem(7));