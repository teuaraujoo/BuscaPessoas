import { addUser } from "./addUser.js"

export function getData(nome) {
    const arquivo = './pessoas.json';

    fetch(arquivo).then(res => {
        return res.json();
    }).then(json => {

        const resultado = [];

        json.filter((item) => {
            if (item.nome.toUpperCase().includes(nome.toUpperCase())) {
                resultado.push(item);
            }
        });

        const div = document.querySelector('.resultado');
        div.innerHTML = '';

        if (resultado.length === 0) {
            alert('Nome nao encontrado!');
            return;
        }

        resultado.forEach(element => {
            addUser(element, div);
        });
    }).catch(e => {
        console.log('ERROR: ' + e.message);
    })
};