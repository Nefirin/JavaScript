let valtozo_neve = "valtozo erteke"; //string karakter lanc
// char "a" 'a' "abc"
valtozo_neve[2]; //így elérek egy vagy több karaktert a változóban
valtozo_neve.includes("megmondja, hogy valami benne van e a változóban"); 
valtozo_neve.includes("  "); //minden stringnek eleme az üres string
valtozo_neve.indexOf("o"); //megnézi, hogy hol van a változóban valami ha minusz egyet ad vissza akkor nincs benne
valtozo_neve.slice(4); //attól a akraktertől amit megadok elkezdi levágni a stringet
valtozo_neve.slice(4, 7); //így meghatom, hogy meddig tartson a kivágás
" hello ".trim() //másik opciók trimStart trimEnd ez levágja a spaceket
'a'.charCodeAt() // megnézi, hogy az alap 128 bites táblázatnak része e az adott karakter
Infinity //egy olyan sázmot ad meg ami mindennél nagyobb
Number.NEGATIVE_INFINITY //ha egy szám kell ami mindnennél kisebb
let amITrue = true;

//boolean(), !!
//0, NaN, undefined, null, "" => falsy =>false

let ertekadas = "";

// == megnézi, hogy a két érték ugyan az e. ezt ne használd emrt néz típus konverziótis amiből lehet gond.
// === megnézi, hogy teljesen ugyan az e de nem csinál típus konverziót
// Not euqal != SOHA ne használdmert ez is csinál típus konverziót
// Strict not equal !==

//remainder % megnézi, hogy mennyi maradékot ad pl 100 % 1
//Increment n++. van egy változóm amihez hozzá ad egyet de az eredeti értékkel tér vissza
// ++n ugyan az de a növelt értékkel tér vissza ezek ciklusoknál fontos dolgok
//ennek a párja n-- és --n
//unary operátor ami csak egy paraméterrel dolgozik pl.: !false ez akkor van amikor a +-t arra használom, hogy a stringből numbert csináljak pl.: +"2" a - minusz is ilyan
//exponential 2**3 => 8

//logikai operátorok: and && ; or || logical NOT !