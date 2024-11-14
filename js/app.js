let pistaDisponivel = parseInt(document.getElementById('qtd-pista').textContent);
let superiorDisponivel = parseInt(document.getElementById('qtd-superior').textContent);
let inferiorDisponivel = parseInt(document.getElementById('qtd-inferior').textContent);

function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;


    if (tipo == 'inferior' && inferiorDisponivel >= 1){
        if ( quantidade > inferiorDisponivel){
            alert('Quantidade excede à quantidade disponível');
        } else {
            alert('Compra realizada com sucesso.')
            let resultado = inferiorDisponivel - quantidade;
            inferiorDisponivel = resultado;
            document.getElementById('qtd-inferior').innerHTML = inferiorDisponivel;
        }

    } else if (tipo == 'superior' && superiorDisponivel >= 1){
        if (quantidade > superiorDisponivel){
            alert('Quantidade excede à quantidade disponível');
        } else {
            alert('Compra realizada com sucesso.')
            let resultado = superiorDisponivel - quantidade;
            superiorDisponivel = resultado;
            document.getElementById('qtd-superior').innerHTML = superiorDisponivel;  
        }
    } else if (tipo == 'pista' && pistaDisponivel >= 1){
        if (quantidade > pistaDisponivel){
            alert('Quantidade excede à quantidade disponível');
        } else {
            alert('Compra realizada com sucesso.')
            let resultado = pistaDisponivel - quantidade;
            pistaDisponivel = resultado;
            document.getElementById('qtd-pista').innerHTML = pistaDisponivel;
        }
    } else {
        alert('Não há ingressos desse tipo disponíveis');
    }

    document.getElementById('tipo-ingresso').value = 'esccolhaTipo';
    document.getElementById('qtd').value = '';
}


/*
Resolução dos instrutores

function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = document.getElementById('qtd').value;

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
     if ( qtd > qtdPista) {
         alert('Quantidade indiponível para tipo pista');
     } else {
         qtdPista = qtdPista - qtd;
         document.getElementById('qtd-pista').textContent = qtdPista;
         alert('Compra realizada com sucesso!');
     } 
 }

 function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}

*/