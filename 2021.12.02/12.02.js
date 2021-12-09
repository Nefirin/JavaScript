/*function addOne(array) {
    //debugger;
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let eredetiTombEleme = array[i];
        newArray.push(eredetiTombEleme + 1);
    }
    return newArray;
}
console.log(addOne([5, 6, 10]));*/
function random(min, max) {
    return Math.floor(Math.random() * (max * min + 1)) + min;
}


function lotto(tipus) {
    if (tipus === 5) {
        return [random(1, 90), random(1, 90), random(1, 90), random(1, 90), random(1, 90)];
    } else if (tipus === 6) {
        return [random(1, 45), random(1, 45), random(1, 45), random(1, 45), random(1, 45), random(1, 45)]
    } else if (tipus === 7) {
        return [random(1, 35), random(1, 35), random(1, 35), random(1, 35), random(1, 35), random(1, 35), random(1, 35)]
    } else {
        return "ilyen lotto nincs"
    }

}

console.log(lotto(7));
/*
function lottocska() {
    let tipus = lottocska()
    if (tipus = 5) {
        return [random(1, 90), random(1, 90), random(1, 90), random(1, 90), random(1, 90)];
    } else if (tipus = 6) {
        return [random(1, 45), random(1, 45), random(1, 45), random(1, 45), random(1, 45), random(1, 45)]
    } else if (tipus = 7) {
        return [random(1, 35), random(1, 35), random(1, 35), random(1, 35), random(1, 35), random(1, 35)]
    } else {
        return "ilyen lotto nincs"
    }

}

console.log(lottocska(6));*/

function osszead(a, b) {
    return a + b;
}
function kivon(a, b) {
    return a - b;
}

function szamologep(a, b, muvelet) {
    return muvelet(a, b);
}
console.log(szamologep(1, 2, osszead));
console.log(szamologep(1, 2, kivon));
console.log(szamologep(1, 2, function (a, b) { return a / b }));
console.log(szamologep(100, 200, function (a, b) { return a * b }));

function each(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i])
    }
}

each([1, 2, 3, 4, 5], console.log);

function log(szam) {
    console.log("szam: " + szam);
}

each([10, 20, 30, 40], log);

each([10, 20, 30, 40], function (szam) { console.log("ez is szam: " + szam) });

let iife = (function () {
    return true;
})();

console.log(iife);

function csakAParos(array) {
    let parosak = []
    for (let i = 0; i < array.length; i++) {
        let tomb = array[i];
        if (array[i] % 2 === 0) {
            parosak.push(tomb);
        }
    }
    return parosak;
}
console.log(csakAParos([1, 2, 4,]));

function csakParos(tomb, callback) {
    let kivalasztottak = [];
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] % 2 === 0) {
            kivalasztottak.push(tomb[i])
        }
    }
    return kivalasztottak;
}
csakParos([1, 2, 6, 8,], console.log)