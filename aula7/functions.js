var cartas = [{
        nome:'Rudeus Greyrat',
        foto: 'https://dk2dv4ezy246u.cloudfront.net/widgets/sS0Tz7iyNkB_large.jpg',
        descricao: 'Rudeus Greyrat é o principal personagem de Mushoku Tensei. Seu corpo atual possui uma grande afinidade com a magia, mesmo quando criança.',
        atributos:{
            ataque: 10,
            defesa:14,
            magia:18,
        }
    },{
        nome:'Eris Boreas',
        foto: 'https://i.pinimg.com/736x/fa/98/1e/fa981e322881fea1925c6e88549ed8dd.jpg',
        descricao: 'Eris Boreas Greyra é uma garota nobre e parente distante de Rudeus. Ela é uma personagem tsundere com um temperamento curto, mas tem potencial no estilo Sword-God.',
        atributos:{
            ataque: 17,
            defesa:13,
            magia:8,
        }
    },{
        nome:'Ruijerd Superdia',
        foto: 'https://i.pinimg.com/736x/36/90/39/3690393091a5c3dffdff8bcfc472deaa.jpg',
        descricao: 'Um demônio de 566 anos, e é o ex-líder do grupo Superd’s Warrior que já serviu sob o comando de Laplace com lealdade inabalável.',
        atributos:{
            ataque: 19,
            defesa:17,
            magia:3,
        }    
    },{
        nome:'Syphiette',
        foto: 'https://i.pinimg.com/originals/20/23/03/202303facba37e2b6ec6aec36f4f784e.jpg',
        descricao: 'Sylphiette é a amiga de infância de Rudeus que é parte humano, elfo e raça de feras. ',
        atributos:{
            ataque: 15,
            defesa:10,
            magia:15,    
        }
    },{
        nome:'Roxy Migurdia',
        foto: 'https://cdn.anime-planet.com/characters/primary/roxy-migurdia-1.jpg',
        descricao: 'Roxy Migurdia é uma talentosa Migurd Mage e ex-tutora de magia. ',
        atributos:{
            ataque: 15,
            defesa:12,
            magia:17,   
        }
    },{
        nome:'Paul Greyrat',
        foto: 'https://quotetheanime.com/wp-content/uploads/elementor/thumbs/Paul-Greyrat-Profile-pezqdx1uzofcgmk1l5gag9ntbxhdlu47fxi3nv4zns.jpg',
        descricao: 'Paul Greyrat, nascido Paul Notos Greyrat, é o pai de Rudeus Greyrat, Norn Greyrat e Aisha Greyrat. Ele é um homem talentoso que se tornou avançado em todas as três artes da espada em uma idade jovem.',
        atributos:{
            ataque: 18,
            defesa:14,
            magia:2,
        }
    },{
        nome:'Zenith Greyrat',
        foto: 'https://i.pinimg.com/736x/67/1e/d0/671ed03ed806ebdadf4c5e8dcca4cdf5.jpg',
        descricao: 'Zenith Greyrat, nascida Zenith Latreia, é esposa de Paul Greyrat e mãe de Rudeus Greyrat e Norn Greyrat. Ela deixou sua casa nobre, a Latreia devido ao seu estilo de vida restritivo, e procurou se tornar uma aventureira com suas habilidades em magia de cura.',
        atributos:{
            ataque: 6,
            defesa:9,
            magia:12,
        }
    },{
        nome:'Lilia',
        foto: 'https://quotetheanime.com/wp-content/uploads/2021/06/lily-2.jpg',
        descricao: 'É uma empregada doméstica da casa Greyrat . Ela era colega de classe de Paul em um dojo de espadachins. Uma lesão incapacitante a força a deixar sua posição como guarda da princesa, e ela se torna empregada de Paul e Zenith .',
        atributos:{
            ataque: 7,
            defesa:4,
            magia:2,
        }
    },{
        nome:'Orsted',
        foto: 'https://quotetheanime.com/wp-content/uploads/elementor/thumbs/orsted-pbnrsy21zv4go9wv6tzhwbl8n099e12ofyowlqj72g.jpg',
        descricao: 'O deus dragão da atual geração. Ele é um membro da tribo dos dragões, humanóides com habilidades poderosas, e é considerado o mais forte de sua espécie.',
        atributos:{
            ataque: 19,
            defesa:18,
            magia:19,
        }
    },{
        nome:'Nanahoshi Shizuka',
        foto: 'https://cdn.anime-planet.com/characters/primary/shizuka-nanahoshi-1-285x400.webp?t=1639771083',
        descricao: 'É uma das pessoas que Rudeus salvou de ser atropelado por um caminhão em sua vida anterior.',
        atributos:{
            ataque: 9,
            defesa:9,
            magia:0,
        }
    },{
        nome:'Zanoba Shirone',
        foto: 'https://cdn.anime-planet.com/characters/primary/zanoba-shirone-1.webp?t=1639769198',
        descricao: 'É o ex-terceiro príncipe e Miko do Reino de Shirone. Com uma força e defesa superior a raça humana.',
        atributos:{
            ataque: 18,
            defesa:18,
            magia:2,
        }
    }]

    var cartaMaquina
    var cartaJogador

    
