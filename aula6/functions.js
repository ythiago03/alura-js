/* lista de jogadores */

var jogadores = [{
    foto: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg',
    nome:'Jorge',
    vitorias:0,
    empates:0,
    derrotas:0,
    pontos:0,

},{
    foto: 'https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg',
    nome:'Marcos',
    vitorias:0,
    empates:0,
    derrotas:0,
    pontos:0,
},{
    foto: 'https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_960_720.jpg',
    nome:'Ana',
    vitorias:0,
    empates:0,
    derrotas:0,
    pontos:0,
}]

/* adicionar jogador */

function addJogador(){
    
    var nomeDoJogador = document.getElementById('name').value//pega os valores do input
    var imgDoJogador  = document.getElementById('img').value
    if(imgDoJogador == ""){//condição para caso não coloque foto no input, apareça uma foto de icone
        jogadores.push({
            foto: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
            nome: nomeDoJogador,
            vitorias:0,
            empates:0,
            derrotas:0,
            pontos:0,})
            exibe(jogadores) 
          
    } else{//caso tenha colocado uma foto no input
            jogadores.push({
            foto: imgDoJogador,
            nome: nomeDoJogador,
            vitorias:0,
            empates:0,
            derrotas:0,
            pontos:0,})
            exibe(jogadores)   
    }   
    document.getElementById('name').value = ""
    document.getElementById('img').value = ""
    
}


/* colocando os pontos na tela */

function exibe(jogadores){
   
            var element = ""
            for(var i = 0; i < jogadores.length; i++){
                element +=    "<tr>"  
                element +=     " <td><img src='" + jogadores[i].foto + "'></td>"
                element +=     " <td>" + jogadores[i].nome + "</td>"
                element +=      "<td>" + jogadores[i].vitorias + "</td>"
                element +=      "<td>" + jogadores[i].empates + "</td>"
                element +=      "<td>" + jogadores[i].derrotas + "</td>"
                element +=      "<td>" + jogadores[i].pontos + "</td>"
                element +=      "<td><button onClick='adicionarVitoria(" + i +")'>Vitória</button></td>"
                element +=      "<td><button onClick='adicionarEmpate(" + i +")'>Empate</button></td>"
                element +=      "<td><button onClick='adicionarDerrota(" + i +")'>Derrota</button></td>"
                element +=      "</tr>"
        }
        var table = document.getElementById('tabelaJogadores')
        table.innerHTML = element
    
    }

    exibe(jogadores)

/* Calcula os pontos */

function calcularPontos(jogador){
    var pontos = jogador.vitorias * 3 + jogador.empates
    jogador.pontos = pontos
}


/* adiciona vitória ao jogador selecionado e adiciona derrota aos outros jogadores */

 function adicionarVitoria(i) {
        jogadores[i].vitorias++
        calcularPontos(jogadores[i])
        for (pt = 0; pt < jogadores.length; pt++) {
        if (jogadores[pt].nome !== jogadores[i].nome) {
            jogadores[pt].derrotas++
        }
        }
        exibe(jogadores)
  }

  function adicionarEmpate(i) {
    for (pt = 0; pt < jogadores.length; pt++) {
            jogadores[pt].empates++
            calcularPontos(jogadores[pt])
        }
        exibe(jogadores)
  }

  function adicionarDerrota(i) {
    jogadores[i].derrotas++
    
    for (pt = 0; pt < jogadores.length; pt++) {
    if (jogadores[pt].nome !== jogadores[i].nome) {
        jogadores[pt].vitorias++
        calcularPontos(jogadores[pt])
    }
    }
    exibe(jogadores)
}

  function clean(i){
    for (i = 0; i < jogadores.length; i++) {
        jogadores[i].vitorias = 0
        jogadores[i].derrotas = 0
        jogadores[i].empates = 0
        jogadores[i].pontos = 0
      }
      exibe(jogadores)
}
