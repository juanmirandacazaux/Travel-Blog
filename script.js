// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    if (link.hash) {
      e.preventDefault();
      document.querySelector(link.hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form handling (demo)
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for your message! We’ll get back to you soon.');
  e.target.reset();
});



