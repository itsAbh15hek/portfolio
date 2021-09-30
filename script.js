const body = document.querySelector("nav");
const phone = document.querySelector(".phone");
const phoneNmb = document.querySelector(".phone-nmb");
const phoneIcon = document.querySelector(".fa-phone-square-alt");

let isActive = false;

const scrolled = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("nav").className = "navBg";
  } else {
    document.querySelector("nav").className = "";
  }
};
const showNmb = () => {
  isActive = true;
  if (isActive) {
    phoneNmb.style.visibility = "visible";
    phoneIcon.style.visibility = "hidden";
  }
  if (!isActive) {
    phoneNmb.style.visibility = "hidden";
    phoneIcon.style.visibility = "visible";
  }
};
const hideNmb = () => {
  isActive = false;
  if (isActive) {
    phoneNmb.style.visibility = "visible";
    phoneIcon.style.visibility = "hidden";
  }
  if (!isActive) {
    phoneNmb.style.visibility = "hidden";
    phoneIcon.style.visibility = "visible";
  }
};

window.onscroll = () => scrolled();
phone.addEventListener("click", () => {
  showNmb();
});
phone.addEventListener("dblclick", () => {
  hideNmb();
});
