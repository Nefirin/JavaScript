function osszead (a, b) {
    return a + b;
}

function kivon (a, b) {
    return a - b;
}

function szamologep (a, b, muvelet) {
    return muvelet(a, b);
}


szamologep(1, 2, function(a, b) {return a / b});
szamologep(1, 2, function(a, b) {return a * b});
szamologep(2, 8, (a, b) => a ** b);


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no()
}

function show0k() {
    alert("You damn fool!");
}

function showCancel() {
    alert("Phew you almost removed everything!");
}

