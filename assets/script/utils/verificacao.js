export function verificacao(valor) {
    if (valor === '') {
        alert('Digite algo');
        return false;
    }
    
    if (valor.length < 3) {
        alert('Digite pelo menos 3 caracteres');
        return false;
    }
    return true;
};