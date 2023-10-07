const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
  },
});

const sidebar = document.querySelector('nav');
const humburger = document.querySelector('#humburger');
const closeBtn = document.querySelector('#close');

function closeSideBar() {
  sidebar.style.right = "-500px";
}

humburger.addEventListener("click", (event) => {
  sidebar.style.right = 0;
})

closeBtn.addEventListener("click", (event) => {
  closeSideBar();
})

const menu = document.querySelectorAll('nav ul li');
menu.forEach(elm => {
  elm.addEventListener("click", (event) => {
    closeSideBar();
  })
});  