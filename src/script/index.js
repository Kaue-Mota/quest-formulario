const inputs = document.querySelectorAll(".input")
const submitButton = document.querySelector(".botao")
const obrigatorioText = document.querySelectorAll(".campo-obrigatorio-text")
const formularioContainer = document.querySelector(".form-container")

console.log(formularioContainer)


for (let i of obrigatorioText) {
    i.style.display = "none";
}

submitButton.addEventListener("click", () => {


    inputs.forEach(input => {

        if (input.value !== "") {
            input.classList.add("campo-preenchido-borda")
        } else {
            input.classList.remove("campo-preenchido-borda")
            input.classList.add("campo-obrigatorio-borda")
        }
    });

    if (inputs[0].value == "") {
        obrigatorioText[0].classList.add("span-ativo")
    } else {
        obrigatorioText[0].classList.remove("span-ativo")
        obrigatorioText[0].classList.add("span-escondido")
    };

    if (inputs[1].value == "") {
        obrigatorioText[1].classList.add("span-ativo")
    } else {
        obrigatorioText[1].classList.remove("span-ativo")
        obrigatorioText[1].classList.add("span-escondido")
    };

    if (inputs[2].value == "") {
        obrigatorioText[2].classList.add("span-ativo")
    } else {
        obrigatorioText[2].classList.remove("span-ativo")
        obrigatorioText[2].classList.add("span-escondido")
    };

    if (inputs[3].value == "") {
        obrigatorioText[3].classList.add("span-ativo")
    } else {
        obrigatorioText[3].classList.remove("span-ativo")
        obrigatorioText[3].classList.add("span-escondido")
    };


    for (let c of obrigatorioText) {
        if (c.classList.contains("span-ativo")) {
            c.style.display = "block";
        } else {
            c.style.display = "none";
        }
    }
});