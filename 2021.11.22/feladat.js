/*let szam1 = window.prompt ("?");
let szam2 = window.prompt ("?");
let szam3 = window.prompt ("?");

if ((szam1 > szam2) && (szam1 > szam3)) {
    window.alert("szam1 nagyobb azaz " + szam1)
} else if ((szam2 > szam1) && (szam2 > szam3)){ 
    window.alert ("szam 2 nagyobb azaz " + szam2)
} else if ((szam3 > szam1) && (szam3 > szam2)){ 
    window.alert ("szam 3 nagyobb azaz " + szam3)
} 
else {
    window.alert ("a 3 száme gyenlő")
};


let oldal1 = window.prompt ("?");
let oldal2 = window.prompt ("?");
let oldal3 = window.prompt ("?");

if (oldal1 === oldal2 && oldal1===oldal3) {
    window.alert("egyenlőoldalú");
}  else if (oldal1 === oldal2 || oldal1 === oldal3 || oldal3 === oldal2){
    window.alert("egyenlőszárú")
} else {
    window.alert("sima háromszög")
};*/
/*
let nap = Math.floor(Math.random() * 10);

if (nap === 1) {
    window.alert("hétfő")
} else if (nap === 2) {
    window.alert("kedd")
} else if (nap === 3) {
    window.alert("szerda")
} else if (nap === 4) {
    window.alert("csütörök")
} else if (nap === 5) {
    window.alert("péntek")
} else if (nap === 6) {
    window.alert("szombat")
} else if (nap === 7) {
    window.alert("vasárnap")
} else {
    window.alert ("egyik nap se")
}
*/
/*
let a = window.prompt("Enter a value");
let b; 
let sum = 0;
let c = a;
while(a > 0)
{
  b = a % 10;
  sum = sum * 10 + b;
  a = parseInt(a / 10);
}
window.alert(sum);*/
/*
let szamka = 1;
while (szamka < 3) {
    console.log(szamka);
    szamka += 1; //szam++; szam = szam + 1;
}

for (let k = 0; k < 5; k++) {
    console.log(k)
}
*/
/*
let solution = Math.floor(Math.random() * 100)
console.log(solution);
let input = Number(prompt("adjá számot 1-99"));
while (input != solution) {
    if (input > solution) {
        input = Number(prompt("kisebb sázmot kérek"))
    } else {
        input = Number(prompt("nagyobb számot kérek"))
    }
}
alert("nyertél")


let solution = Math.floor(Math.random() * 10)
while (solution < 10) {
    //solution = Math.floor(Math.random() * 10);
    console.log(solution);
}
*/
/*
let i = 1;
while (i != 100) {
    i ++;
    if (i % 2 === 0) {
        console.log(i)
    }
}
*/
let i = 1;
let sum = 0;
while (i < 100) {
    if (i % 3 === 0 && i % 7 === 0) {
        sum += i;
    }
    i++
}
console.log(sum);

let a = 1;
let osszeg = 0;
while (a < 101) {
    osszeg += a
    a++
}
console.log (osszeg);

let forsum = 0;
for (let k = 1; k <=100; k++) {
    forsum += k;
}
console.log(forsum)