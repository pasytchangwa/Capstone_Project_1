// Mobile Menu
const openNav = document.querySelector('.open-nav');
const closeNav = document.querySelector('#close-btn');
const getSidebar = document.querySelector('#sidebar');
// show sidebar
openNav.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar');
});
closeNav.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});
