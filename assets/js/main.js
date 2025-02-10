document.addEventListener('DOMContentLoaded', () => {
  "use strict";

/**
   * Preloader
   */
const preloader = document.querySelector('#preloader');
if (preloader) {
  // Show the preloader for 10 seconds
  setTimeout(() => {
    preloader.style.transition = 'opacity 1s ease-out';  // Set up the fade-out transition
    preloader.style.opacity = 0;  // Fade out the preloader after 10 seconds

    // Remove the preloader after the fade-out transition is complete
    setTimeout(() => {
      preloader.remove();  // Remove the preloader element after fade-out
    }, 1000);  // 1 second delay to match the fade-out transition duration
  }, 300); // Show preloader for 10 seconds before fading out
}
});

  /**
   * Sticky Header on Scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop;
    let nextElement = selectHeader.nextElementSibling;

    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('sticked');
        if (nextElement) nextElement.classList.add('sticked-header-offset');
      } else {
        selectHeader.classList.remove('sticked');
        if (nextElement) nextElement.classList.remove('sticked-header-offset');
      }
    }
    window.addEventListener('load', headerFixed);
    document.addEventListener('scroll', headerFixed);
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  // JavaScript to toggle the mobile menu visibility

  // Get the elements
  const hamburger = document.querySelector('.mobile-nav-show');
const closeButton = document.querySelector('.mobile-nav-hide');
const body = document.body;

// Add event listener for hamburger click to toggle the menu
hamburger.addEventListener('click', function() {
  body.classList.add('mobile-nav-active');  // Show the nav and X icon
});

// Add event listener for close button (X) to close the menu
if (closeButton) {
  closeButton.addEventListener('click', function() {
    body.classList.remove('mobile-nav-active');  // Hide the nav and X icon
  });
}
  /**
   * Hide mobile nav on same-page/hash links and close on click
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      // Close the mobile nav when clicking any link (on mobile)
      if (document.querySelector('.mobile-nav-active')) {
        body.classList.remove('mobile-nav-active');
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  
  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

// Make FAQ-question disappear onclick of accordion-button

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(function(item) {
  const button = item.querySelector('.accordion-button');
  const collapseElement = item.querySelector('.accordion-collapse');
  
  // Store the original text of the button
  const originalText = button.textContent;

  // Add event listeners to handle show and hide events
  collapseElement.addEventListener('show.bs.collapse', function() {
    // Hide the button text when the accordion is expanded
    button.textContent = '';
  });

  collapseElement.addEventListener('hide.bs.collapse', function() {
    // Restore the button text when the accordion is collapsed
    button.textContent = originalText;
  });
});


  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

