const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Verifica se o nome está vázio
    if (nameInput.value === '') {
        document.getElementById('name-error').style.display = 'block';
        return
    } else {
        document.getElementById('name-error').style.display = 'none';        
    }

    // Verifica se o email está preenchido e se é válido
    if(emailInput.value === '' || !isEmailValid(emailInput.value)){
        document.getElementById('email-error').style.display = 'block';
        return
    } else {
        document.getElementById('email-error').style.display = 'none'
    }

    // Verifica se a senha está preenchida
    if(!validatePassword(passwordInput.value, 8)) {
        document.getElementById('password-error').style.display = 'block';
        return
    } else { 
        document.getElementById('password-error').style.display = 'none'
    }

    // Verificar se a situação foi selecionada
    if(jobSelect.value === ''){
        document.getElementById('jobselect-error').style.display = 'block';
        return

    } else {
        document.getElementById('jobselect-error').style.display = 'none'
    }

    // Verifica se a mensagem está preenchida
    if(messageTextarea.value === ''){
        document.getElementById('msg-error').style.display = 'block';
        return
    } else {
        document.getElementById('msg-error').style.display = 'none'
    }

    // Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();
});

// Função que valida email
function isEmailValid(email) {

    // Criar Regex para validar email
    const emailRegex = new RegExp(
        // usuário12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    } 
    return false;
}

// Função que valida a senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
    // Senha válida

        return true;
    }
    // Senha inválida
    return false;
}

