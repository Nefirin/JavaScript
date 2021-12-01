/*let felhaszn = {
    neve: 'Dávid Farkas',
    szulido: 1996,
    userID: 'Nefirin',
    email: 'david.b.farkas@gmail.com',
  }

  console.log(felhaszn);
  console.log(felhaszn.email);

  let kosar = {
    termek: 'Apple iPhone tok',
    gyarto: "MagSafe",
    ar: 12383,
    currency: "Ft",
    darab: 1,
  };

  console.log(kosar);
  console.log(kosar.ar);
*/

let szelesseg = window.prompt("Milyen magas a doboz?");
let magassag = window.prompt("Milyen széles a doboz");
terulet = szelesseg * magassag;
kerulet = (parseInt(szelesseg) + parseInt(magassag)) * 2
let teglalap = {
    szelesseg: szelesseg,
    magassag: magassag,
    kerulet: kerulet,
    terulet: terulet,
    //kerulet: magassag * 2 + szelesseg * 2,
    //terulet: magassag * szelesseg
};
console.log(teglalap.magassag * teglalap.szelesseg);
console.log((teglalap.magassag + teglalap.szelesseg) * 2);


let szam1 = window.prompt ("szam1");
let szam2 = window.prompt ("szam2");
let muvelet = window.prompt ("muvelet?");
if (muvelet.includes("+")) {
    window.alert (szam1 + szam2)
} else if (muvelet.includes("-")) {
    window.alert (szam1 - szam2)
} else if (muvelet.includes("/")) {
    window.alert (szam1 / szam2)
} else if (muvelet.includes("*")) {
    window.alert (szam1 * szam2)
};
    