import { addUser } from "./addUser.js"

export function getData(nome, peopleData) {

    const resultado = peopleData.filter((item) => {
        return item.nome.toUpperCase().includes(nome.toUpperCase())
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
};