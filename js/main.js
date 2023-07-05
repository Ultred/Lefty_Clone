document.addEventListener("scroll", () => {
  const navbar = document.getElementById("nav");
  if (window.scrollY > 0) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
});
//Nav
const navbar = document.getElementById("navbar1");
const toggle = document.getElementById("toggle");
const navhum = document.querySelectorAll(".navhum");

toggle.addEventListener("click", () => {
  navhum.forEach((item) => item.classList.toggle("nav"));
  if (navbar.classList.contains("hidden")) {
    navbar.classList.remove("hidden");
    navbar.classList.add("block");
  } else if (navbar.classList.contains("block")) {
    navbar.classList.remove("block");
    navbar.classList.add("hidden");
  }
});

window.onresize = function () {
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (screenWidth <= 768) {
    navbar.classList.remove("block");
    navbar.classList.add("hidden");
    navhum.forEach((item) => item.classList.remove("nav"));
  }
};
