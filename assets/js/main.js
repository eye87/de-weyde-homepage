const header = document.querySelector('.site-header');
addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 10));

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-menu');
const close = document.querySelector('.mobile-close');
let lastFocusedElement = null;

function setMenu(open) {
  if (!menu || !toggle) return;
  lastFocusedElement = open ? document.activeElement : lastFocusedElement;
  menu.classList.toggle('open', open);
  menu.setAttribute('aria-hidden', String(!open));
  toggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);

  if (open) close?.focus();
  else if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
}

toggle?.addEventListener('click', () => setMenu(true));
close?.addEventListener('click', () => setMenu(false));
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.classList.contains('open')) setMenu(false);
});

const mobileQuery = matchMedia('(max-width: 760px)');
document.querySelectorAll('.facility button').forEach(button => {
  button.addEventListener('click', () => {
    if (!mobileQuery.matches) return;
    const item = button.closest('.facility');
    const open = !item.classList.contains('is-open');
    item.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
    const arrow = button.querySelector('.facility-arrow');
    if (arrow) arrow.src = `assets/icons/arrow-${open ? 'up' : 'down'}.svg`;
  });
});
