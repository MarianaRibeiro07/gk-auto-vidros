const menuToggle = document.getElementById('menu-toggle');
const navigation = document.getElementById('main-nav');

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menu');
  navigation.classList.remove('is-open');
}

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(expanded));
  menuToggle.setAttribute('aria-label', expanded ? 'Fechar menu' : 'Abrir menu');
  navigation.classList.toggle('is-open', expanded);
});

navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuToggle.focus();
  }
});

document.addEventListener('click', event => {
  if (!event.target.closest('.header-inner')) closeMenu();
});

window.matchMedia('(min-width: 1025px)').addEventListener('change', closeMenu);

const serviceSelect = document.getElementById('servico');
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    serviceSelect.value = link.dataset.service;
  });
});

const quoteForm = document.getElementById('quote-form');
quoteForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!quoteForm.reportValidity()) return;
  const fields = new FormData(quoteForm);
  const message = [
    'Olá, GK Auto Vidros! Gostaria de solicitar um orçamento.',
    '',
    'Nome: ' + fields.get('nome').trim(),
    'Telefone: ' + fields.get('telefone').trim(),
    'Veículo: ' + fields.get('modelo').trim(),
    'Ano: ' + fields.get('ano').trim(),
    'Serviço: ' + fields.get('servico'),
  ].join('\n');
  const url = 'https://wa.me/5511934117825?text=' + encodeURIComponent(message);
  window.open(url, '_blank', 'noopener,noreferrer');
  const status = document.getElementById('form-status');
  status.replaceChildren(document.createTextNode('Conclua o envio no WhatsApp. Se a conversa não abriu, '));
  const fallback = document.createElement('a');
  fallback.href = url;
  fallback.target = '_blank';
  fallback.rel = 'noopener noreferrer';
  fallback.textContent = 'abra por este link.';
  fallback.style.textDecoration = 'underline';
  status.append(fallback);
  status.hidden = false;
});

const privacyDialog = document.getElementById('privacy-dialog');
document.getElementById('privacy-open').addEventListener('click', () => privacyDialog.showModal());
privacyDialog.querySelector('.dialog-close').addEventListener('click', () => privacyDialog.close());
privacyDialog.addEventListener('click', event => {
  if (event.target === privacyDialog) {
    const bounds = privacyDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) privacyDialog.close();
  }
});
