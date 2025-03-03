// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Array para almacenar los nombres de amigos
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
   const nombre = input.value.trim().toUpperCase();
 // Eliminar espacios en blanco

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Expresión regular para permitir solo letras y espacios
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!regex.test(nombre)) {
        alert("El nombre no puede contener números ni caracteres especiales.");
        return;
    }

    // Verificar si el nombre ya está en la lista
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Actualizar la lista en el HTML
    actualizarLista();

    // Limpiar el campo de entrada
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista existente

    //Recorrer el array y agregar cada amigo a la lista
    for (let i = 0; i < amigos.length; i++) {
	const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos[i];
        lista.appendChild(nuevoElemento);
    }
}

function sortearAmigo() {
    //Verificar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    //Mostrar el resultado en la lista de resultados
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;

//esta funcion deberia lanzar confeti
    lanzarConfeti();

    // Reiniciar la lista de amigos después del sorteo
    amigos = [];
    actualizarLista(); // Limpiar la lista en el HTML

    //LIMPIAR EL RESULTADO DESPUÉS DE 4 SEGUNDOS
    setTimeout(() => {
        resultado.innerHTML = ""; 
    }, 4000);
}

//Agraga un evento de escuchar las teclas y cuando se presiona Enter se ejecuta el boton 
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('botonAgregar').click();}

});

// Función para lanzar confeti
 function lanzarConfeti() {
    confetti({
      particleCount: 200,  // Cantidad de confeti
      spread: 70,          // Ángulo de dispersión
      origin: { y: 0.6 }   // Punto de origen (más arriba en la pantalla)
});
}
