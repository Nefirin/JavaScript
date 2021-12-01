/*let tomb = [1, 2, 3, 5, 4, "alma"];
let keresem = [4]

for (let index = 0; index < tomb.length - 1; index = index + 1) {
    if (tomb[index] === keresem) {
        console.log = "yes";
    }
}*/

/*let tomb = [1, 2, 3, 5, 4, -3, -5,];
let nulla = [];

for (let index = 0; index < tomb.length; index = index + 1) {
    if (tomb[index] > 0) {
        nulla.push(tomb[index])
    }
    
}
console.log (nulla);*/
/*
let tomb = [1, 2, 3, 5, 4, -3, -5,];
let legnagyobb = [0];
for (let index = 0; index < tomb.length; index ++) {
    if (tomb[index] > legnagyobb) {
        legnagyobb = tomb[index];
    }
}
console.log (legnagyobb);*/
/*
let szamok2 = [1, 2, 324, 45 ,123, 524, 12,];
let legnagyobb2 = 0;

for (let index = 0; index < szamok2.length; index ++) {
    if ( szamok2[index] > legnagyobb2 && szamok2[index] % 2 == 0) {
        legnagyobb2 = szamok2[index];
    }
}
console.log(legnagyobb2);*/
/*
let tomb = ["a", " ", "asd"];
let talalat = "";
for(let i=0; i < tomb.length; i++) {
    console.log("index: " + i);
    if (tomb[i] === " ") {
        talalat = tomb[i];
        break; //continue
    }
}
console.log(talalat.length);*/

let felhasznalok = [
    {
        fullname: "Farkas Dávid",
        username: "Nefirin",
        dateofbirth: "putyin",
    },
    {
        fullname: "Kiss Jolan",
        username: "sd",
        dateofbirth: "putasdyin",
    },
    {
        fullname: "Tihi",
        username: "ewr",
        dateofbirth: "putasdfwyin",
    },
];

console.log(felhasznalok);
let talalat = {};
let index = 0;
while (index < felhasznalok.length) {
    if (felhasznalok[index].fullname === "Kiss Jolan") {
        talalat = felhasznalok[index];
        break;
    }
    index++;
}
console.log(talalat);