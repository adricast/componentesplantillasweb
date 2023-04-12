const cards = document.querySelector(".cards");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let scrollAmount = 0;
const cardWidth = 320; // Ancho de cada tarjeta
const cardMargin = 20; // Margen derecho de cada tarjeta

prevButton.addEventListener("click", () => {
  cards.scrollTo({
    top: 0,
    left: (scrollAmount -= cardWidth + cardMargin),
    behavior: "smooth"
  });
  console.log("hizo click en el boton prev");
  checkScrollButtons();
});

nextButton.addEventListener("click", () => {
  cards.scrollTo({
    top: 0,
    left: (scrollAmount += cardWidth + cardMargin),
    behavior: "smooth"
  });
  console.log("hizo click en el boton next");
  checkScrollButtons();
});

function checkScrollButtons() {
  // Desactiva el botón de "anterior" si llegamos al inicio de las tarjetas
  if (scrollAmount === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  // Desactiva el botón de "siguiente" si llegamos al final de las tarjetas
  if (scrollAmount + cards.clientWidth >= cards.scrollWidth) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
  console.log("estamos probando los botones");
}
function showCard(n) {
    // Oculta todas las tarjetas
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = "none";
    }
  
    // Muestra la tarjeta especificada
    cards[n].style.display = "flex";
    currentCard = n;
  
    // Habilita o deshabilita los botones prev y next según la posición de la tarjeta actual
    if (currentCard === 0) {
      prevButton.disabled = true;
    } else {
      prevButton.disabled = false;
    }
  
    if (currentCard === cards.length - 1) {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
    }
  }

// Comprueba el estado de los botones de desplazamiento al cargar la página
checkScrollButtons();

