function letterss(arr) {
    let alfa = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    // Primeira letra do array a ser analisado
    let firstLetter = arr[0];

    if(firstLetter == firstLetter.toLowerCase()){
        alfa = alfa.join(" ").toLowerCase().split(" ");
    }


    // Encontrando o começo do array a ser analisado, dentro do array referência
    let alfaFirst = alfa.indexOf(firstLetter);

    // Retornando um array correto para uma comparação
    alfa = alfa.splice(alfaFirst, arr.length + 1);

    for(let i = 0; i < alfa.length; i++) {

      if(arr.indexOf(alfa[i]) === -1) {
          return alfa[i];
      }

    }

}

console.log(letterss(["O","Q","R","S"]));
