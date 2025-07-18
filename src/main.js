import { router } from './Router/router';
import './style.css';

const main = document.querySelector(".main");

window.addEventListener('hashchange', function() {
  router(main);
});

window.addEventListener("DOMContentLoaded", () => {
  router(main);
});