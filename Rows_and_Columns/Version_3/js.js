let number = parseInt(prompt("Wybierz pierwszą liczbe"));

for (let y = 0; y < number; ++y) {

    let line = "";

    for (let spaces = number - y; spaces > 0; --spaces) {
        line += ' ';
    }

    for (let x = 1; x <= y; ++x) {
        line += x;
    }

    for (let x = y -1; x >= 1; --x) {
        line += x;
    }

    console.log(line);

}
