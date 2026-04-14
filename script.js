function filterProjects(category) {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    if (category === "all") {
      card.style.display = "block";
    } else {
      if (card.classList.contains(category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  });
}
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const max = 800;

  const ratio = Math.min(scroll / max, 1);

  document.body.style.background = `linear-gradient(
      135deg,
      rgb(${10 + ratio * 20}, 15, 28),
      rgb(${15 + ratio * 40}, 23, 42)
    )`;
});
