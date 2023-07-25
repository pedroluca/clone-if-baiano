const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  slider.style.transform = `translateX(-${index * 33.33}%)`;
  currentSlide = index;

  // Atualizar os indicadores
  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === currentSlide);
  });
}

prevBtn.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

nextBtn.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    showSlide(idx);
  });
});

// Mostrar o slide inicial
showSlide(currentSlide);