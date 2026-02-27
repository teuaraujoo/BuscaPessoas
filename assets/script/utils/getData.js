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
            Swal.fire({ 
                title: 'Nome não encontrado',
                text: 'Digite um nome válido',
                icon: 'error',
                theme: 'dark',
                confirmButtonColor: '#28c941',
            });
            return;
        }

        resultado.forEach(element => {
            addUser(element, div);
        });
    }).catch(e => {
        console.log('ERROR: ' + e.message);
    })
};