// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

//funcion para agregar amigos y borrar espacios en blancos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

//validar que el nombre no sea vacio
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }
//expresion para permitir solo letras y espacios
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
     if (!regex.test(nombre)) {
        alert("Por favor, ingresa un nombre válido.");
        return;
     }
//validar que el nombre no se repita
  
    if (amigos.includes(nombre)) {
        alert("Este nombre ya fue agregado.");
        return;
    }//termina funcion agreagar amigos

//agregar el nombre al array
    amigos.push(nombre);

//actualizar la lista de amigos
    actualizarLista();

//limpiar el input
    input.value = " ";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = " ";  //limpiar la lista

    //agregar cada amigo a la lista
    for (let i = 0; i < amigos.length; i++) {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos[i];
        lista.appendChild(nuevoElemento);
    }
}

//verificar que existe al menos un amigo en la lista para poder sortear
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    //generar un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //obtener el amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    //mostrar el amigo sorteado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;

    //reiniciar la lista de amigos
    amigos = [];
    actualizarLista();  //limpia la lista en el HTML

    //limpiar el resultado despues de 5 segundos 
    setTimeout(() => {
        resultado.innerHTML = " ";
    }, 5000);   //5000 milisegundos = 5 segundos
}

//capturar el keydown de la tecla Enter y simula un click en el boton agregar
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('botonAgregar').click();
    }
})