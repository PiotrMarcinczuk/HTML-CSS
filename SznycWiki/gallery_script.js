let gallery = document.querySelectorAll(".foto");
let selected = document.querySelector("#selected_foto");
let selected_img = document.querySelector("#main_foto");
let podpis = document.querySelectorAll('.podpis');

let figcaption = document.querySelectorAll('.napis_fig');
let napis = document.querySelector('.napis');
let current;

let right = document.querySelector("#right");
let left = document.querySelector("#left");



gallery.forEach((element, index) => {
    element.addEventListener("click", (img_target) => {
        selected.style.display = "flex";
        selected_img.src = img_target.target.src;
        current = index;
        napis.textContent = podpis[index].textContent;
    })
})

function close_selected(){
    selected.style.display = "none";
}

function next(){
    if(current == gallery.length-1){
        current = 0;
        selected_img.src = gallery[current].querySelector("img").src;
        napis.textContent = podpis[current].textContent;
    }
    else{
        current += 1;
        selected_img.src = gallery[current].querySelector("img").src;
        napis.textContent = podpis[current].textContent;
    }
}
function prev(){
    if(current == 0){
        current = gallery.length-1;
        selected_img.src = gallery[current].querySelector("img").src;
        napis.textContent = podpis[current].textContent;
    }
    else{
        current -= 1;
        selected_img.src = gallery[current].querySelector("img").src;
        napis.textContent = podpis[current].textContent;
    }
}






