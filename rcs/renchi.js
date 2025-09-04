// =============================
// Pencarian Produk
// =============================
const searchInput = document.getElementById("search");
const productCards = document.querySelectorAll("#card-container .card");

searchInput.addEventListener("keyup", () => {
  const filter = searchInput.value.toLowerCase();

  productCards.forEach(card => {
    const title = card.querySelector(".card-front h3").textContent.toLowerCase();
    card.style.display = title.includes(filter) ? "" : "none";
  });
});

// =============================
// Flip Card (klik/tap untuk mobile)
// =============================
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    card.querySelector(".card-inner").classList.toggle("is-flipped");
  });
});
