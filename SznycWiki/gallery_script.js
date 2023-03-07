let gallery = document.querySelectorAll(".foto");
let selected = document.querySelector("#selected_foto");
let selected_img = document.querySelector("#main_foto");
let current;

let right = document.querySelector("#right");
let left = document.querySelector("#left");

gallery.forEach((element, index) => {
    element.addEventListener("click", (img_target) => {
        selected.style.display = "flex";
        selected_img.src = img_target.target.src;
        current = index;
    })
})

function close_selected(){
    selected.style.display = "none";
}

function next(){
    current += 1;
    selected_img.src = gallery[current].querySelector("img").src;
}

function prev(){
    current -= 1;
    selected_img.src = gallery[current].querySelector("img").src;
}






