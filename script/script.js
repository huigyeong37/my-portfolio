const myMobileMenu = document.getElementById("my-mobile-header");

function openMobileMenu() {
    myMobileMenu.classList.add("open") 
}
function closeMobileMenu() {
    myMobileMenu.classList.remove("open")
}

document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".title");
  title.classList.add("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const uxuititle = document.querySelector(".uxuititle");
  uxuititle.classList.add("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const advertitle = document.querySelector(".advertitle");
  advertitle.classList.add("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const adbackground = document.querySelector(".adbackground");
  adbackground.classList.add("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const mokfront = document.querySelector(".mokfront");
  mokfront.classList.add("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const gratitle = document.querySelector(".gratitle");
  gratitle.classList.add("active")
});

document.addEventListener("DOMContentLoaded", () => {
  const etctitle = document.querySelector(".etctitle");
  etctitle.classList.add("active")
});
//여기서 Cannot read properties of null 에러가 났다 이유가 뭘까?