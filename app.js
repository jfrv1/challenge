// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function limpiarEspacio() {
    document.getElementById("amigo").value = "";

}

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value.trim();
    if (amigo === "") {
        alert("Debe ingresar un nombre");
        return;
    } 
}
