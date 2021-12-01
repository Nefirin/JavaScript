//
// Classical AND &&
// result = a && b;
//

console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  console.log( 'A pontos ido 12:30' );
}

// conversion
if (1 && 0) { // evaluated as true && false
  console.log( 'hamisra ertekelodik a feltetel, sose jutunk ide' );
}

//
// AND "&&" finds the first truthy value
// result = value1 && value2 && value3;
//

// Returns with the first falsy value

// if the first operand is truthy, AND returns the second operand:
console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5

// if the first operand is falsy, AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

alert( 1 && 2 && null && 3 ); // null