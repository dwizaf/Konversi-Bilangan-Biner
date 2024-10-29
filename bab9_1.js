function binaryToDecimal() {
    let binaryInput = document.getElementById("biner").value;
    const outputElement = document.getElementById("outputbiner");
    
    if (binaryInput.length > 8 || binaryInput.length < 8 || !/^[01]+$/.test(binaryInput)) {
        outputElement.textContent = "Masukkan bilangan biner 8 digit dan hanya mengandung 0 atau 1.";
        return;
    }
    
    let decimal = 0;
    const length = binaryInput.length;

    for (let i = 0; i < length; i++) {
        if (binaryInput[i] === '1') {
            decimal += Math.pow(2, length - i - 1);
        }
    }

    outputElement.textContent = "Bilangan desimal: " + decimal;
}
