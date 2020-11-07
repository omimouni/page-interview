import "./styles/main.css";
import "swiper/swiper-bundle.css";
import Swiper from "swiper";
import anime from "animejs/lib/anime.es.js";
import v from "./video.mp4";

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  centeredSlidesBounds: true,
  spaceBetween: 20,
});

const shopItems = document.getElementsByClassName("shop-item");

for (let i = 0; i < shopItems.length; i++) {
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

const button = document.getElementById("policy-button");

button.addEventListener("click", (e) =>
  anime({
    targets: button.parentNode,
    scale: 0,
    delay: 100,
  })
);

anime({
  targets: ".up-anime",
  translateY: 0,
  delay: 500,
});

const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");

openMenu.addEventListener("click", (e) => {
  e.preventDefault();
  anime({
    targets: ".menuboard",
    translateX: 0,
    delay: 200,
    easing: "easeInElastic(0.5, .6)",
  });
});

closeMenu.addEventListener("click", (e) => {
  e.preventDefault();
  anime({
    targets: ".menuboard",
    translateX: "100%",
    delay: 500,
    easing: "easeInElastic(1, .3)",
  });
});

const img = document.getElementById('menuCover');
const links = document.getElementsByClassName("link");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", e => {
    img.setAttribute('src',  links[i].getAttribute('data-img') );
  });
}