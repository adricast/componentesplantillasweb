var slideIndex = 0;
showSlide();

function showSlide() {
  var slides = document.getElementsByClassName("slider-image");
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlide, 3000); // Cambia la imagen cada 3 segundos
}

