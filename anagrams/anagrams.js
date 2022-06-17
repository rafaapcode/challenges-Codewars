function anagrams(word, words) {
    words = words.filter(item => item.length === word.length);
    let orderWord = word.split("").sort().join("");
    let anagrams = [];
    for (let i of words) {
        if (i.split("").sort().join("") === orderWord) {
            anagrams.push(i);   
        }
    }

    return anagrams;

}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));

