document.addEventListener('DOMContentLoaded', function() {
    let guzik = document.querySelector("#slide");
    let cytat = document.querySelector("#cytat");
    let div = document.querySelector(".in");

    guzik.addEventListener('click', () => {
        div.classList.toggle('open');
        guzik.classList.toggle('open');
        cytat.classList.toggle('open');
    })
});