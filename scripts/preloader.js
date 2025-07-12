window.addEventListener('load', () => {
      setTimeout(() => {
        document.getElementById('preloader').classList.add('loaded');
      }, 3000);
       setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
      }, 4010); 
    });
