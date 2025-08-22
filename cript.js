document.addEventListener("DOMContentLoaded", () => {
  const carrusel = document.querySelector(".carrusel");
  const btnIzq = document.querySelector(".carrusel-btn.izquierda");
  const btnDer = document.querySelector(".carrusel-btn.derecha");

  btnIzq.addEventListener("click", () => {
    carrusel.scrollBy({ left: -250, behavior: "smooth" });
  });

  btnDer.addEventListener("click", () => {
    carrusel.scrollBy({ left: 250, behavior: "smooth" });
  });
});