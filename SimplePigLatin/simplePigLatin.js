function pigLatin(str) {

    // Transformando em ARRAY 
    let strArr = str.split(" "); // ["ipg", "Latin", "is", ...];
    let arrNew = [];

    let arrPig = strArr.map(el => {
        if(el === "!" || el === "?" || el === "."){
            arrNew.push(el);
        }else{
            arrNew.push(el.slice(1) + el.slice(0,1) + "ay");
        }
     
    });

    return arrNew.join(" ");

}

pigLatin("Pig latin is cool !")