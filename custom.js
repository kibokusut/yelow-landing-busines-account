var splide = new Splide(".splide", {
  perPage: 3,
  rewind: true,
  arrows: false,
});

splide.mount();

var className = "navbar-inverteds";
var btn = "btn-color";
var btnOutline = "btn-outline";
var scrollTrigger = 100;

window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByClassName("navbar")[0].classList.add(className);
    document.getElementsByClassName("btn-daftar")[0].classList.add(btn);
    document.getElementsByClassName("btn-masuk")[0].classList.add(btnOutline);
    document.querySelectorAll(".menu-list").forEach((el) => {
      el.style.color = "black";
    });
  } else {
    document.getElementsByClassName("navbar")[0].classList.remove(className);
    document.getElementsByClassName("btn-daftar")[0].classList.remove(btn);
    document
      .getElementsByClassName("btn-masuk")[0]
      .classList.remove(btnOutline);
    document.querySelectorAll(".menu-list").forEach((el) => {
      el.style.color = "white";
    });
  }
};
