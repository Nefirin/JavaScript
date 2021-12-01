function dobas(sides) {
    let result = Math.floor(Math.random() * sides) + 1;
    console.log(result);
}

dobas(20);

function addSomething(a, b) {
    console.log("a + b = ", a + b);
}

addSomething(3, 4)

function addSomethings(a, b, c) {
    console.log("a + b + c= ", a + b + c);
}

addSomethings(3, 4, 7)

function sum3v2(a, b, c) {
    if (a === undefined) {
        a = 0;
    }
    if (b === undefined) {
        b = 0;
    }
    if (c === undefined) {
        c = 0;
    }
    a = Number(a);
    b = Number(b);
    c = Number(c);
    let sum = a + b + c;
    console.log("${a} + ${b} + ${c} = ", sum);
}
sum3v2(1, 2)

function em2px(em) {
    console.log(16 * em)
}
em2px(10);

function em2px(em, base) {
    if (base === undefined) {
        base = 16;
    }
    console.log(base * em)
}

em2px(10, 16);

/*
function addThings(a , b) {
    return; //abbahagyomindent
    //olyan mint a ciklusban a break;
    console.log(a + b);
}*/

function addThings(a, b) {
    return a + b;
}

let final = addThings(2, 10);

console.log(final + 4);

function minsFive(a) {
    return a - 5;
}
let aminus5 = minsFive(15) + 5;

console.log(aminus5);

function timesEleven(a) {
    return a * 11;
};

console.log(timesEleven(3) + 5);

function timesEleven2(szam) {
    szam = 10
    let product = szam * 11;
    return product
};
let szorzat10x11 = timesEleven2() //=>110
console.log(szorzat10x11);

function timesEleven3(szam) {
    let product = szam * 11;
    return product
};
let szorzat11x10 = timesEleven3(10) //=>110
console.log(szorzat11x10);
//osztható e 2vel
function paros(a) {
    return a % 2 === 0;
}

console.log((paros(3)));
//megszoroz egy számot önmagával
function timesSelf(a) {
    return a * a;
}
console.log(timesSelf(3));
//random generál egy számot
function randoHat(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
}
console.log(randoHat(1, 100));

//függvény ami összeadja a tömb elemeit
function sumArray(arr) {
    let sum = 0;

    if (!Array.isArray(arr)) {
        return NaN;
    }

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

if (sumArray([1, 2, 3]) === 6) {
    console.log("Yaaay megy!")
}

if (sumArray([]) === 0) {
    console.log("yeeey megy!");
}

//vissza számol nulláig
function countdown(a) {
    for (number = a; number >= 0, number--;) {
        console.log(number)
    }
    return number
}

console.log(countdown(10));

function countDown2(a) {
    while (a >= 0) {
        console.log(a)
        a--
    }
    return a
}
countDown2(10)


let szamok = [1, 2, 3];
let sum = 0;

for (let i = 0; i < szamok.length; i++) {
    sum += szamok[i];
}
console.log(sum);


let tombecske = ["cica", "kutya", "paprik", 1, 2, 3, 4, 5, "beka"];
let keresett = "beka";
let vankeressertek = false;

for (let index = 0; index <= tombecske.length - 1; index = index + 1) {
    if (tombecske[index] === keresett) {
        vankeressertek = true;
        break;
    }
}

if (vankeressertek) {
    console.log("igen meg van a cucc");
} else {
    console.log("nincs meg a cucc");
}


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

function szorzotabla(a) {
    console.log(a * 1)
    console.log(a * 2)
    console.log(a * 3)
    console.log(a * 4)
    console.log(a * 5)
    console.log(a * 6)
    console.log(a * 7)
    console.log(a * 8)
    console.log(a * 9)
    console.log(a * 10)
};

szorzotabla(1);

function szorzotabla2(a) {
    let szam = a;
    if (a < 10) {
        a = 10;
    }
    for (let i = 1; i <= Math.max(a, 10); i++) {
        console.log((i) * szam)
    }
}
szorzotabla2(8);



function dogeAge(a) {
    console.log("a kutyi " + a / 7 + " éves")
}
dogeAge(8);

function cToF(a) {
    console.log(a / 5 * 9 + 32 + " fok lenne F-ben")
}
cToF(4);

function fToC(a) {
    console.log((a - 32) / 9 * 5 + "fok lenne C-ben")
}
fToC(4);

function megFordit(a) {
    return a.split("").reverse().join("");
}
console.log(megFordit("Oliver"));

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseString("Oliver"));

let namhetNap = [0, 1, 2, 3, 4, 5, 6];
let hetNapjai = ["h", "k", "sz", "cs", "p", "sz", "v"]

function tombElemei(tomb) {
    while (tomb.length > 0) {
        console.log(tomb.shift())
    }
}

tombElemei(hetNapjai);
/*
let hetNapja = 3;

if (hetNapja > 0 && hetNapja <= 7) {
    console.log(hetNapjai[hetnapja -1]);
}
console.log(hetNapja);
*/

function korkerulet(r) {
    console.log(r * 2 * Math.PI)
}
korkerulet(2);

function korterulet(r) {
    console.log(r * r * Math.PI)
}
korterulet(2);

function korteruletkerulet(r) {
    console.log("A kor terulete: " + (r * 2 * Math.PI) + " es terulete: " + (r * r * Math.PI));
}
korteruletkerulet(4);

function calGeometry(radius) {
    let ker = calcCurcumfrence(radius);
    let ter = calcArea(radius);
    console.log("A kor terulete: " + ker + " es terulete: " + ter);
}

calGeometry(4);