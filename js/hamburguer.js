const menuBtn = document.getElementById("menuBtn");
const sideNav = document.getElementById("sideNav");
const menu = document.getElementById("menu");


menuBtn.addEventListener("click", action);



function action() {
    if (sideNav.style.right == "0px") {
        sideNav.style.right = "-300px";
    } else {
        sideNav.style.right = "0px";
    }
}
