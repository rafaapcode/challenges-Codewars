// function createPhoneNumber(arr) {
//     let three = arr.slice(0, 3);
//     let str3 = three.map(item => item.toString());
//     let rest = arr.slice(3);
//     let strRest = rest.map(item => item.toString());
//     strRest.splice(3, 0, "-");

//     let num = "";
//     let resNum = "";
//     for (let i of three) {
//         num = num + i
//     }
//     for (let j of strRest) {
//         resNum = resNum + j;
//     }


//     return `(${num}) ${resNum}`
// }

// console.log(createPhoneNumber());

// ------------------------------------------------------------------------------

function createPhoneNumber2(arr) {
    return arr.reduce((p, c) => p.replace("x", c), "(xxx) xxx-xxxx");
}

console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

function createPhoneNumber3(arr) {
    let formatNumber = "(xxx) xxx-xxxx";

    for (let i of arr) {
        formatNumber = formatNumber.replace("x", i);
    }

    return formatNumber;

}

console.log(createPhoneNumber3([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));