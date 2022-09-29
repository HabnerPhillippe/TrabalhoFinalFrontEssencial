function enviar() {
    const nome = document.querySelector("#name");
    const email = document.querySelector("#email");
    const mensagem = document.querySelector("#mensagem");

    if(nome.value == "" || email.value == "" || mensagem.value == "") {
        alert("Preencha todos os campos antes de enviar!")
        return
    }

    localStorage.setItem("name", nome.value),
    localStorage.setItem("email", email.value, JSON.stringify(email)),
    localStorage.setItem("mensagem", mensagem.value),

    console.log(localStorage.getItem("name"))
    console.log(localStorage.getItem("email"))
    console.log(localStorage.getItem("mensagem"))

    nome.value = ""
    email.value = ""
    mensagem.value = ""

    
}

function modoEscuro() {
    const botao = document.querySelector("#flexSwitchCheckDefault")

    if(botao.checked){
        document.body.style.backgroundColor = '#202020'
        document.body.style.color = '#fff'
    }
    else{
        document.body.style.backgroundColor = '#fff'
        document.body.style.color = '#000'
    }
}

    
