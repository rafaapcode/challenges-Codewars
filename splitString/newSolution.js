function solution(str) {
    let i = 0;
    
    let result = [];

    if (str.length % 2 !== 0) {
        str = str + '_';
    }

 
    for(let i = 0; i < str.length; i += 3) {

        console.log("Aqui esta o I : " + i);

        let juntando = str[i] + str[i + 1] + str[i + 2];

        result.push(juntando);

    }

    console.log(result);
}


console.log(solution('abcdefghijk'));