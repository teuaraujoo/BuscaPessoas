export function clearBtn() {

    const btn = document.getElementById('clear');

    btn.addEventListener("click", () => {
        const div = document.querySelector('.resultado');
        div.innerHTML = '';
    })
}