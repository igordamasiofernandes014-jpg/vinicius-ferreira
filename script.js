const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const modal = document.querySelector(".modal");
const modalTitle = document.querySelector("#modal-title");
const modalText = document.querySelector("#modal-text");
const modalClose = document.querySelector(".modal-close");
const form = document.querySelector(".contact-form");

const modalContent = {
  criminal: {
    title: "Direito Criminal",
    text: "Atendimento em flagrante, audiência de custódia, inquéritos, processos criminais e orientação para familiares em momentos urgentes.",
  },
  trabalhista: {
    title: "Direito Trabalhista",
    text: "Atuação em ações trabalhistas, verbas rescisórias, horas extras, vínculo de emprego, rescisão indireta e direitos do empregado.",
  },
  urgente: {
    title: "Atendimento Urgente",
    text: "Resposta rápida, atendimento humanizado e orientação inicial para definir os próximos passos com segurança.",
  },
};

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

menuButton.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("is-open"));
});

document.querySelectorAll("[data-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const content = modalContent[button.dataset.modal];
    modalTitle.textContent = content.title;
    modalText.textContent = content.text;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  });
});

const closeModal = () => {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
};

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
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
