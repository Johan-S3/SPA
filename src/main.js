import { router } from './Router/router';
import './style.css';

const main = document.querySelector(".main");

window.addEventListener('hashchange', function() {
  const hash = window.location.hash.slice(1);
  router(hash, main);
});

window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash.slice(1);
  if (hash) router(hash, main);
});