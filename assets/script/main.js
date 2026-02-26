import { getData } from './utils/getData.js';
import { verificacao } from './utils/verificacao.js';
import { homeGsap } from './utils/animations/homeGsap.js';

    document.addEventListener('DOMContentLoaded', () => {
        homeGsap();
    });
function init () {

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