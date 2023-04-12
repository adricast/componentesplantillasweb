const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    header.classList.toggle('active');
    const accordionBody = header.nextElementSibling;
    if (accordionBody.style.maxHeight) {
      // cerrar el acordeón si ya está abierto
      accordionBody.style.maxHeight = null;
    } else {
      // abrir el acordeón
      accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
    }
  });
});







