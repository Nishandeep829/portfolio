const bg = document.querySelector(".bg");

window.addEventListener("scroll", () => {
  bg.style.transform = `translateY(-${window.scrollY * 0.3}px)`;
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function openProject(link) {
  window.open(link, "_blank");
}