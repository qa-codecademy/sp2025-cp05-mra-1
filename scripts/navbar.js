document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.island-navbar');
    const toggler = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelector('.navbar-nav');
    const mediaQuery = window.matchMedia('(max-width: 768px)'); 

    let lastScrollY = 0; 
    let isMobile = mediaQuery.matches; 

    
    mediaQuery.addEventListener('change', (e) => {
        isMobile = e.matches;
        
        if (!isMobile) {
            navbar.classList.remove('open', 'scrolled-down');
            toggler.classList.remove('active');
            
            navLinks.style.maxHeight = '';
            navLinks.style.opacity = '';
            navLinks.style.pointerEvents = '';
            navLinks.style.visibility = '';
        }
    });

    
    if (toggler) {
        toggler.addEventListener('click', function() {
            if (isMobile) { 
                navbar.classList.toggle('open');
                toggler.classList.toggle('active');

                
                if (navbar.classList.contains('open')) {
                    navbar.classList.remove('scrolled-down');
                }
            }
        });
    }

    
    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (isMobile && navbar.classList.contains('open')) {
                    navbar.classList.remove('open');
                    toggler.classList.remove('active');
                }
            });
        });
    }

    
    
    

    

    
    
    
    
    
    
    
    

    
    

    
    
    
    
});