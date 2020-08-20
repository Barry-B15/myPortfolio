// select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//Set the initial state
let showMenu = false; // set the initial state to false

// add event listener to the btn
menuBtn.addEventListener('click', toggleMenu);

// create the toggle menu func
function toggleMenu() {
    if (!showMenu) { // show the 'close' class if menu btn is in display or show the menu for other classes
        menuBtn.classList.add('close'); // add a close class to the class list
        menu.classList.add('show'); // show the class
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        // we need to loop thru the list items for navItems
        navItems.forEach(item => item.classList.add('show'));

        // set menu state to true as it should be open by now
        showMenu = true;
    } else {
        // do the opposite if the menu is shown
        menuBtn.classList.remove('close'); // add a close class to the class list
        menu.classList.remove('show'); // show the class
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        // we need to loop thru the list items for navItems
        navItems.forEach(item => item.classList.remove('show'));

        // set menu state to true as it should be open by now
        showMenu = false;

    }

}