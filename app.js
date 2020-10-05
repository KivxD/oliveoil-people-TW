const navSlide = () => {
const navToggle1 = document.querySelector("#navToggle1");
const navToggle2 = document.querySelector("#navToggle2");
const navLinksFadeIn = document.querySelectorAll(".nav-links a");
const menu = document.querySelector("#menu");

navToggle1.addEventListener('click', () => {
menu.classList.toggle('translate-x-full')
});

navToggle2.addEventListener('click', () => {
menu.classList.toggle('translate-x-full')

// navLinks.forEach((link, index) => {
//   console.log(index);
//   if (link.style.animation) {
//     link.style.animation = ''
//   } else {
//     link.style.animation = `navLinksFadeIn 0.5s ease forwards ${index / 7 + 1.5}s`;
//   }
// });

});

}

navSlide()
