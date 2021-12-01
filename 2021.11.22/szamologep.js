let solution = Math.floor(Math.random() * 10) + 1;

alert(solution);
let guess = Number(prompt("?"));

if (guess == solution) {
    alert("nyertel")
} else {
    if (solution - guess == 2) {
        guess = prompt("közel van a megoldás");
    } else if (solution - guess == -2) {
        guess = prompt("kicsit nagyobb");
    }

    if (guess == solution) {
        alert("nyertel")
    } else {
        alert("nem nyertel")
    }
}