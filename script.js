// Simple scroll animation logic
document.querySelectorAll('.section').forEach((section, index) => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(50px)';
  setTimeout(() => {
    section.style.transition = 'all 1s ease';
    section.style.opacity = 1;
    section.style.transform = 'translateY(0)';
  }, index * 500);
});
