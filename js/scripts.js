

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// carrosel

const controls = document.querySelectorAll('.control');
let currentItem = 0 ;

const items = document.querySelectorAll('.item');

const maxItems = items.length;

controls.forEach((control) =>{
    control.addEventListener('click' , ()=>{
        const isLeft = control.classList.contains("arrow-left");
        
        if(isLeft){
            currentItem -= 1;
        }else {
            currentItem +=1;
        }

        if(currentItem >= maxItems){
            currentItem = 0;
        }

        if(currentItem < 0){
            currentItem = maxItems - 1;
        }

        items.forEach(item => item.classList.remove('current-item'));

        items[currentItem].scrollIntoView({
            inline:"center",
            behavior:"smooth"
        })

        items[currentItem].classList.add("current-item");

        console.log("cliquei" , isLeft , currentItem)
    });
});

// carrosel

// scroll reveal
window.sr = ScrollReveal ({reset: true})

ScrollReveal({
	reseat : true,
	distance: '600px',
	duration: 2000,
	delay:400
});

ScrollReveal().reveal('.videologofilho' ,{delay:200 , origin:'bottom'} )

