const menuButton = document.querySelector("#menu-button");
const mobileMenu = document.querySelector("#mobile-menu");
const typedText = document.querySelector("#typed-text");
const revealElements = document.querySelectorAll(".reveal");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("hidden");
    menuButton.setAttribute("aria-expanded", String(!isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const signature = "Benjamin Mwaku | Future Web & Cybersecurity Builder";
let charIndex = 0;

function typeSignature() {
  if (!typedText) return;
  if (charIndex <= signature.length) {
    typedText.textContent = signature.slice(0, charIndex);
    charIndex += 1;
    setTimeout(typeSignature, 55);
  }
}

typeSignature();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => observer.observe(element));