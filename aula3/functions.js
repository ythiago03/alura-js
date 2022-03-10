var numberSecret = parseInt(Math.random() * 11)
console.log(numberSecret)
 
function chutar(){
    var attempsNumber = 3
    var attemps = document.getElementById('attemps')
    attemps.innerHTML = 'Tentativa(s) restante(s): ' + attempsNumber
    var number = parseInt(document.getElementById('valor').value)
    var btn = document.getElementById('btn')
    var res = document.getElementById('res')
    
    if(number > 10 || number < 0 ){
        res.style.color = 'white'
        res.innerHTML = 'Por favor, Digite um número de 0 a 10!'

    }else if(number == numberSecret){

        res.style.color = 'green'
        res.innerHTML = `Parabéns! O número secreto era ${numberSecret}!` 

    }else if(number < numberSecret){
        attempsNumber -= 1
        attemps.innerHTML = 'Tentativa(s) restante(s): ' + attempsNumber
        res.style.color = 'yellow'
        res.innerHTML = `O número é maior que o digitado!` 

    }else if(number > numberSecret){
        attempsNumber -= 1
        attemps.innerHTML = 'Tentativa(s) restante(s): ' + attempsNumber
        res.style.color = 'yellow'
        res.innerHTML = `O número é menor que o digitado!` 
    }
}