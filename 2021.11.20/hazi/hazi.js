let randomSzam = Math.floor(Math.random() * 10);
let felhasznaloszam = window.prompt("Hányra gondolam 1 és 10 között?");
if (felhasznaloszam == randomSzam) {
    window.alert("gratula! eltaláltad!");
} else if (felhasznaloszam + 1 == randomszam) {
    window.alert ("közel vagy")
} else if (felhasznaloszam - 1 == randomszam) {
    window.alert ("Kicsit nagyobb")
} else if (felhasznaloszam + 2 == randomszam) {
    window.alert ("közel vagy")
} else if (felhasznaloszam - 2 == randomszam) {
    window.alert ("Kicsit nagyobb")
} else window.alert("sztrapacska pózerkém")