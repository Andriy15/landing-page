const accordion = document.querySelectorAll('.container-ac')
const nav = document.querySelectorAll('.nav')

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

// span.style.borderBottom = '1px solid #1375ED'
// span.style.color = '#1375ED'

// Hambuger Menu
// Hamburger Menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
    closeMenu.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    closeMenu.style.display = 'none';
    document.body.style.overflow = '';
    window.scrollTo(0, 0);
});

