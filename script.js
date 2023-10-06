const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });
  
const header = document.querySelector('header');
function changeHeaderBg() {
  header.classList.add('glass');
}

document.addEventListener("scroll", (event) => {
  changeHeaderBg();
  let scrollPosition = window.scrollY;
  if (scrollPosition === 0) {
    header.classList.remove('glass');
  }

})

const body = document.querySelector('body');
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

// body.addEventListener("click", (event) => {
//   closeSideBar();
// })


  