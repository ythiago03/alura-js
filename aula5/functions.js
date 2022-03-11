
/*===== animes =====*/

var animes = ['https://cdn.fstatic.com/media/movies/covers/2019/12/tWJRkoAMGTLLT8q8IIahJWpvb1n_Ov6ZjP6.jpg',
'https://i0.wp.com/www.otakupt.com/wp-content/uploads/2021/01/Mushoku-Tensei-visual-poster.jpg?resize=696%2C986&ssl=1',
'https://img.elo7.com.br/product/original/1EE36C0/big-poster-anime-re-zero-tamanho-90x-0-cm-lo003-poster.jpg','https://images-na.ssl-images-amazon.com/images/I/51WvxghcgpL._SX329_BO1,204,203,200_.jpg',
'http://vortexcultural.com.br/images/2021/05/jujutsu_capa.png',]

var tamanhoAnimes = animes.length //quantidade de items na lista

for (var i = 0; i < tamanhoAnimes; i++ ){ //repetição da lista
    var images = document.getElementById('listaAnime')// seleciona a div "listaAnime"
    var foto = "<img  src=" + animes[i] + " class='images'>"// cria a img com a lista
    images.innerHTML = images.innerHTML + foto//coloca alista com as imgs na tela
}


/* ======= filmes ========*/

var filmes = ['https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f1f881062c7307c1f1c289ef5df5ee7e650214ec7e03deced3cf9c19e1c2ac25._RI_V_TTW_.jpg','http://www.cinesystem.com.br/filmes/images/poster/homem-aranha-sem-volta-para-casa.jpg','https://upload.wikimedia.org/wikipedia/pt/e/e6/Shrek_Poster.jpg','https://upload.wikimedia.org/wikipedia/pt/b/b0/Avatar-Teaser-Poster.jpg','https://lojasaraiva.vteximg.com.br/arquivos/ids/12109083/1006637057.jpg?v=637142248087230000']

var tamanhoFilmes = filmes.length

for (var i = 0; i < tamanhoFilmes; i++ ){
    var imagesFilme = document.getElementById('listaFilme')
    var foto = "<img  src=" + filmes[i] + " class='images'>"
    imagesFilme.innerHTML = imagesFilme.innerHTML + foto
}


/*=====séries======*/

var series = ['https://musicnonstop.uol.com.br/wp-content/uploads/2021/08/PT-BR_LCDP_S5_Main_Vertical_RGB_PRE.jpg','https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2022/01/19/735240336-dead61e84711f0889.jpeg','http://bancodeseries.tv.br/images/posters/2661.jpg','https://br.web.img3.acsta.net/pictures/19/01/03/10/55/2296345.jpg','https://br.web.img2.acsta.net/pictures/19/07/10/20/01/2331295.jpg']

var tamanhoSerie = series.length

for (var i = 0; i < tamanhoSerie; i++ ){
    var imagesSerie = document.getElementById('listaSerie')
    var foto = "<img  src=" + series[i] + " class='images'>"
    imagesSerie.innerHTML = imagesSerie.innerHTML + foto
}


/*===== adicionar link ======*/

function add(s){

    var link = document.getElementById('link').value //pega o link digitado no input

    if (link.endsWith(".jpg")){//condição para validar a img
    switch(s){
        case 1:  //caso clique no botão animes
           link = document.getElementById('link').value//adiciona ao link o valor digitado no input
           animes.push(link) //adiciona a lista o link
           var foto = "<img  src=" + animes[i] + " class='images'>"// cria a tag img com a lista animes
           images.innerHTML = images.innerHTML + foto //adiciona a div "listaAnime" o conteudo que ela ja tem mais o novo conteudo
        break;

        case 2://caso clique no botão filmes
            link = document.getElementById('link').value
            filmes.push(link)
            var foto = "<img  src=" + filmes[i] + " class='images'>"
            imagesFilme.innerHTML = imagesFilme.innerHTML + foto
        break;

        case 3://caso clique no botão series
            link = document.getElementById('link').value
            series.push(link)
            var foto = "<img  src=" + series[i] + " class='images'>"
            imagesSerie.innerHTML = imagesSerie.innerHTML + foto
        break;

        default:
            break;
    }
}else{
    alert('[ERRO] Insira um link válido!')
}
    document.getElementById('link').value = ""

}














