let phoneNumbers = [3630792765, 3630369549, 3620797249, 3670129465, 3630735165, 3630799685, 3630294765, 3630739572, 3630792388, 3630792947, 3630798965, 3630799284, 3630793325, 3630799685, 3630194265,];
let names = ['Bandobras Underhill', 'Robin Gardner', 'Isembold Whitfoot', 'Donnamira Galbassi', 'Bungo Baggins', 'Will Sandyman', 'Isengrim Proudfoot', 'Frodo Baggins', 'Amaranth Gaukrogers', 'Trahand Bunce', 'Will Sandyman', 'Halfred Goodchild', 'Bilbo Baggins', 'Will Sandyman', 'Belba Sandheaver'];

// Emailek, amikkel nem kell semmit csinalni egyelore
let emails = ['paulnoel21@agung002.com', 'weegrah1@eeothno.com', 'johnjohn69@hungta2.com', 'johnjohn69@hungta2.com', 'yuzhakova1960@hungta2.com', 'yuzhakova1960@hungta2.com', 'lemonkakiska@cggup.com', 'lemonkakiska@cggup.com', 'bd8axwy@cuendita.com', 'bd8axwy@cuendita.com', 'gasg@supok.site', 'gasg@supok.site', 'zaqman@pianoxltd.com', 'zaqman@pianoxltd.com'];

function createPhoneBook(names, phoneNumbers) {
    let telefonKonyv = [];

    for (let i = 0; i < names.length; i++) {
        let person = {
            name: names[i],
            mobile: phoneNumbers[i],
        }
        telefonKonyv.push(person)
    }
    return telefonKonyv;
}

let phoneBook1 = createPhoneBook(names, phoneNumbers);

function addPerson(currentPhoneBook, nev, phoneNumber) {
    //let telefonKonyv = [currentPhoneBook];
    let person = {
        name: nev,
        mobile: phoneNumber,
    }
    currentPhoneBook.push(person);
    return person;

}
let me = "Dávid";
let teloSzam = 36706010442;
let phoneBook2 = addPerson(phoneBook1, me, teloSzam);
console.log(phoneBook1);

function findMobile(phoneBook, mobileNum) {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].mobile === mobileNum) {
            return phoneBook[i];
        }
    }

}
findMobile(phoneBook1, 3630793325);

//return phoneBook1.find(bejegyzés )


function findMobile2(phoneBook, mobileNum) {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].mobile === mobileNum) {
            return i;
        }
    }
    return -1
}
console.log(findMobile2(phoneBook1, 3630793325));

function findMobileName(phoneBook, mobileName) {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name === mobileName) {
            return i;
        }
    }
    return -1
}
console.log(findMobileName(phoneBook1, "Isembold Whitfoot"));


function findMobileNameNum(phoneBook, mobileName) {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].mobile === mobileName) {
            return i;
        } else if (phoneBook[i].name === mobileName) {
            return i;
        }
    }
    return -1
}
console.log(findMobileNameNum(phoneBook1, "Isembold Whitfoot"));

function indexByMobile(phoneBook, mobile) {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].mobile === mobile) {
            return i;
        }
    }

    return -1;
}

function remove(phoneBook, mobile) {
    let index = indexByMobile(phoneBook, mobile);
    if (index > -1) {
        let removedEntry = phoneBook[index]
        phoneBook.splice(index, 1);
        return removedEntry;
    }
    return null;
}

function addField(phoneBook, mobile, field, value) {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].mobile === mobile) {
            phoneBook[i][field] = value;
            return phoneBook;
        }
    }
    return null
}

function addField2(phoneBook, mobile, field, value) {
    let entry = findMobile(phoneBook, mobile);
    if (entry != null) {
        entry[field] = value;
        return entry
    }
}
console.log(addField2(phoneBook1, 3630793325, "email", "email@email.com"));

function modify(phoneBook, mobile, field, value) {
    let entry = findMobile(phoneBook, mobile);
    if (field === "mobile") {
        return "mobil számot nem módosítunk"
    } else {
        entry[field] = value;
        return entry
    }
    return "Nincs ilyen mező"
}
console.log(modify(phoneBook1, 3630793325, "email", "email@email.123123com"));
console.log(modify(phoneBook1, 3630735165, "mobile", "email@email."));

/*function formatPhoneNumber2(mobile) {
    mobile = String(mobile);
    let formatedPhoneNumber = "+3" + mobile.splice(1, 1) + " " + mobile.splice(2, 3) + " " + mobile.splice(4, 7) + " " + mobile.splice(8, 1)
    return formatedPhoneNumber;
}
console.log(formatPhoneNumber2(06706010442));*/

function formatPhoneNumber(mobile) {
    mobile = String(mobile);
    return "+" + mobile.slice(0, 2) + " " + mobile.slice(2, 4) + " " + mobile.slice(4, 8) + " " + mobile.slice(8, 11);
}
console.log(formatPhoneNumber(36706010442));

function name(phoneBook) {
    let hobbitkak = [];
    for (let i = 0; o < phoneBook.length; i++) {
        of (phoneBook[i].name.includes("Baggins")) {
            hobbitkak.push(phoneBook[i]);
        }
    }
    return hobbitkak
}

phoneBook[i].name + formatPhoneNumber(phoneBook[i].mobil)