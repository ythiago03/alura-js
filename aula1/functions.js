function calcular(){//aqui criamos a função 'calcular' para que ocorra quando clicarmos no botão
  
    var primeiroBimestre = document.getElementById('nota1').value//variáveis com o valor do formulário
    var segundoBimestre = document.getElementById('nota2').value
    var terceiroBimestre = document.getElementById('nota3').value
    var quartoBimestre = document.getElementById('nota4').value
    var res = document.getElementById('res')//variável com o texto mostrando a resposta

    if(primeiroBimestre == "" || segundoBimestre == "" || terceiroBimestre == "" || quartoBimestre == ""){
        window.alert('[ERRO] digite os dados novamente!')//validação de erro(caso o valor de algum formulário estiver vazio, o cálculo não vai ser executado e aparecerá uma mensagem de erro)
    }else{
        var calculo = ( Number(primeiroBimestre) + Number(segundoBimestre) + Number(terceiroBimestre) + Number(quartoBimestre)) / 4    
        var soma = calculo.toFixed(1)// aqui fazemos a soma das notas e convertemos elas em "number"

        if (soma >= 6){
            res.innerHTML = `Parabéns! Sua nota final foi ${soma}, você passou!`//caso a nota seja maior ou igual a 6, o aluno terá passado
        }else{

            res.innerHTML = `Infelizmente sua nota final foi ${soma}, você foi reprovado.` // caso a nota seja menor do que 6, o aluno terá sido reprovado
        }
    }

    
}
