
function letraqNaoRepete2(palavra) {
    let mapeamento = new Map();

    // Transformando a string em Array  e percorrendo cada elemento do array
    palavra.split("").forEach((e) => {

        // Verificando se o nosso MAP ja possui alguma chave repetida, no caso seria uma LETRA
        if (mapeamento.has(e)) {

            // Estou atualizando com o set e com o get estou pegando o valor da chave e somando mais 1
            mapeamento.set(e, mapeamento.get(e) + 1);

        } else {

            // Atualiazando o valor da minha chave para 1.
            mapeamento.set(e, 1);

        }
    });

    // Estou pegando a chave e valor do nosso MAP, e o OF pega todos os valores do MAP.
    for (let [key, value] of mapeamento) {
        if (value === 1) {
            console.log(key);

            // O break irá me retornar somente o primeiro elemento que entrar nessa
            break;
        }
    }

    // console.log(mapeamento);
}

letraqNaoRepete2("GOOGLE");


