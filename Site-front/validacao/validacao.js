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

// Limpa o campo
form.reset();

});