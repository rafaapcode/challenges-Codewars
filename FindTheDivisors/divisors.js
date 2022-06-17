function divisors(integer) {
    let d = 0;
    let dArr = [];
   
    for (let i = 2; i < integer; i++) {
        if (integer % i == 0) {
            d += 1;
           dArr.push(i);
        }
    }


    if(d === 0) {
        return `${integer} is prime`;
    }else{
        return dArr;
    }
    

};

console.log(divisors(13));