function sortearCarta() {
        var cartaMaquinaSorteio = parseInt(Math.random() * 12)
        cartaMaquina = cartas[cartaMaquinaSorteio]


        var cartaJogadorSorteio = parseInt(Math.random() * 12)

        while(cartaMaquinaSorteio == cartaJogadorSorteio){
            var cartaJogadorSorteio = parseInt(Math.random() * 12)
        }
     cartaJogador = cartas[cartaJogadorSorteio]
     console.log(cartaJogador)

     document.getElementById('btnJogar').disabled = false
     document.getElementById('btnSortear').disabled = true

     exibirAtributos()
     mostrarCard()
    }
    
function exibirAtributos(){
        var opcao = document.getElementById('opcoes')
        var opcaoTexto = ''

        for(var atributo in cartaJogador.atributos){
           opcaoTexto += "<input type='radio' name='atributo' value='" + atributo + "' >" + atributo
           
        }
        opcao.innerHTML = opcaoTexto
    }

function obtemAtributoEscolhido(){

    var radioAtributo = document.getElementsByName('atributo')
    for(var i = 0; i < radioAtributo.length; i++){
        if(radioAtributo[i].checked == true){
            return radioAtributo[i].value
        }
    }

}

function jogar(){
   var atributoSelecionado = obtemAtributoEscolhido()

   var elementoResultado = document.getElementById('resultado')

   var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
   var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

   if(valorCartaJogador > valorCartaMaquina){
    elementoResultado.style.color = 'green'
       elementoResultado.innerHTML = 'Parabéns! Você venceu.'
   }else if(valorCartaJogador < valorCartaMaquina){
    
       elementoResultado.style.color = 'red'
    elementoResultado.innerHTML = 'Você Perdeu!'
   }else{
    elementoResultado.style.color = 'yellow'
       elementoResultado.innerHTML = 'Empate!'
   }
   console.log(cartaMaquina)
}

function mostrarCard(){
    var tag = "<img  src=" + cartaJogador.foto + " >"
    var text = "<p>" + cartaJogador.descricao + "</p>"
    var name = "<h2>" + cartaJogador.nome + "</h2>"
    var img = document.getElementById('img')
    var description = document.getElementById('text')
    var nome = document.getElementById('name')
    nome.innerHTML = name
    img.innerHTML = tag
    pegarAtributosCard()
    description.innerHTML = text
    document.getElementById('card').style.display = 'flex'
}

function pegarAtributosCard(){
    var atk = document.getElementById('ataque')
    var def = document.getElementById('defesa')
    var mag = document.getElementById('magia')

    var attValue = "<p>" + cartaJogador.atributos.ataque + "</p>"
    var defValue = "<p>" + cartaJogador.atributos.defesa + "</p>"
    var magValue = "<p>" + cartaJogador.atributos.magia + "</p>"
    atk.innerHTML = 'Ataque ' + attValue
    def.innerHTML = 'Defesa ' + defValue
    mag.innerHTML = 'Magia ' + magValue
}