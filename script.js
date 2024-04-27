var peso;
var altura;
var imc;
var resultado;

function calcular(event){
    event.preventDefault();
    
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    imc = peso / (altura * altura);
    resultado = document.getElementById('resultado');
    
    if(imc < 17){
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc + '<br>Você está muito abaixo do peso!';
    }else if(imc <= 18.49){
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc + '<br>Você está abaixo do peso!';
    }else if(imc <= 24.99){
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc + '<br>Você está no peso ideal.';
    }else{
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc + '<br>Você está acima do peso!';
    }
}