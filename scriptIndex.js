// alerta de página en desarrollo
 if (!localStorage.getItem("welcomeAlert")) {
    alert("Esta es una página en desarrollo, es probable que muchos elementos con los que se encuentre ahora, sean modificados o incluso eliminados en el futuro");

     localStorage.setItem("welcomeAlert", "true");
  }

document.addEventListener("DOMContentLoaded", function () {
  const elementos = document.querySelectorAll('.fade-in');

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        observador.unobserve(entrada.target); // Deja de observar una vez animado
      }
    });
  }, {
    threshold: 0.1
  });

  elementos.forEach(el => observador.observe(el));
});