// variaveis
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("result");
const message = document.getElementById("message");

// Função
function resultadoNotaClick(event) {
    event.preventDefault();
    console.log(inputNota.value);

    //Lógica-condição

    if (inputNota.value >= 6) {
        //alert ("Aprovado");
        resultado.innerHTML = "Aprovado";
    }
    else {
        resultado.innerHTML = "Reprovado";
    }
       // Validação de formulário
   if (inputNota.value == "");{
   message.style.display = "block";
   return false;
   }
message.style.display = "none";
}




