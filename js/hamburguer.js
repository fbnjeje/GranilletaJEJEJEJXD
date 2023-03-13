const menuBtn = document.getElementById("menuBtn");
const sideNav = document.getElementById("sideNav");
const menu = document.getElementById("menu")

menuBtn.addEventListener("click",action);



function action(){
    if(sideNav.style.right == "-300px"){
        sideNav.style.right = "0";
    }else{
        sideNav.style.right = "-300px";
    }
}