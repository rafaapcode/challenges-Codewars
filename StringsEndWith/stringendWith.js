function solution(str, str2) {
    let arrStr = str.split("");
    let ref = str[str.length - str2.length];
    let indexRef = arrStr.lastIndexOf(ref);
    let lasts = arrStr.slice(indexRef);
    let lastsStr = lasts.join("");
 
    return lastsStr == str2 || str2 === "";
    
}

console.log(solution('samurai', 'ai'));
