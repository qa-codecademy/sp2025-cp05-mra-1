document.addEventListener('DOMContentLoaded', function() {
    let heroImg = document.getElementById('hero');
    let thumbnails = document.querySelectorAll('#gallery-thumbnails a');
    let currentIndex = 0;
    
    if (heroImg && thumbnails.length > 0) {
        let dynamicElements = Array.from(thumbnails).map(thumb => ({
            src: thumb.href,
            thumb: thumb.href
        }));
        
        let heroGallery = lightGallery(heroImg.parentNode, {
            speed: 500,
            addClass: 'lg-blur-backdrop',
            download: false,
            counter: true,
            dynamic: true,
            dynamicEl: dynamicElements
        });
        
        if (thumbnails.length > 0) {
            thumbnails[0].classList.add('active');
        }
        
        heroImg.addEventListener('click', () => heroGallery.openGallery(currentIndex));
        
        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', function(e) {
                e.preventDefault();
                
                heroImg.src = this.href;
                
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                currentIndex = index;
            });
        });
    }

    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});