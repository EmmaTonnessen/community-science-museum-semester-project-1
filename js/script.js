// Hamburger menu

const hamburger = document.querySelector(".fa-bars");
const cross = document.querySelector(".fa-times");
const navigation = document.querySelector("nav");
const navBareMobile = document.querySelector(".top-nav-mobile");
const logo = document.querySelector(".text-logo");


function hamburgerClicked() {
    navigation.style.display = "block";
    hamburger.style.display = "none";
    cross.style.display = "block";
    logo.style.display = "none";
}

hamburger.addEventListener("click", hamburgerClicked);

function crossClicked() {
    navigation.style.display = "none";
    hamburger.style.display = "block";
    cross.style.display = "none";
    logo.style.display = "block";
}

cross.addEventListener("click", crossClicked);