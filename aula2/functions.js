function converter(s){
    var money = Number(document.getElementById('valor').value)
    var real 
    var res = document.getElementById('valorConvertido')
    switch (s) {
        case 1:
            real = (money * 5.08).toFixed(2)//dolar
            res.innerHTML = ` A conversão de $${money} para real é: R$${real} `
            break;

        case 2:
            real = (money * 5.55).toFixed(2)//euro
            res.innerHTML = ` A conversão de €${money} para real é: R$${real} `
                break;

        case 3:
            real = (money * 0.044).toFixed(2)//iene japonês
            res.innerHTML = ` A conversão de ¥${money} para real é: R$${real} `
            break;

        case 4:
            real = (money * 6.69).toFixed(2)//libra esterlina britânica
            res.innerHTML = ` A conversão de £${money} para real é: R$${real} `
            break;
        
        default:
        
            break;          
    }
    
}
