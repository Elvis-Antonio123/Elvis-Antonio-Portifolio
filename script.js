document.addEventListener('DOMContentLoaded', function() {
  const botaoAbrir = document.querySelector('.botao-abrir-menu');
  const botaoFechar = document.querySelector('.botao-fechar-menu');
  const menu = document.getElementById('menuMobile');

  if (botaoAbrir && menu) {
    botaoAbrir.addEventListener('click', function() {
      menu.style.display = 'flex';
    });
  }

  if (botaoFechar && menu) {
    botaoFechar.addEventListener('click', function() {
      menu.style.display = 'none';
    });
  }
});