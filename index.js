//     Objetivo:
// Ter uma página HTML que exiba pela sua idade se seu voto é opcional, obrigatório ou não pode votar.
// Regras de cálculo.
// Maiores de 16 anos e menores de 18 anos, voto opcional;
// Menores de 16 anos, não pode votar;
// Maiores de 18 anos, voto obrigatório;
// Critérios de Aceite:
// Ser apresentado na tela o resultado do tipo do voto do usuário conforme a idade informada.
let resultado = document.querySelector('#resultado')
let date = parseInt.document.querySelector('#idade')
let name = document.querySelector('#nome')

function classificacaovoto() {
    if (idade.value & nome.value != '' ) {
        let calculo = document.getElementById('idade').value
        if (calculo >= 17 & calculo <= 18) {
            resultado.innerHTML = 'Maiores de 16 anos e menores de 18 anos, voto opcional'
        } else if (calculo <= 16) {
            resultado.innerHTML = 'Menores de 16 anos, não pode votar'
        } else if (calculo >= 18)  {
            resultado.innerHTML = 'Maiores de 18 anos, voto obrigatório'
        }
    }
    else {
        alert('Preencha os campos')
        limpar()
    }
}
function limpar() {
    document.getElementById('idade').value = ""
    document.getElementById('nome').value = ""
    document.getElementById('resultado').innerHTML = ""
}
