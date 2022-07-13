const abrir = document.querySelector(".hamburguer_menu")
const cerrar = document.querySelector(".closed_menu")

const menu_flotante = document.querySelector(".menu_right")

abrir.addEventListener("click", function(){
    menu_flotante.classList.toggle("active")
})
cerrar.addEventListener("click", function(){
    menu_flotante.classList.toggle("active")
})


