let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

function entrar() {
    let usuario = document.querySelector('#usuario')
    let labelUsuario = document.querySelector('#labelUsuario')

    let senha = document.querySelector('#senha')
    let labelSenha = document.querySelector('#labelSenha')

    let msgError = document.querySelector('#msgError')
    let listaUser = []

    let userValid = {
        nome: null,
        user: null,
        senha: null
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser?.forEach((item) => {
        if (usuario.value == item.userCadastrar && senha.value == item.senhaCadastrar) {
            userValid = {
                nome: item.nomeCadastrar,
                user: item.userCadastrar,
                senha: item.senhaCadastrar
            }
        }
    })

    if (usuario.value == userValid.user && senha.value == userValid.senha) {
        window.location.href = '../../index.html'

        let token = Math.random().toString(16).substr(2)
        localStorage.setItem('token', token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))
    } else {
        labelUsuario.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        labelSenha.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuario ou senha incorretos'
        usuario.focus()
    }

}