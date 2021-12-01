//ez egy function deklaráció, ilyenkor nem fut le afunction test
function alert2() {
    console.log("Hello");
    console.log("Hello");
}

//invokáció ez futtatja a function testet
alert2();

function alert3() {
    alert2()
    console.log("szia");
}

alert3();

function fn() {
    let a = 1;
    console.log("fn", a);
    function masikFn() {
        console.log("MasikFn");
    }
    masikFn()
}

fn();

function dobas() {
    let result = Math.floor(Math.random() * 6) + 1;
    console.log(result);
}

dobas();

function osszegzes() {
    let number = [1, 2, 3, 10];
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += number[i];
    }
    console.log(sum);
}
osszegzes();
osszegzes();
osszegzes();


function alert4(message1, message2, message3,) {
    console.log(message1, message2, message3,);
}

alert4("szioka");

/*
function felépítése:
[keyword] [fuggvény neve] [(formális paraméter lista)] [{ eljárás test}]
function fuggveny-neve (a, b, c){
    test
}*/

alert4("Szioka", "nyaloka", "hellóka")