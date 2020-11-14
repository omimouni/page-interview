import "./styles/font/font.css";
import "./styles/main.css";
import "swiper/swiper-bundle.css";
import Swiper from "swiper";
import anime from "animejs/lib/anime.es.js";

const loading = document.getElementsByClassName("loading")[0];

anime({
  targets: ".loading",
  bottom: 0,
  delay: 800,
  complete: (e) => (loading.innerHTML = "Loading ..."),
});

window.addEventListener("load", (e) => {
  anime({
    targets: loading.parentNode,
    opacity: 0,
    delay: 100,
    complete: (e) => loading.parentNode.remove(),
  });
});

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 2,
  centeredSlidesBounds: true,
  spaceBetween: 20,
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
  },
});

const shopItems = document.getElementsByClassName("shop-item");

for (let i = 0; i < shopItems.length; i++) {
  console.log(i);
  shopItems[i].addEventListener("mouseover", (e) => {
    anime({
      targets: shopItems[i].children[1],
      translateY: 0,
      // easing: 'spring'
    });
  });

  shopItems[i].addEventListener("mouseleave", (e) => {
    anime({
      targets: shopItems[i].children[1],
      translateY: 300,
      // easing: 'easeInElastic(, .6)'
    });
  });
}

const buttons = document.getElementsByClassName("policy-button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) =>
    anime({
      targets: buttons[i].parentNode,
      opacity: 0,
      delay: 100,
      complete: (e) => button[i].parentElement.remove(),
    })
  );
}

anime({
  targets: ".up-anime",
  translateY: 0,
  delay: 500,
});

const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");

openMenu.addEventListener("click", (e) => {
  e.preventDefault();
  anime.set(".menuboard", {
    translateX: 0,
  });

  anime.set(".link", {
    bottom: 30,
  });
  anime({
    targets: ".link",
    bottom: 0,
  });
});

closeMenu.addEventListener("click", (e) => {
  e.preventDefault();
  anime.set(".menuboard", {
    translateX: "100%",
  });
});

const img = document.getElementById("menuCover");
const links = document.getElementsByClassName("link");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", (e) => {
    img.setAttribute("src", links[i].getAttribute("data-img"));
  });
}
