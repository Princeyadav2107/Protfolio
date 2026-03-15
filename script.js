const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => observer.observe(element));

const typingTarget = document.querySelector('[data-typing]');
if (typingTarget) {
  const fullText = typingTarget.textContent.trim();
  typingTarget.textContent = '';
  let index = 0;

  const type = () => {
    typingTarget.textContent = fullText.slice(0, index);
    index += 1;
    if (index <= fullText.length) {
      setTimeout(type, 28);
    }
  };

  setTimeout(type, 400);
}
