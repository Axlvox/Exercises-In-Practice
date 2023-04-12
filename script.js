const ligarDesligar = (status) => {
    if (status === 'ligado') {
    status = 'desligado';
    console.log (`O motor está ${status}`);
    } else if (status === 'desligado') {
    status = 'ligado';
    console.log (`O motor está ${status}`);
    }
    return status;
}


console.log(ligarDesligar('ligado'));
console.log(ligarDesligar('desligado'));
