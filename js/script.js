// Mostrar / Ocultar menú en móviles con animación de deslizamiento
document.getElementById("menu-btn").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
  });