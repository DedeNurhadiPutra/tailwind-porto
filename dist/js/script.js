// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}

// Hamburger 
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden');
});


// GSAP
const tl = gsap.timeline({defaults: {ease: "power1.out"}})
tl.to('.hide-text', {y: "0%", duration: 1, stagger: 0.25})
tl.to('.slider', {y: "-100%", duration: 1.5, delay: 0.5})
tl.to('.loader', {y: "-100%", duration: 1}, "-=1")
tl.fromTo('#home', {opacity: 0}, {opacity: 1, duration: 1}, "-=0.5")
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1}, "-=0.5")
tl.fromTo('#fp-nav', {opacity: 0}, {opacity: 1, duration: 1}, "-=0.5")


// FullPage
new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['', '', '', ''],
    credits: false,
});
