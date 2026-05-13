// Mobile navigation functionality
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');

    // Burger Animation
    burger.classList.toggle('toggle');
  });

  // Close nav when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if(nav.classList.contains('nav-active')){
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
      }
    });
  });
}

navSlide();

// Scroll Animations using Intersection Observer
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

document.querySelectorAll('.fade-in, .slide-up').forEach(element => {
  appearOnScroll.observe(element);
});

// Basic Form Handling
const contactForm = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');

if(contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    const originalText = btn.innerText;
    
    // Simulate API call
    btn.innerText = 'Sending...';
    btn.disabled = true;
    
    setTimeout(() => {
      btn.innerText = "Request Sent Successfully!";
      btn.style.background = "#10b981"; // success green
      contactForm.reset();
      
      setTimeout(() => {
        btn.innerText = originalText;
        btn.style.background = "";
        btn.disabled = false;
      }, 3000);
      
    }, 1500);
  });
}
