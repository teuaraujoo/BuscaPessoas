import { getData } from './utils/getData.js';
import { verificacao } from './utils/verificacao.js';
import { homeGsap } from './utils/animations/homeGsap.js';

document.addEventListener('DOMContentLoaded', () => {
    homeGsap();
});

particlesJS("particles-js", {
  particles: {
    number: { value: 120 },
    color: { value: "#e2e3e2" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#28c941",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      }
    }
  },
  retina_detect: true
});

function init() {

    const btn = document.querySelector('button');

    btn.addEventListener("click", (e) => {
        const nome = document.getElementById('nome');
        const div = document.querySelector('.resultado');

        e.preventDefault();
        const valor = nome.value;
        if (!verificacao(valor)) {
            nome.value = '';
            div.innerHTML = '';
            return;
        };
        getData(valor);
        nome.value = '';
    });
};

init();