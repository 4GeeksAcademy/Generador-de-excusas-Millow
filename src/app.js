/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#Excusa").innerHTML = generarExcusa();
  });
};
let generarExcusa = () => {
  let who = ["El Perro", "El Pinguino", "Mi Pajaro", "Mi Abuela"];

  let action = ["Orino", "Salvo", "Rompio", "Escupio", "Quemo"];

  let What = ["Mi Telefono", "Mi Tarea", "Mis Zapatillas", "Mi Coche"];

  let When = ["Ayer", "Durante La Clase", "En la Mañana", "En la Cafeteria"];

  let arrayDeExcusas = [who, action, What, When];

  let excusa = arrayDeExcusas.map(arr => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  });

  return excusa.join(" ");
};
