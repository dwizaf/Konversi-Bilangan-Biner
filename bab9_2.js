function decimalToBinary() {
    let desimal = document.getElementById("desimal").value;
    const outputElement = document.getElementById("output");

    if (desimal < 0 || desimal > 255 || isNaN(desimal)) {
        outputElement.textContent = "Input harus antara 0-255.";
        return;
    }

    let biner = "";

    while (desimal > 0) {
        let sisa = desimal % 2;
        biner = sisa + biner;
        desimal = Math.floor(desimal / 2);
    }
    
    outputElement.textContent = "Bilangan biner: " + biner;
}