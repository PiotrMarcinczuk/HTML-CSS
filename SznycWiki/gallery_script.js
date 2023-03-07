let elements = document.querySelectorAll(".foto");
let selected = document.querySelector("#selected_foto");
let selected_img = selected.querySelector("img");

elements.forEach((element) => {
    element.addEventListener("click", (img_target) => {
        selected.style.display = "flex";
        selected_img.src = img_target.target.src;
    })
})

