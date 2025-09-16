const form = document.getElementById("newForm");

form.addEventListener("submit",function(event) {
    // Impede envio automático 
    event.preventDefault();
    
    const email = document.querySelector("#email").value.trim();



    // condição de validação

if (email === "") {
    alert("Por favor, insira um email");
    return false;
}

// Validação simples: tem @ e . 
if (!email.includes("@") || !email.includes(".")) {
alert("Email invalido. Tente novamente");
    return;

}

alert("Email cadastrado com sucesso!✅")


// Limpa o campo
form.reset();

});