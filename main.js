var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "Python Coder","SQL Query Builder","WordPress Developer",
    "DSA & OOPs Explorer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const links = document.querySelectorAll('.resume-link');
  const sections = document.querySelectorAll('.resume-section');

  links.forEach(link => {
    link.addEventListener('click', () => {
      // Activate clicked link
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Show matching section
      const targetId = link.getAttribute('data-target');
      sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === targetId) {
          section.classList.add('active');
        }
      });
    });
  });
// code for hamburgure
function toggleMenu() {
    document.querySelector('.navbar').classList.toggle('active');
  }