const inputs = document.querySelectorAll(".input");
const textObrigatorio = document.querySelectorAll(".text-obrigatorio");
const botaoSubmit = document.getElementById("button-submit");

botaoSubmit.addEventListener('click', function(event) {
    event.preventDefault(); // Previne o envio do formulário para poder validar antes

    let valido = true;

    // Verifica se os campos foram preenchidos
    inputs.forEach((input, index) => {
        const textoErro = textObrigatorio[index];

        if (input.value === "") {
            input.classList.add("nao-preenchido");
            textoErro.classList.add("mostrar");
            valido = false;
        } else {
            input.classList.remove("nao-preenchido");
            input.classList.add("preenchido");
            textoErro.classList.remove("mostrar");
        }
    });

    // Se todos os campos estiverem preenchidos, permite o envio (aqui você pode adicionar a lógica de envio real)
    if (valido) {
        alert("Formulário enviado com sucesso!");
        // Aqui você pode fazer o envio do formulário, se necessário
        // document.getElementById("meuFormulario").submit();
    }
});
