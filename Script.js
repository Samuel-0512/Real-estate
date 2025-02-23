const menu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    mobileMenu.classList.toggle('active');
}
)
/*rework the drop down code*/
/*
const list = document.getElementById('dropdown');
const dropdown = document.querySelector('.listing-menu');

list.addEventListener('click', function(){
    dropdown.classList.toggle('drop');
})
*/