document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the section is visible
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });