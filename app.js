function criaCartao(categoria, pergunta, resposta) {
  const container = document.getElementById('container');

  const cartao = document.createElement('article');
  cartao.className = 'cartao';

  cartao.innerHTML = `
    <div class="cartao__conteudo">
      <h3>${categoria}</h3>

      <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
      </div>

      <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
      </div>
    </div>
  `;

  // Acessibilidade
  cartao.setAttribute('tabindex', '0');
  cartao.setAttribute('role', 'button');
  cartao.setAttribute('aria-pressed', 'false');
  cartao.setAttribute(
    'aria-label',
    `Cartão de ${categoria}. Clique ou pressione Enter/Espaço para virar.`
  );

  // Virar cartão
  let visivel = false;
  function virar() {
    visivel = !visivel;
    cartao.classList.toggle('active', visivel);
    cartao.setAttribute('aria-pressed', visivel.toString());
  }

  cartao.addEventListener('click', virar);
  cartao.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      virar();
    }
  });

  container.appendChild(cartao);
}
