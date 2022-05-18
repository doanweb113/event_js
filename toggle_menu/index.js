const toggle=document.querySelector(".menu_toggle");
const menu=document.querySelector(".menu");

toggle.addEventListener("click", showmenu)
function showmenu(event){
    event.target.classList.toggle("fa-bars");
    event.target.classList.toggle("fa-times");
    menu.classList.toggle("menu-show");
}

document.addEventListener("click", hidemenu);
function hidemenu(event){
    console.log(event.target);
    if(!menu.contains(event.target) && !event.target.matches(".menu_toggle"))
    {
        console.log("có");
        toggle.classList.remove("fa-times");
        toggle.classList.add("fa-bars");
        menu.classList.remove("menu-show");
    }
}