// Home Page Slider

var swiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  /*  autoplay: {
        delay: 4500,
        disableOnInteraction: false,
        }, */
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Shop Slider

var swiper = new Swiper(".shop-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    924: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});


// Testimonial Slider

var swiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    /*  autoplay: {
          delay: 4500,
          disableOnInteraction: false,
          }, */
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });


  // Nav List

  const menuBtn = document.querySelector(".lnr-menu");
  const navList = document.querySelector(".navlist");
  
  menuBtn.onclick = function() {
      menuBtn.classList.toggle("lnr-chevron-up");
      menuBtn.classList.toggle("lnr-menu");
      navList.classList.toggle("active");
  };
  

  // Scroll Reveal

  const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: false
});

sr.reveal('.about-container .left', { delay: 100, origin: 'left' });
sr.reveal('.services-container', { delay: 100, origin: 'top' });
sr.reveal('.experts-container', { delay: 100, origin: 'top' });
sr.reveal('.blog-container', { delay: 100, origin: 'left' });
sr.reveal('.contact-container .left', { delay: 100, origin: 'bottom' });
sr.reveal('.contact-container .right', { delay: 100, origin: 'top' });

