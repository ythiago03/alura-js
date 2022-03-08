function converter(s){
    var money = Number(document.getElementById('valor').value)
    var real 
    switch (s) {
        case 1:
            real = (money * 5.08).toFixed(2)//dolar

            break;

        case 2:
            real = (money * 5.55).toFixed(2)//euro
                break;

        case 3:
            real = (money *0.044).toFixed(2)//iene japonês
            break;

        case 4:
            real = (money * 6.69).toFixed(2)//libra esterlina britânica
            break;
        
        default:
        
            break;          
    }
    var res = document.getElementById('valorConvertido')
    res.innerHTML = ` A conversão para real é: R$${real} `
}

   
