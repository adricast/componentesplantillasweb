		var index = 1;
		var imagenes = document.querySelectorAll(".slider img");
		var botones = document.querySelectorAll(".slider-nav button");

		// Función para cambiar la imagen del slider
		function cambiarImagen(n) {
			imagenes[index-1].classList.remove("active");
			botones[index-1].classList.remove("active");
			index = n;
			imagenes[index-1].classList.add("active");
			botones[index-1].classList.add("active");
		}

		// Función para cambiar la imagen automáticamente
		function autoCambiarImagen() {
			imagenes[index-1].classList.remove("active");
			botones[index-1].classList.remove("active");
			index++;
			if (index > imagenes.length) {
				index = 1;
			}
			imagenes[index-1].classList.add("active");
			botones[index-1].classList.add("active");
			setTimeout(autoCambiarImagen, 5000); // Cambiar cada 5 segundos
		}
        autoCambiarImagen(); // Llamar a la función para cambiar la imagen automáticamente
 

		