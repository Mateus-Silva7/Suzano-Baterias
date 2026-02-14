window.onload = () => {
  const slider = document.querySelector(".depoimentos-slider");
  const carousel = document.querySelector(".depoimentos-carousel");

  if (!slider || !carousel) return;

  // Duplica os cards para o loop infinito
  slider.innerHTML += slider.innerHTML;

  let scrollPos = 0;
  let speed = 0.8; // Velocidade da esteira

  function animate() {
    scrollPos += speed;

    // Reset invisível ao chegar na metade
    if (scrollPos >= slider.scrollWidth / 2) {
      scrollPos = 0;
    }

    carousel.scrollLeft = scrollPos;
    requestAnimationFrame(animate);
  }

  // Pausa no Hover
  carousel.addEventListener("mouseenter", () => speed = 0);
  carousel.addEventListener("mouseleave", () => speed = 0.8);

  animate();
};