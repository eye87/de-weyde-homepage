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
  document.querySelectorAll('.facility, .category-card').forEach((item, index) => {
    const button = item.querySelector('button');
    const arrow = item.querySelector('.facility-arrow, .category-card__arrow');

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

document.querySelectorAll('.facility button, .category-card__toggle').forEach(button => {
  button.addEventListener('click', () => {
    if (!mobileQuery.matches) return;

    const item = button.closest('.facility, .category-card');
    if (!item) return;

    const open = !item.classList.contains('is-open');
    item.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));

    const arrow = button.querySelector('.facility-arrow, .category-card__arrow');
    if (arrow) arrow.src = `assets/icons/arrow-${open ? 'up' : 'down'}.svg`;
  });
});

updateHeaderShadow();
syncFacilitiesForViewport();

/* ======================================================
   FOTO'S / LIGHTBOX
====================================================== */
const gallery = document.querySelector('[data-gallery]');
const galleryItems = gallery ? [...gallery.querySelectorAll('[data-gallery-item]')] : [];
const lightbox = document.querySelector('[data-lightbox]');
const lightboxImage = lightbox?.querySelector('[data-lightbox-image]');
const lightboxTitle = lightbox?.querySelector('[data-lightbox-title]');
const lightboxDescription = lightbox?.querySelector('[data-lightbox-description]');
const lightboxCounter = lightbox?.querySelector('[data-lightbox-counter]');
const lightboxPrevious = lightbox?.querySelector('[data-lightbox-previous]');
const lightboxNext = lightbox?.querySelector('[data-lightbox-next]');
const lightboxCloseButtons = lightbox ? [...lightbox.querySelectorAll('[data-lightbox-close]')] : [];

let activePhotoIndex = 0;
let lightboxTrigger = null;
let touchStartX = 0;

const galleryPhotos = galleryItems.map(item => {
  const image = item.querySelector('img');
  return {
    src: image?.currentSrc || image?.src || '',
    alt: image?.alt || '',
    title: item.dataset.title || '',
    description: item.dataset.description || ''
  };
});

function updateLightbox(index) {
  if (!lightbox || !galleryPhotos.length) return;

  activePhotoIndex = (index + galleryPhotos.length) % galleryPhotos.length;
  const photo = galleryPhotos[activePhotoIndex];

  lightbox.classList.remove('is-ready');
  if (lightboxImage) {
    lightboxImage.src = photo.src;
    lightboxImage.alt = photo.alt;
  }
  if (lightboxTitle) lightboxTitle.textContent = photo.title;
  if (lightboxDescription) {
    lightboxDescription.textContent = photo.description;
    lightboxDescription.hidden = !photo.description;
  }
  if (lightboxCounter) lightboxCounter.textContent = `${activePhotoIndex + 1} / ${galleryPhotos.length}`;

  requestAnimationFrame(() => lightbox.classList.add('is-ready'));
}

function openLightbox(index, trigger) {
  if (!lightbox || mobileQuery.matches || !galleryPhotos.length) return;

  lightboxTrigger = trigger;
  updateLightbox(index);
  document.body.classList.add('lightbox-open');
  lightbox.showModal();
  lightbox.querySelector('.photo-lightbox__close')?.focus();
}

function closeLightbox() {
  if (!lightbox?.open) return;

  lightbox.close();
  lightbox.classList.remove('is-ready');
  document.body.classList.remove('lightbox-open');
  lightboxTrigger?.focus();
}

function handleLightboxKeyboard(event) {
  if (!lightbox?.open) return;

  if (event.key === 'Escape') {
    event.preventDefault();
    closeLightbox();
  } else if (event.key === 'ArrowLeft') {
    updateLightbox(activePhotoIndex - 1);
  } else if (event.key === 'ArrowRight') {
    updateLightbox(activePhotoIndex + 1);
  }
}

galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => openLightbox(index, item));
});

lightboxPrevious?.addEventListener('click', () => updateLightbox(activePhotoIndex - 1));
lightboxNext?.addEventListener('click', () => updateLightbox(activePhotoIndex + 1));
lightboxCloseButtons.forEach(button => button.addEventListener('click', closeLightbox));
document.addEventListener('keydown', handleLightboxKeyboard);

lightbox?.addEventListener('touchstart', event => {
  touchStartX = event.changedTouches[0]?.clientX || 0;
}, { passive: true });

lightbox?.addEventListener('touchend', event => {
  const touchEndX = event.changedTouches[0]?.clientX || 0;
  const distance = touchEndX - touchStartX;
  if (Math.abs(distance) < 50) return;
  updateLightbox(activePhotoIndex + (distance < 0 ? 1 : -1));
}, { passive: true });

mobileQuery.addEventListener('change', event => {
  if (event.matches) closeLightbox();
});

/* ======================================================
   UITGELICHTE PLEKKEN / SLIDER
====================================================== */
const favoritesSlider = document.querySelector('[data-favorites-slider]');
const favoritesTrack = favoritesSlider?.querySelector('[data-favorites-track]');
const favoritesPrevious = favoritesSlider?.querySelector('[data-favorites-previous]');
const favoritesNext = favoritesSlider?.querySelector('[data-favorites-next]');

function updateFavoritesControls() {
  if (!favoritesTrack) return;

  const maximumScroll = Math.max(0, favoritesTrack.scrollWidth - favoritesTrack.clientWidth);
  favoritesPrevious?.toggleAttribute('disabled', favoritesTrack.scrollLeft <= 2);
  favoritesNext?.toggleAttribute('disabled', favoritesTrack.scrollLeft >= maximumScroll - 2);
}

function moveFavorites(direction) {
  if (!favoritesTrack) return;

  const card = favoritesTrack.querySelector('.place-card');
  const gap = Number.parseFloat(getComputedStyle(favoritesTrack).columnGap) || 0;
  const distance = (card?.getBoundingClientRect().width || favoritesTrack.clientWidth) + gap;
  favoritesTrack.scrollBy({
    left: direction * distance,
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  });
}

if (favoritesTrack) {
  favoritesPrevious?.addEventListener('click', () => moveFavorites(-1));
  favoritesNext?.addEventListener('click', () => moveFavorites(1));
  favoritesTrack.addEventListener('scroll', updateFavoritesControls, { passive: true });
  window.addEventListener('resize', updateFavoritesControls);
  updateFavoritesControls();
}

/* ======================================================
   QUOTES / CROSSFADE
====================================================== */
const quoteRotator = document.querySelector('[data-quote-rotator]');
const quoteSlides = quoteRotator ? [...quoteRotator.querySelectorAll('[data-quote-slide]')] : [];
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
let activeQuoteIndex = 0;
let quoteRotationTimer = null;

function showQuote(index) {
  if (quoteSlides.length < 2) return;

  activeQuoteIndex = (index + quoteSlides.length) % quoteSlides.length;
  quoteSlides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === activeQuoteIndex;
    slide.classList.toggle('is-active', isActive);
    slide.setAttribute('aria-hidden', String(!isActive));
  });
}

function stopQuoteRotation() {
  if (quoteRotationTimer) window.clearInterval(quoteRotationTimer);
  quoteRotationTimer = null;
}

function startQuoteRotation() {
  stopQuoteRotation();
  if (quoteSlides.length < 2 || document.hidden) return;
  quoteRotationTimer = window.setInterval(() => showQuote(activeQuoteIndex + 1), 7500);
}

if (quoteSlides.length) {
  showQuote(0);
  startQuoteRotation();
  reducedMotionQuery.addEventListener('change', startQuoteRotation);
  document.addEventListener('visibilitychange', startQuoteRotation);
}
