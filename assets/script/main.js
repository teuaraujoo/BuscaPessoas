import { getData } from './utils/getData.js';
import { verificacao } from './utils/verificacao.js';
import { homeGsap } from './utils/animations/homeGsap.js';
import { clearBtn } from './utils/clearBtn.js';
import { changeBtn } from './utils/changeBtn.js';

document.addEventListener('DOMContentLoaded', () => {
  homeGsap();
  clearBtn();
  changeBtn();
});

particlesJS("particles-js", {
  particles: {
    number: { value: 120 },
    color: { value: "#28c941" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#000000",
      opacity: 1,
      width: 1
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1
        }
      }
    }
  },
  retina_detect: true
});

function init() {

  const btn = document.getElementById('submit');

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