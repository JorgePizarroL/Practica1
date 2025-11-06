   
   console.log("Página cargada correctamente ");

    
   //let nombre = prompt("Ingresa tu nombre");

    // Mostrar un mensaje en pantalla
   // if (nombre) {
   //   console.log("Hola, Bienvenido " + nombre );
   // } else {
    //  console.log("Porfavor ingresa tu nombre: " );
    //}
document.write("Hola Bienvenido");
let fecha = new Date();
console.log(fecha);

        
           
        function mensaje(){
             // Obtenemos el valor de la caja de texto
            const texto = document.getElementById('miCajaTexto').value;
            
            // Mostramos el texto en la consola
            
            console.log("Sugerencia:", texto);
            event.preventDefault();
        }

//etiqueta para agregar video
// Seleccionamos el contenedor donde irá el video
const contenedor = document.getElementById("contenedor");

// Creamos el elemento <video>
const video = document.createElement("video");

// Configuramos las propiedades del video
video.src = "UPS.mp4";  // 👈 nombre de tu archivo local
video.width = 640;        // ancho en píxeles
//video.controls = true;    // muestra los controles (play, pausa, etc.)
video.autoplay = true;    // se reproduce al cargar
video.muted = true;       // necesario para autoplay
video.loop = true;        // se repite al terminar

// Agregamos el video al contenedor
contenedor.appendChild(video);   

//Voz lectura de mensaje
const addMessage = () => {
  const text = "Bienvenido a la U P S.";
  const message = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(message);
}

const pauseResume = () => {
  if (speechSynthesis.paused)
    speechSynthesis.resume();
  else
    speechSynthesis.pause();
}

const cancel = () => speechSynthesis.cancel();

const [ttsButton, pauseResumeButton, cancelButton] = document.querySelectorAll("button");
ttsButton.addEventListener("click", () => addMessage());
pauseResumeButton.addEventListener("click", () => pauseResume());
cancelButton.addEventListener("click", () => cancel());
