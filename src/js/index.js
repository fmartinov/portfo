const navToggle = document.querySelector('.nav-toggle'); //Get the first element in the document with class=".nav-toggle"
const navLinks = document.querySelectorAll('.nav__link') //Get all elements in the document with class=".nav__link"

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open'); //Toggle between adding and removing a class name from an element
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open'); //remove a class name from an element
    })
})
