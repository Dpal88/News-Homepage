const btnOpen = document.querySelector('#btn-Open');
const btnClose = document.querySelector('#btn-Close');

const topNavMenu = document.querySelector('.topnav__menu');
const overlay = document.querySelector('.overlay');

const media = window.matchMedia('(width < 48em)')

const main = document.querySelector('main');
const body = document.querySelector('body');

function openMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'true');
    topNavMenu.removeAttribute('inert');
    // remove style attribute so transition effect from css file will run
    topNavMenu.removeAttribute('style');
    // set main to inert so it's inaccessible from screen readers and keyboards
    main.setAttribute('inert', '');
    // locks scrolling when menu is open
    // bodyScrollLockUpgrade.disableBodyScroll(body);
    // when keyboard is used to open menu, focus on btnClose button.
    btnClose.focus();

    topNavMenu.classList.add('active');
    overlay.classList.add('overlayActive');
}

function closeMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'false');
    topNavMenu.setAttribute('inert', '');
    
    main.removeAttribute('inert');
    // unlocks scrolling when menu is closed
    // getting erorr
    // bodyScrollLockUpgrade.enableBodyScroll(body);
    // when keyboard is used to close menu, focus on btnOpen button.
    btnOpen.focus();

    topNavMenu.classList.remove('active');
    overlay.classList.remove('overlayActive');

    // when mobile menu is closed we want to cancel out the transition again,
    // but only after 500 ms so that it happens only after the sliding animation is complete.
    setTimeout(() => {
        topNavMenu.style.transition = 'none';
    }, 500)
}

function setupTopNav(e) {
    if (e.matches) {
        // is mobile
        console.log('is mobile');

        topNavMenu.setAttribute('inert', '');
        // removes transition so when users switch between screens,
        // you wont see the menu slide across the screen
        topNavMenu.style.transition = 'none';
    } else {
        // is tablet/dekstop
        console.log('is desktop');

        // automatically close menu if it's open when you switch from mobile to desktop
        closeMobileMenu();
        topNavMenu.removeAttribute('inert');
    }
}

setupTopNav(media);

btnOpen.addEventListener('click', openMobileMenu);

btnClose.addEventListener('click', closeMobileMenu);

// if media changes from true to false or vice versa 
// (is under 48em and goes above, or is above and goes under 48em)
// then run setupTopNav function and pass event as argument
media.addEventListener('change', function(e) {
    setupTopNav(e);
})