
function alphanumeric(string) {
    //your code here
    if (!string) return false;
    if (string.length === 0) return false;
    let aux = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    for (let i of string) {
        if (!aux.includes(i)) {
            return false;
        }
        if (i === " ") {
            return false;
        }
    }

    return true;

}

console.log(alphanumeric("Mazinkaiser"));

console.log(alphanumeric("hello world_"));

console.log(alphanumeric("PassW0rd"));

console.log(alphanumeric("     "));
console.log(alphanumeric(""));
console.log(alphanumeric());



