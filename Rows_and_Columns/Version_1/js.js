
let FirstNumber = parseInt(prompt("Podaj pierwszą liczbe"));
let SecondNumber = parseInt(prompt("Podaj drugą liczbe"));


function RowsAndColumnsIncrease (x, y) {
    while (x <= y){
        console.log(x);
        x = x + 1; 
     }
}

function RowsAndColumnsReduce (x, y) {
    while (x >= y){
        console.log(x);
        x = x - 1; 
     }
}

if (FirstNumber > SecondNumber) {
    RowsAndColumnsReduce(FirstNumber, SecondNumber);
}

else {
    RowsAndColumnsIncrease(FirstNumber, SecondNumber);
}
