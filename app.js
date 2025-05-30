function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
        <h3>${categoria}</h3>
        <div class="cartao_conteudo_pergunta">
            <p>${pergunta}</p>
        </div>
        <div class="cartao_conteudo_resposta">
            <p>${resposta}</p>
        </div>
    </div>
    `

    cartao.setAttribute('tabindex', '0');
    cartao.setAttribute('role', 'button');
    cartao.setAttribute('aria-pressed', 'false');
    cartao.setAttribute('aria-label', Cartão de ${categoria}, clique para mostrar ou esconder a resposta);

    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
        cartao.setAttribute('aria-pressed', respostaEstaVisivel.toString());
    }
    cartao.addEventListener('click', viraCartao)

    container.appendChild(cartao)
}
