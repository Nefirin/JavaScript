/*let Bob = "Háború és Béke";
let Cecil = "Vörös és Fekete";


console.log("Cecilnél a " + Cecil + "könyv van.", "Bobnál a " + Bob + ".");
let csere = Bob;
Bob = Cecil;
Cecil = csere;

console.log("Cecilnél a " + Cecil + "könyv van.", "Bobnál a " + Bob + ".");

let felhasznalonev = window.prompt("Mi a neved?");
console.log(felhasznalonev);
window.alert("Szia " + felhasznalonev);*/


let magassag = window.prompt("Milyen magas a téglalap (centiben)?");
let szelesseg = window.prompt("Milyen széles a téglalap (centiben)?");

if (isNaN(magassag) && isNaN(szelesseg)) {
    window.alert("invalid ertek");
} else {
    console.log("A téglalap kerülete " + (parseInt(magassag) + parseInt(szelesseg)) * 2 + "centiméter")
    console.log("A téglalap területe " + magassag * szelesseg + " négyzet centiméter")
    console.log(`A téglalap területe ${parseInt(magassag) * parseInt(szelesseg)} négyzet centiméter`)
}
console.log("A téglalap kerülete " + (parseInt(magassag) + parseInt(szelesseg)) * 2 + "centiméter")
console.log("A téglalap területe " + magassag * szelesseg + " négyzet centiméter")
console.log(`A téglalap területe ${parseInt(magassag) * parseInt(szelesseg)} négyzet centiméter`)
