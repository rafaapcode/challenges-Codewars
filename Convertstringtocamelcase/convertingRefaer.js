function converting(str) {
    let dash = str.includes("-");
    let witoutSeparator = !dash ? str.split("_") : str.split("-");
    let firstWord = witoutSeparator[0];
    let newStr = [];

    for(let i = 1; i < witoutSeparator.length; i++) {
        let str = witoutSeparator[i];
        let firstLetter = str[0].toUpperCase();

       newStr.push(firstLetter + str.slice(1));
    }

    newStr.unshift(firstWord);

    return newStr.join('');
}

console.log(converting("the-stealth-warrior"));