

console.log("1) dodawanie  2) odejmowanie  3) mnozenie  4) dzielenie");
let operation = prompt("Wybierz działanie:");

if (operation == 1) {
    console.log("Podaj 1 składnik dodawania: ");
    let a = parseInt(prompt("Dodaj pierewszy składnik dodawania: "));
    console.log("Podaj 2 składnik dodawania: ");
    let b = parseInt(prompt("Dodaj 2 składnik dodawania: "));

    console.log("Suma "+ a + " i " + b + " wynosi: " + (a + b));
}

if (operation == 2) {
    console.log("Podaj 1 mnożnik:");
    let a = parseInt(prompt("Dodaj 1 mnożnik:"));
    console.log("Podaj 2 mnożnik:");
    let b = parseInt(prompt("Podaj 2 mnożnik:"));

    console.log("Iloczyn " + a + " i " + b + " wynosi: " + (a * b));

}

if (operation == 3) {
    console.log("Podaj  dzielna:");
    let a = parseInt(prompt("Dodaj  dzielna:"));
    console.log("Podaj  dzielnik:");
    let b = parseInt(prompt("Podaj dzielnik :"));

    if (b == 0) {
        console.log("Błędne działanie!")
    } else {
        console.log("Iloraz " + a + " i " + b + " wynosi: " + (a / b));
    }

  
}