// ================== DATA TOKO ==================
const stores = [
  {
    name: "Renchi Shop",
    description: "Pembuatan Website Sederhana, Joki Tugas, RekBer, Apk Premium, Kebutuhan Sosmed",
    image: "img/renchi.jpg",
    category: ["apk", "sosmed", "jasa"],
    verified: true,
    page: "rcs/renchi.html",
  },
  {
    name: "Marchandise Official",
    description:
      "Temukan berbagai produk eksekutif dari talent Genity! Mulai dari pakaian, kaos, jaket, topi, ukiran art, gantungan kunci, tas, poster, stiker, aksesoris, hingga barang koleksi lainnya. Dukung mereka dengan membeli merchandise resmi kami.",
    image: "img/merch.jpg", // Tambahin biar konsisten, bisa ganti sesuai real path
    category: "tech",
    verified: false,
    page: "maintenance.html",
  },
];

// ================== ELEMENT DOM ==================
const storeList = document.getElementById("storeList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

// ================== FUNGSI RENDER ==================
function renderStores(filter = "", category = "all") {
  storeList.innerHTML = "";

  // Filter toko berdasarkan pencarian dan kategori
  const filteredStores = stores.filter((store) => {
    const nameMatch = store.name
      .toLowerCase()
      .includes(filter.toLowerCase());

    const categoryMatch =
      category === "all" ||
      (Array.isArray(store.category)
        ? store.category.includes(category)
        : store.category === category);

    return nameMatch && categoryMatch;
  });

  // Render hasil toko
  filteredStores.forEach((store) => {
    const card = document.createElement("div");
    card.className = "store-card";

    card.innerHTML = `
      ${store.verified ? `<div class="verified">Official</div>` : ""}
      <img src="${store.image}" alt="${store.name}" class="store-image" />
      <h3>${store.name}</h3>
      <p>${store.description}</p>
      <a href="${store.page}">
        <button>Visit Store</button>
      </a>
    `;

    storeList.appendChild(card);
  });
}

// ================== EVENT LISTENER ==================
searchInput.addEventListener("input", () => {
  renderStores(searchInput.value, categoryFilter.value);
});

categoryFilter.addEventListener("change", () => {
  renderStores(searchInput.value, categoryFilter.value);
});

// ================== INISIALISASI ==================
renderStores();
