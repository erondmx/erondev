
document.getElementById('calcular').addEventListener('click', function() {
    var perdaAnterior = parseFloat(document.getElementById('perdaAnterior').value);
    var lucroDesejado = parseFloat(document.getElementById('lucroDesejado').value);
    var odd = parseFloat(document.getElementById('odd').value);
    if (!isNaN(perdaAnterior) && !isNaN(lucroDesejado) && !isNaN(odd) && odd > 1) {
        var valorApostar = ((perdaAnterior + lucroDesejado) / (odd - 1)).toFixed(2);
        document.getElementById('resultado').innerText = 'Valor a apostar: R$ ' + valorApostar;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
    }
});
