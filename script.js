document.addEventListener("DOMContentLoaded", () => {
  const boton = document.querySelector(".cta");
  if (boton) {
    boton.addEventListener("click", () => {
      alert("¡Gracias por tu interés! Próximamente te contactaremos.");
    });
  }
});
