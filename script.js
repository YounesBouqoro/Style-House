const galleryImages = [
  {
    src: "assets/images/style-house-exterior.webp",
    alt: "Die Fassade des Style House Friseursalons",
    label: "Unser Salon in Derendorf",
  },
  {
    src: "assets/images/style-house-interior.webp",
    alt: "Innenansicht des Style House mit Barberstühlen",
    label: "Mitten im Handwerk",
  },
  {
    src: "assets/images/style-house-heritage.webp",
    alt: "Historische Fotografie klassischer Barbiere im Style House",
    label: "Tradition im Detail",
  },
];

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-nav]");
const gallery = document.querySelector("[data-gallery]");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");

const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 20);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const closeMenu = () => {
  menuToggle?.setAttribute("aria-expanded", "false");
  navigation?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  navigation?.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

galleryImages.forEach((image, index) => {
  const item = document.createElement("button");
  item.type = "button";
  item.className = "gallery-item";
  item.setAttribute("aria-label", `${image.label} vergrößern`);
  item.innerHTML = `
    <img src="${image.src}" alt="${image.alt}" loading="lazy" />
    <span class="gallery-label">${image.label}</span>
  `;
  item.addEventListener("click", () => {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = image.label;
    lightbox?.showModal();
  });
  gallery?.appendChild(item);
});

document.querySelector("[data-lightbox-close]")?.addEventListener("click", () => lightbox?.close());
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});

const updateOpenStatus = () => {
  const now = new Date();
  const day = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();
  const isOpen = day !== 0 && minutes >= 600 && minutes < 1200;
  const statusText = document.querySelector("[data-open-status]");
  const statusDot = document.querySelector("[data-status-dot]");

  if (statusText) statusText.textContent = isOpen ? "Jetzt geöffnet · bis 20 Uhr" : day === 0 ? "Heute geschlossen" : "Heute ab 10 Uhr geöffnet";
  statusDot?.classList.toggle("closed", !isOpen);
};

updateOpenStatus();
document.querySelector("[data-year]").textContent = new Date().getFullYear();
