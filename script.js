//alert("Hola este es mi Javascript");

//let nombre="adrian";

//console.log(nombre)

//let titulo = document.getElementById("#menu123");
//let titulo = document.getElementsByClassName(".fuente_acento");
let titulo = document.querySelector("#menu123");

console.log(titulo.innerText);

if (titulo.innerText=="Menu")
    titulo.innerText="Hola"
else
    titulo.innerText="Falso"

function cambiartexto(nombre, ciudad){
    let contenido="Mi nombre es " + nombre + ", vivo en " + ciudad+ " y esta es mi primera web, espero aprender mucho y poder hacer chistes con mis compañeros"
    return contenido
}

let parrafo=document.querySelector("#parrafoacambiar")

parrafo.innerText=cambiartexto("Hernando","Bogotá");

//menu resposive

let menu_responsive = document.querySelector(".checkbtn");
      
menu_responsive.onclick = function () {
        navBar = document.querySelector(".navbar");
        navBar.classList.toggle("active");
      };

let menu_opciones = document.querySelectorAll(".opcionmenu");
      
      menu_opciones.onclick = function () {
              navBar = document.querySelector(".navbar");
              navBar.classList.toggle("active");
            };
      

//formulario
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafoalerta = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafoalerta.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener 4 o más caracteres`;
    valido = false;
  }
  if (!valido) {
    parrafoalerta.innerHTML = warnings;
  } else {
    parrafoalerta.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});