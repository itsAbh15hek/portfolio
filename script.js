const body = document.querySelector("nav");
const phone = document.querySelector(".fa-phone-square-alt");
const phoneNmb = document.querySelector(".phone-nmb");
const hamburger = document.querySelector(".hamburger");
const phoneIcon = document.querySelector(".fa-phone-square-alt");

let isNumActive = false;
let isMenuActive = false;

const scrolled = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("nav").className = "navBg";
  } else {
    document.querySelector("nav").className = "";
  }
};
const showNmb = () => {
  isNumActive = !isNumActive;
  if (isNumActive) {
    phoneNmb.style.visibility = "visible";
  }
  if (!isNumActive) {
    phoneNmb.style.visibility = "hidden";
  }
};
const showMenu = () => {
  isMenuActive = !isMenuActive;
  if (isMenuActive) {
    document.querySelector("ul").style.display = "flex";
    document.querySelector("#navH1").style.display = "none";
    hamburger.children[0].classList = "fas fa-times fa-2x";
  }
  if (!isMenuActive) {
    document.querySelector("ul").style.display = "none";
    document.querySelector("#navH1").style.display = "block";
    hamburger.children[0].classList = "fas fa-bars fa-2x";
  }
};

window.onscroll = () => scrolled();
phone.addEventListener("click", showNmb);
hamburger.addEventListener("click", showMenu);
