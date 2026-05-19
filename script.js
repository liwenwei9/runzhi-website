const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const slides = Array.from(document.querySelectorAll(".hero-slide"));
const dotsWrap = document.querySelector("[data-dots]");
const prevButton = document.querySelector("[data-prev]");
const nextButton = document.querySelector("[data-next]");

let activeSlide = 0;
let heroTimer;

function renderIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function setSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeSlide);
  });
  Array.from(dotsWrap.children).forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === activeSlide);
    dot.setAttribute("aria-current", dotIndex === activeSlide ? "true" : "false");
  });
}

function startHeroTimer() {
  window.clearInterval(heroTimer);
  heroTimer = window.setInterval(() => setSlide(activeSlide + 1), 5600);
}

function buildDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `切换到第 ${index + 1} 张`);
    dot.addEventListener("click", () => {
      setSlide(index);
      startHeroTimer();
    });
    dotsWrap.appendChild(dot);
  });
}

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  menuButton.setAttribute("aria-label", isOpen ? "关闭导航" : "打开导航");
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-label", "打开导航");
  }
});

prevButton.addEventListener("click", () => {
  setSlide(activeSlide - 1);
  startHeroTimer();
});

nextButton.addEventListener("click", () => {
  setSlide(activeSlide + 1);
  startHeroTimer();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }
});

window.addEventListener("scroll", setHeaderState, { passive: true });
window.addEventListener("load", renderIcons);

buildDots();
setSlide(0);
setHeaderState();
startHeroTimer();
