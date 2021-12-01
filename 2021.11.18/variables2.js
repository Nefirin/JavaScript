let kosar; /*nincs kezdo ertek, nincs kezdo allapot, nincs tipusa */
/* a kosar felvesz egy "undefined" értéket */
/*console.log(kosar);

kosar = 5;
console.log(kosar);

let nev = window.prompt("Mi a neved ?");
window.alert(nev);
console.log(nev);

elso_szam = 3;
masodik_szam = 5;
console.log(elso_szam + masodik_szam);

let szul_ido = window.prompt("Mikorszülettél?");
let anyu_szul_ido = window.prompt("Mikor születettet anyud ?");
console.log(szul_ido - anyu_szul_ido);


let kor_terulet;
let kor_kerulet;
let kor_sugar = 5;
let PI = 3.14;

kor_kerulet = 2 * kor_sugar * PI;
kor_terulet = kor_sugar * kor_sugar * PI;

console.log(kor_kerulet);
console.log(kor_terulet);*/

/*console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

let szoveges_valtozo = "Hello World";
console.log(szoveges_valtozo);
console.log(szoveges_valtozo.charAt(0));
console.log(szoveges_valtozo.charAt(1));

console.log(szoveges_valtozo[0]);

let elso_karakter = szoveges_valtozo[0];
console.log(elso_karakter);

let gyumolcs1 = "Alma";
let gyumolcs2 = "Korte";

let gyumolcsok = gyumolcs1 + gyumolcs2;
console.log(gyumolcsok);
console.log(gyumolcs1 + " " + gyumolcs2);

console.log(gyumolcs1.length);
console.log(gyumolcs2.length);
console.log(gyumolcsok.length);
console.log("Hello World".length);

let hosszu_szoveg =  "before the operator and one after th"+
"before the operator and one after th"+
"before the operator and one after th";
 
let hosszu_szoveg2 = " before the operator and one after th"\
" before the operator and one after th"\
" before the operator and one after th";

console.log(hosszu_szoveg);
console.log(hosszu_szoveg2)*/


let szul_ido = window.prompt("Mi a neved?");
window.alert("Hello" + " " + szul_ido);
console.log(szul_ido);

let szoveg_szam1 = "23";
let szoveg_szam2 = "5"
let vegeredmeny_szam = 0;

vegeredmeny_szam = Number(szoveg_szam1) + Number(szoveg_szam2);
console.log(vegeredmeny_szam);

vegeremeny_szam_parsolva = parseInt(szoveg_szam1) + parseInt(szoveg_szam2);
console.log(vegeremeny_szam_parsolva);

let nemszam = "4abc";
let szamlesze = Number(nemszam);
console.log(szamlesze);