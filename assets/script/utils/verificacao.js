export function verificacao(valor) {
    if (valor === '') {
        Swal.fire({
            title: 'Busca vazia',
            text: 'Digite um nome',
            icon: 'error',
            theme: 'dark',
            confirmButtonColor: '#28c941'
        })
        return false;
    }

    if (valor.length < 3) {
        Swal.fire({
            title: 'Número de caracteres inválido',
            text: 'Digite pelo menos 3 caracteres',
            icon: 'error',
            theme: 'dark', 
            confirmButtonColor: '#28c941', 
        });
        return false;
    }
    return true;
};