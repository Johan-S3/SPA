import { recorrer } from './Router/router';
import './style.css';

const main = document.querySelector(".main");

window.addEventListener('hashchange', function() {
  const hash = window.location.hash.slice(1);
  console.log("El hash ha cambiado.");
  console.log("Nuevo hash:", hash);

  recorrer(hash, main);
});

window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash.slice(1);
  if (hash) recorrer(hash, main);
});