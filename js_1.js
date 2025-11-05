   
   console.log("Página cargada correctamente ");

    
   let nombre = prompt("Ingresa tu nombre");

    // Mostrar un mensaje en pantalla
    if (nombre) {
      console.log("Hola, Bienvenido " + nombre );
    } else {
      console.log("Porfavor ingresa tu nombre: " );
    }

let fecha = new Date();
console.log(fecha);

        
           
        function mensaje(){
             // Obtenemos el valor de la caja de texto
            const texto = document.getElementById('miCajaTexto').value;
            
            // Mostramos el texto en la consola
            
            console.log("Sugerencia:", texto);
            event.preventDefault();
        }

// Crear el elemento <video>
const video = document.createElement("video");

// Configurar propiedades del video
video.src = "https://www.youtube.com/watch?v=sgsE3bxdtZ0"; // URL del video
video.autoplay = true; // se reproduce automáticamente
video.muted = true;    // debe estar silenciado para permitir autoplay
video.loop = true;     // se repite al finalizar
video.width = 640;     // ancho del video
video.controls = true; // opcional: muestra controles del reproductor

// Agregar el video al documento
document.body.appendChild(video);
