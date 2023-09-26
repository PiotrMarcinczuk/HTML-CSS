function check(){
    const inputName = document.getElementById('name');
    const inputEmail = document.getElementById('email');
    const inputs = document.querySelectorAll('input'); 

    inputs.forEach( (el) => {
        console.log(1);
        el.addEventListener('click', (e) => {
            e.target.value = '';
        })
    })
}