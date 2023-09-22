let Hoje = new Date();
let diasUteis = 7;
let novaData = DataAdd(Hoje, diasUteis);

function DataAdd(dataIni, diasUteis) {
    let dataAtual = new Date(dataIni);
    let diasAdicionados = 0;

    while (diasAdicionados < diasUteis) {
        dataAtual.setDate(dataAtual.getDate() + 1);

        if (dataAtual.getDay() !== 0 && dataAtual.getDay() !== 6) diasAdicionados++;
    }

    return dataAtual;
}

console.log(novaData);
