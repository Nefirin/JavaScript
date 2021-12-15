class Cim {
    constructor(orszag, varos, iranyitoszam, utcanev, hazszam, emelet, ajto) {
        this.orszag = orszag;
        this.varos = varos;
        this.iranyitoszam = iranyitoszam;
        this.utcanev = utcanev;
        this.hazszam = hazszam;
        this.emelet = emelet;
        this.ajto = ajto;
    }
    teljesCim() {
        console.log(this.orszag + " " + this.varos + " " + this.iranyitoszam + " " + this.utcanév + " " + this.hazszam + " " + this.emelet + " " + this.ajto);
    }
    beallitIranyitoszam(iranyitoszam) {
        this.iranyitoszam = iranyitoszam
    }
    miAzIranyitoszam() {
        return this.iranyitoszam
    }
}

let cim1 = new Cim("Magyarország", "Budapest", 1149, "Nagy Lajos Király útja", 126, 2, 45,)
let cim2 = new Cim("Magyarország", "Budapest", 1048, "Farkas-erdő utca", 7, 4, 23,)

class Lofegyver {
    constructor(toltenytipus, sebzes, maxtarmeret, aktualistarmeret) {
        this.toltenytipus = toltenytipus;
        this.sebzes = sebzes;
        this.maxtarmeret = maxtarmeret;
        this.aktualistarmeret = aktualistarmeret;
    }
    lo() {
        if (this.aktualistarmeret > 0) {
            console.log("kilőtt 1 golyót");
            this.aktualistarmeret = this.aktualistarmeret - 1;
        } else { console.log("Nincs több töltény") }
    }
    tolt() {
        if (this.maxtarmeret > this.aktualistarmeret) {
            this.aktualistarmeret = this.maxtarmeret;
        } else {
            console.log("A tár már tele van")
        }
    }
}
let fegyver1 = new Lofegyver("6mm", 5, 6, 4);
let fegyver2 = new Lofegyver("9mm", 10, 9, 5);

class Ceg {
    constructor(cegjegyzekSzam, adoSzam, cegNev) {
        this.cegjegyzekSzam = cegjegyzekSzam;
        this.adoSzam = adoSzam;
        this.cegNev = cegNev;
    }
    beallitKapcsolattarto(Person) {
        this.kapcsolattarto = Person;
    }
    beallitSzekhely(Szekhelycim) {
        this.szekhelycim = Szekhelycim;
    }
    kiAKapcsolattarto() {
        console.log(this.kapcsolattarto)
    }
    miASzekhely() {
        console.log(this.szekhely);
    }

}
class Person {
    constructor(kapcsolattarto, phoneNumber) {
        this.kapcsolattarto = kapcsolattarto;
        this.phoneNumber = phoneNumber
    }

}
class SzekhelyCim {
    constructor(szekhely) {
        this.szekhely = szekhely;
    }
}

let ceg1 = new Ceg(123, 321, "FD.EV");
let kapcsolattarto = new Person("Dávid", 06706010442);
ceg1.beallitKapcsolattarto(kapcsolattarto);
let szekhelyCim = new SzekhelyCim("Budapest");
ceg1.beallitSzekhely(szekhelyCim);
