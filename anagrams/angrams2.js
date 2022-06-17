function anagrams(word, words) {
    let anagrams = words.filter(w => w.split('').sort().join('') === word.split('').sort().join(''));

    return anagrams;
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));