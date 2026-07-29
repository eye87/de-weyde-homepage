const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const menuClose = document.querySelector('.mobile-close');
const mobileQuery = window.matchMedia('(max-width: 760px)');

let lastFocusedElement = null;

function updateHeaderShadow() {
  header?.classList.toggle('scrolled', window.scrollY > 10);
}

function getMenuFocusables() {
  if (!mobileMenu) return [];

  return [...mobileMenu.querySelectorAll(
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )].filter(element => !element.hasAttribute('hidden'));
}

function setMenu(open) {
  if (!mobileMenu || !menuToggle) return;

  if (open) lastFocusedElement = document.activeElement;

  mobileMenu.classList.toggle('open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
  menuToggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);

  if (open) {
    menuClose?.focus();
  } else if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
}

function handleMenuKeyboard(event) {
  if (!mobileMenu?.classList.contains('open')) return;

  if (event.key === 'Escape') {
    setMenu(false);
    return;
  }

  if (event.key !== 'Tab') return;

  const focusables = getMenuFocusables();
  if (!focusables.length) return;

  const first = focusables[0];
  const last = focusables[focusables.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function syncFacilitiesForViewport() {
  document.querySelectorAll('.facility').forEach((item, index) => {
    const button = item.querySelector('button');
    const arrow = item.querySelector('.facility-arrow');

    if (!mobileQuery.matches) {
      item.classList.toggle('is-open', index === 0);
      button?.setAttribute('aria-expanded', String(index === 0));
    }

    const open = item.classList.contains('is-open');
    if (arrow) arrow.src = `assets/icons/arrow-${open ? 'up' : 'down'}.svg`;
  });

  if (!mobileQuery.matches && mobileMenu?.classList.contains('open')) {
    setMenu(false);
  }
}

window.addEventListener('scroll', updateHeaderShadow, { passive: true });
menuToggle?.addEventListener('click', () => setMenu(true));
menuClose?.addEventListener('click', () => setMenu(false));
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenu(false));
});
document.addEventListener('keydown', handleMenuKeyboard);

mobileQuery.addEventListener('change', syncFacilitiesForViewport);

document.querySelectorAll('.facility button').forEach(button => {
  button.addEventListener('click', () => {
    if (!mobileQuery.matches) return;

    const item = button.closest('.facility');
    if (!item) return;

    const open = !item.classList.contains('is-open');
    item.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));

    const arrow = button.querySelector('.facility-arrow');
    if (arrow) arrow.src = `assets/icons/arrow-${open ? 'up' : 'down'}.svg`;
  });
});

updateHeaderShadow();
syncFacilitiesForViewport();
