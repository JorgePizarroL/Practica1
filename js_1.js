   
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


