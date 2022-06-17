function converting(str) {
    let dash = str.includes("-");
    let witoutSeparator = !dash ? str.split("_") : str.split("-");
    let firstWord = witoutSeparator[0];
    let newStr = [];
    let strCamel = [];

    for (let i = 1; i < witoutSeparator.length; i++) {
        let el = witoutSeparator[i];
        let newarr = el.split("")
        newStr.push(newarr)
    }

    for (let j in newStr) {
        let i = Number(j);
        let sentences = newStr[i];
        let firstLetter = sentences[0];
        let letterUpper = firstLetter.toUpperCase();

        sentences.splice(0, 1, letterUpper);
        let phraseSentence = sentences.join("");
        strCamel.push(phraseSentence);
    }

    strCamel.unshift(firstWord);
    
    return strCamel.join("");

}

console.log(converting("the-stealth-warrior"));