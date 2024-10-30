function changeWord() {
    const word = document.getElementById('word').value;
    const outputElement = document.getElementById("outputWord");
    let letter = "";

    for(let i=0; i<word.length; i++) {
        letter += word[word.length - i -1]
    }

    if(word == letter) {
        outputElement.textContent = "Termasuk Palindrom";
    } else {
        outputElement.textContent = "Tidak Termasuk Palindrom";
    }
}