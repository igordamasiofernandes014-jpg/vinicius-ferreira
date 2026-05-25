const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const form = document.querySelector(".contact-form");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

menuButton.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("is-open"));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get("name").trim();
  const phone = data.get("phone").trim();
  const message = data.get("message").trim();
  const text = encodeURIComponent(`Olá, meu nome é ${name}. Telefone: ${phone}. ${message}`);
  window.open(`https://wa.me/5512991584004?text=${text}`, "_blank");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
