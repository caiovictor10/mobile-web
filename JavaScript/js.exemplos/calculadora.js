// Variável
const num1 = document.getElementById("numero1");
const num2 = document.getElementById("numero2");
const Resultado = document.getElementById("resultado");

// Função
function somar(event){
    event.preventDefault();
    Resultado.innerHTML = Number(num1.value) + Number(num2.value);
    num1.value = "";
    num2.value = "";
    }
    function subtrair(event){
    event.preventDefault();
    Resultado.innerHTML = Number(num1.value) - Number(num2.value);
    num1.value = "";
    num2.value = "";
    }
 function multiplicar(event){
    event.preventDefault();
    Resultado.innerHTML = Number(num1.value) * Number(num2.value);
    num1.value = "";
    num2.value = "";
 }
  function dividir(event){
    event.preventDefault();
    Resultado.innerHTML = Number(num1.value) / Number(num2.value);
    num1.value = "";
    num2.value = "";
  }
