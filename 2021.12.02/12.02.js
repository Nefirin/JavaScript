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

