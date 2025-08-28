const products = [
  { id: 1, name: "Smartphone", category: "electronics", price: "$499", img: "https://via.placeholder.com/200x150?text=Phone" },
  { id: 2, name: "Laptop", category: "electronics", price: "$999", img: "https://via.placeholder.com/200x150?text=Laptop" },
  { id: 3, name: "T-Shirt", category: "clothing", price: "$19", img: "https://via.placeholder.com/200x150?text=T-Shirt" },
  { id: 4, name: "Sneakers", category: "clothing", price: "$59", img: "https://via.placeholder.com/200x150?text=Sneakers" },
  { id: 5, name: "Watch", category: "accessories", price: "$149", img: "https://via.placeholder.com/200x150?text=Watch" },
  { id: 6, name: "Headphones", category: "electronics", price: "$79", img: "https://via.placeholder.com/200x150?text=Headphones" }
];

const productList = document.getElementById("product-list");
const searchBox = document.getElementById("search");
const filterBtns = document.querySelectorAll(".filter-btn");

// Function to display products
function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="price">${p.price}</p>
    `;
    productList.appendChild(card);
  });
}

// Initial load
displayProducts(products);

// Search Functionality
searchBox.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(value));
  displayProducts(filtered);
});

// Filter Functionality
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    if (category === "all") {
      displayProducts(products);
    } else {
      const filtered = products.filter(p => p.category === category);
      displayProducts(filtered);
    }
  });
});
