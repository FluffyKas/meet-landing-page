const observedElements = document.querySelectorAll('.observed');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('reveal', entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.45,
  }
);

observedElements.forEach((element) => {
  observer.observe(element);
});
