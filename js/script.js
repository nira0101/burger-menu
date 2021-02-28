const menuI = document.querySelector(".hamMenu");
const navBar = document.querySelector(".nav_bar");
const change = document.querySelector(".change");
const hea = document.querySelector(".hea");

menuI.addEventListener('click', ()=>{
    navBar.classList.toggle("change");
    hea.classList.add("change2");
   

})

