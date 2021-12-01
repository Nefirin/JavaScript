//memória területet foglal le a változó
//a nevet jellemzően aláhúzással vagy dollárral kezdjük a vaeiable-t utána az angol ABC betűit használhatjuk
//értéket is emgadhatunk ha nema dunk meg értéket akkor nincs értéke
let valtozo_nevet = 1234; /* deklaralva van egy valtozo kezdő értékkel */

console.log(valtozo_nevet);
valtozo_nevet = 345;

console.log(valtozo_nevet);

/*összeadás kivonás operátorok*/

valtozo_neve = 213 + 189;
console.log(valtozo_neve);
valtozo_neve = 200 - 1000;
console.log(valtozo_neve);

valtozo_masik = valtozo_neve;
console.log(valtozo_masik);

/*szorzás osztás operátorok */

valtozo_neve = 3 * 2;
console.log(valtozo_neve);
valtozo_neve = 10 / 5;
console.log(valtozo_neve);

/*maradék */
valtozo_neve = 10 % 3;
console.log(valtozo_neve);

/* előjelek: + és - */
valtozo_neve = +10;
valtozo_neve = 10;
valtozo_neve = -10;
console.log(valtozo_neve);


/*csoportosítás zárójelezés */

valtozo_neve = (3 + 2);
console.log(valtozo_neve);

valtozo_neve = 3 + 2 * 5;
console.log(valtozo_neve);
valtozo_neve = (3 + 2) * 5;
console.log(valtozo_neve);

window.alert(valtozo_neve);

/*meveletek valtozoval*/
let oszlop = 2;
let sor = 3;
let cellak_szama = 0;
cellak_szama = oszlop * sor;
window.alert(cellak_szama);

/* valtozok ertekenek csereje*/
let a = 5;
let b = 10;
let ideiglenes = 0;

ideiglenes = a; /*ideiglenes=5*/
a = b; /* a = 10*/
b = ideiglenes /* b = 5 */

/*szám négyzete*/
let negyzet = window.prompt(kell egy szám);
szam_negyzete = negyzet * negyzet;
console.log(szam_negyzete);