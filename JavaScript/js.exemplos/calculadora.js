// Variável
const num1 = document.getElementById("numero1");
const num2 = document.getElementById("numero2");
const Resultado = document.getElementById("resultado");

// Função
function somar(event) {
   event.preventDefault();
   // Validação de formulário
   if (num1.value == "" || num2.value == "");
   alert("Digite algo no campo 1 e 2");
   return false;
}

Resultado.innerHTML = Number(num1.value) + Number(num2.value); {
   num1.value = "";
   num2.value = "";
}
function subtrair(event) {
   event.preventDefault();
      // Validação de formulário
   if (num1.value == "" || num2.value == "");
   alert("Digite algo no campo 1 e 2");
   return false;}
   Resultado.innerHTML = Number(num1.value) - Number(num2.value);{
   num1.value = "";
   num2.value = "";
}
function multiplicar(event) {
   event.preventDefault();
      // Validação de formulário
   if (num1.value == "" || num2.value == "");
   alert("Digite algo no campo 1 e 2");
   return false;}
   Resultado.innerHTML = Number(num1.value) * Number(num2.value);{
   num1.value = "";
   num2.value = "";
}
function dividir(event) {
   event.preventDefault();
      // Validação de formulário
   if (num1.value == "" || num2.value == "");
   alert("Digite algo no campo 1 e 2");
   return false;}
   Resultado.innerHTML = Number(num1.value) / Number(num2.value);{
   num1.value = "";
   num2.value = "";
}
