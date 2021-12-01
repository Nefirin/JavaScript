/*debugger; //itt emgáll a program

let a = 1;
let b = 2;
let osszeg = a + b; //4

if (osszeg % 2 === 0) {
    console.log("paros");
} else {
    console.log("paratlan")
}*/
/*
let numbers = [];

debugger; //átadja az irányítást nekünk

for (let i = 0; i  < 5; i++) {
    numbers.push(i);
    console.log(i, numbers)
}
*/
let number = [1, 2, 3, 10];
let sum = 0;
/*console.log(number[0] + number[1] + number[2]);*/

for (let i = 0; i < number.length; i++) {
    sum += number[i];
}
console.log(sum);


let szamok = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < szamok.length; i++) {
    if (szamok[i] % 3 === 0) {
        console.log("fizz");
    } else if (szamok[i] % 5 === 0) {
        console.log("buzz");
    } else { console.log(szamok[i]); }
}


for (let i = 0; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else if (i % 3 === 0) {
        console.log("FizzBuzz");
    } else { console.log(i); }
}
/*
let pairs = [[1, 2], [3, 4], [5, 6]];
let sums= 0;

for (let i = 0; i < pairs.length; i++) {
    let current = pairs[i];
    console.log(i, pairs[i]);
    for(let j = 0; j < current.length; j++) {
        let szam = current[j]
        sums += szam;
    
    }
    console.log(sums);
} 
console.log(sums);
*/
let pairs = [[1, 2], [3, 4], [5, 6]];
let sums= 0;

for (let i = 0; i < pairs.length; i++) {
    for(let j = 0; j < pairs[i].length; j++) {
        sums += pairs[i][j];
    
    }   
} 
console.log(sums);