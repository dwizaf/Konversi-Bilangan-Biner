function decimalToBinaryNegative() {
    let desimal = document.getElementById("desimalNegatif").value;
    const outputElement = document.getElementById("outputBinaryNegative");

    if (desimal < -127 || desimal > -1 || isNaN(desimal)) {
        outputElement.textContent = "Input harus antara -1 hingga -127";
        return;
    }

    let positif = -desimal;

    let biner = "";
    while (positif > 0) {
        let sisa = positif % 2;
        biner = sisa + biner;
        positif = Math.floor(positif / 2);
    }

    biner = biner.padStart(8, '0');

    biner = biner.split("").map(bit => bit === "0" ? "1" : "0").join("");

    let binerAngka = parseInt(biner, 2) + 1;
    biner = binerAngka.toString(2);

    biner = biner.padStart(8, '0').slice(-8); 

    outputElement.textContent = "Bilangan biner: " + biner;
}
