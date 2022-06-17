function split(str) {
    if (str.length % 2 !== 0) {
        str = str + "_";
    }
    str = str.split(" ");

    let arr = [];
    let newArray = [];


    for (let i = 0; i < str[0].length; i++) {
        arr.push(str[0][i] + str[0][i + 1]);
    }

    arr.pop();

    for (let j in arr) {
        let i = Number(j);

        if(i % 2 === 0) {
            newArray.push(arr[i]);
        }
    }

    return newArray;
}

split('abc');
console.log(split('abcdefg'));