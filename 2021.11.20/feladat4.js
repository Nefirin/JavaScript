let a = window.prompt("kérek egy számot");
let b = window.prompt("aggyá egy számot");

if (Number(a) > Number(b)) {
    window.alert(a + " nagyobb mint " + b)
} else if (Number(b) > Number(a)) {
    window.alert(b + " nagyobb mint " + a)
} else {
    window.alert(a + " és " + b + " egyenlő")
}