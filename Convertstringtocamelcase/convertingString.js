function converting(str) {
    let strArr;

    let dashUnderscore = str.includes('-');
    if (!dashUnderscore) {
        strArr = str.split("_");

    } else {
        strArr = str.split("-");
        
    }

    let ccString = strArr[0];

    let capitalie = (str) => {
        
        return str[0].toUpperCase() + str.slice(1);
    }
    

    for(let i = 1; i < strArr.length; i++) {
        ccString += capitalie(strArr[i]);
    }

    return ccString;

}


converting("the-stealth-warrior");
