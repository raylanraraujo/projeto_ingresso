let pistaDisponivel = parseInt(document.getElementById('qtd-pista').textContent);
let superiorDisponivel = parseInt(document.getElementById('qtd-superior').textContent);
let inferiorDisponivel = parseInt(document.getElementById('qtd-inferior').textContent);

function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;

    if (tipo == 'inferior' && inferiorDisponivel >= 1){
        let resultado = inferiorDisponivel - quantidade;
        inferiorDisponivel = resultado;
        document.getElementById('qtd-inferior').innerHTML = inferiorDisponivel;
    } else if (tipo == 'superior' && superiorDisponivel >= 1){
        let resultado = superiorDisponivel - quantidade;
        superiorDisponivel = resultado;
        document.getElementById('qtd-superior').innerHTML = superiorDisponivel;
    } else if (tipo == 'pista' && pistaDisponivel >= 1){
        let resultado = pistaDisponivel - quantidade;
        pistaDisponivel = resultado;
        document.getElementById('qtd-pista').innerHTML = pistaDisponivel;
    } else {
        alert('Não há ingressos desse tipo disponíveis');
    }
}
