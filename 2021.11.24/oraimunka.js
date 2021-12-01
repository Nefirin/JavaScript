/*let spaces = 0;
let sz = prompt("?");
for (let i = 0; i < sz.length; i++) {
    if (sz[i] === " ") {
        spaces++;
    }
}
console.log(spaces);

let charIndex = 0;
while (charIndex < sz.length - 1) {
    if (sz[charIndex] === " ") {
        spaces++;
    }
    charIndex++
}
console.log(spaces);

let asd = [1, 2, 3, 4, 5, -1, -4, "asd"];
let eredmeny = 0;
for (let index = 0; index < asd.length; index++) {
    if (isNaN(asd[index]) === false && typeof asd[index] !== "boolean")
        eredmeny += asd[index]
    }

console.log(eredmeny);*/

let tomb = [ 1, 2, 3, 4, 5, 2, 3, 1];
let keresettErtek = 5;
let vankeresettelem = false;

for (let index = 0; index < tomb.length; index = index +1) {
    if (tomb[index] === keresettErtek){
        vankeresettelem = true;    
    }
}
if (vankeresettelem){ 
    console.log("van ekresett elem");
} else {
    console.log("nincs keresett elem")
}