const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("sectionShow");
    }
  });
});
document
  .querySelectorAll(".sectionHidden")
  .forEach((el) => observer.observe(el));

console.log("trigerring the observer : " + entry.isIntersecting, entry.target);
