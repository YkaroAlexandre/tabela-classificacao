listaJogadores =[]

var elementoTabela = document.getElementById("tabelaJogadores");

// Exibir a tabela.
function exibirNaTela(){
    
    elementoTabela.innerHTML = ''

    for(var i = 0; i < listaJogadores.length; i++){
        var jogador = listaJogadores[i];
        elementoTabela.innerHTML += 
        `<tr>
            <td>${jogador.nome}</td>
            <td>${jogador.vitorias}</td>
            <td>${jogador.empates}</td>
            <td>${jogador.derrotas}</td>
            <td>${jogador.pontos}</td>
            <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
            <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
            <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
        </tr>`
    }
};

function adicionarVitoria(indiceJogador){
    jogador = listaJogadores[indiceJogador]
    jogador.vitorias ++;
    jogador.pontos += 3;
    exibirNaTela();
};

function adicionarEmpate(indiceJogador){
    jogador = listaJogadores[indiceJogador]

    jogador.empates ++;
    jogador.pontos += 1;
    exibirNaTela();
};

function adicionarDerrota(indiceJogador){
    jogador = listaJogadores[indiceJogador]
    jogador.derrotas ++;
    exibirNaTela();
};

// Limpar os valores.
function limparDados(){
    for(var i = 0; i < listaJogadores.length; i++){
        jogador = listaJogadores[i];
        jogador.vitorias = 0
        jogador.empates = 0
        jogador.derrotas = 0
        jogador.pontos = 0

        exibirNaTela()
    }
}

// Adicionar um jogador na tabela.
function adicionarJogador(){
    var nome = prompt("Digite o nome do Jogador(a):")
    if(nome == '' || nome == null){
        alert("Nome não pode ser vazio, tente novamente")
        
    } else {
        var jogador = {
            nome: nome,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            pontos: 0
        }
        listaJogadores.push(jogador)
    
        exibirNaTela()

    }
    

}

function excluirJogador(){
    var indiceJogador = prompt("Digite a posição que o jogador está para remover da lista:")
    indiceJogador = parseInt(indiceJogador)
    console.log(typeof(indiceJogador), indiceJogador)
    if(indiceJogador=='' || indiceJogador == null){
        alert("Você não excluiu nenhum jogador.")
    } else if (listaJogadores.length == 0){
        alert("Não tem jogadores para remover")
    } else if (isNaN(indiceJogador)){
        alert("Digite um número.")
    } else if (listaJogadores.length< indiceJogador) {
        alert("Vecê digitou um valor inválido.")
    } else {
        listaJogadores.splice(indiceJogador-1,1)
        exibirNaTela()
    }
}