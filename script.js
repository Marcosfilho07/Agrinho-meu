document.addEventListener('DOMContentLoaded', () => {
  const botaoMenu = document.getElementById('botao-acessibilidade');
  const lista = document.getElementById('opcoes-acessibilidade');
  const btnAumentar = document.getElementById('aumentar-fonte');
  const btnDiminuir = document.getElementById('diminuir-fonte');
  const btnContraste = document.getElementById('alterna-contraste');

  // Mostrar/ocultar lista
  botaoMenu.addEventListener('click', () => {
    const expanded = botaoMenu.getAttribute('aria-expanded') === 'true';
    botaoMenu.setAttribute('aria-expanded', (!expanded).toString());
    lista.classList.toggle('mostrar');
  });

  // Aumentar fonte
  btnAumentar.addEventListener('click', () => {
    document.documentElement.classList.remove('modo-reduzido');
    document.documentElement.classList.add('modo-aumentado');
  });

  // Diminuir fonte
  btnDiminuir.addEventListener('click', () => {
    document.documentElement.classList.remove('modo-aumentado');
    document.documentElement.classList.add('modo-reduzido');
  });

  // Alternar contraste
  btnContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
  });
});
