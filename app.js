// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function limpiarEspacio() {
    document.getElementById("amigo").value = "";

}

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre");
        return;
    } 
}
