import "./styles/main.css";
import "swiper/swiper-bundle.css";
import Swiper from "swiper";

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  centeredSlidesBounds: true,
  spaceBetween: 20,
});

const shopItems = document.getElementsByClassName("shop-item");

for (let i = 0; i < shopItems.length; i++) {
  shopItems[i].addEventListener("mouseover", (e) =>
    shopItems[i].children[1].classList.remove("hidden")
  );

  shopItems[i].addEventListener("mouseleave", (e) =>
    shopItems[i].children[1].classList.add("hidden")
  );
}
