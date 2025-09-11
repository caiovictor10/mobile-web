// variaveis
const inputIdade = document.getElementById("idade");
const resultado = document.getElementById("result");
const message = document.getElementById("message");

// Função
function resultadoIdadeClick(event) {
    event.preventDefault();
    console.log(inputIdade.value);

    //Lógica-condição

    if (inputIdade.value >= 18) {
        //alert ("Liberado");
        resultado.innerHTML = "Liberada para a festa";
    }
    else {
        resultado.innerHTML = "Acesso negado";
    }
    /*
Se idade >= 18, a passoa pode ir para festa senão, a pessoa não pode ir para festa
*/
let idade = 18;

if(idade >= 17) {
    console.log("Liberada para a festa");
}
    else {
        console.log("Acesso negado");
    }
}

   


