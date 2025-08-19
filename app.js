/* ================================
   Les Délices de Barbie — app.js
   ================================ */

// Sample products
const products = [
  {
    id: 1,
    name: "Bol de crudités",
    category: "crudités",
    price: 1000,
    description: "Bol de crudités avocat 1000f simple 1500f avec œuf dur comcombre oignon et petit pain",
    images: ["img/Bol de crudités.jpeg", "img/Bol de crudités1.jpeg"],
    variations: [
      { label: "Bol de crudités avocat 1000f simple", price: 0 },
      { label: "+ œuf dur comcombre oignon et petit pain", price: 1500 },
    ]
  },
  {
    id: 2,
    name: "Pack gourmand",
    category: "Combo",
    price: 3500,
    description: "1 plantain Burger premium 1portion de fritté de pommes 2 crêpes viande hachée fromage 3bouche plantain Un boisson au choix 3500f sans boisson 4mil avec une boisson au choix 4500f avec jus de fruit naturel",
    images: ["img/Pack gourmand.jpeg", "img/Pack gourmand2.jpeg","img/Pack gourmand1.jpeg"],
    variations: [
      { label: "Pack gourmand simple", price: 3500 },
      { label: "avec une boisson au choix", price: 4000 },
      { label: "avec jus de fruit naturel ", price: 4500 },
    ]
  },
  {
    id: 3,
    name: "délice gâteaux",
    category: "patisséries",
    price: 2500,
    description: "Tarif gâteaux Marbre 3000f Orange 2500f Au citron 2500f Chocolat 3000f Noix de coco 3000f Nature 2500f Autre parfum 3mil Les Délices de Barbie Bonne dégustation",
    images: ["img/cake1.jpeg", "img/cake2.jpeg","img/cake1.jpeg"],
    variations: [
      { label: "gâteaux Nature 2500f", price: 2500 },
      { label: "gâteaux Au citron 2500f", price: 2500 },
      { label: "gâteaux a l'Orange 2500f ", price: 2500 },
      { label: "gâteaux au  Chocolat 3000f ", price: 3000 },
      { label: "gâteaux au  Noix de coco 3000f", price: 3000 },
      { label: "gâteaux Autre parfum 3000f", price: 3000 },
    ]
  },
  {
    id: 4,
    name: "Pastels Précuit & Cuit ",
    category: "patisséries",
    price: 150,
    description: "Précuit 150f unité -Cuit 200f unité -Avec fromage 300f unite Schotteggs //Oeuf écossais  -200f unité  Les Délices de Barbie Bonne dégustation",
    images: ["img/pili.jpeg", "img/pili2.jpeg", "img/pili4.jpeg","img/pili3.jpeg","img/pili1.jpeg"],
    variations: [
      { label: "Pastels Précuit 150f unité", price: 150 },
      { label: "Pastels Cuit 200f unité", price: 200 },
      { label: "Pastels Avec fromage 300f unite Schotteggs ", price: 300 },
    ]
  },
  {
    id: 5,
    name: "Pack prestige",
    category: "Combo",
    price: 3500,
    description: "1 plantain Burger premium 2 crêpes viande hachée fromage 1 crêpe pané 3broiche viande 1 Portion de frites +une boisson au choix Prix 4500f sans boisson 5mil avec une boisson au 5500f avec jus de fruits naturels",
    images: ["img/packtera.jpeg"],
    variations: [
      { label: "Pack prestige 4500", price: 4500 },
      { label: "Pack prestige avec une boisson", price: 5000 },
      { label: "Pack prestige avec jus de fruits naturels", price: 5500 }
    ]
  },
  {
    id: 6,
    name: "Mini pizza",
    category: "Combo",
    price: 500,
    description: "Mini pizza 500f unité disponible avec Les Délices de Barbie, Bonne dégustation",
    images: ["img/Minipacker.jpeg"],
  },
];

let cart = [];
let currentProduct = null;
let currentImgIndex = 0;

/* -------------------------------
   DOM Elements
-------------------------------- */
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const catSlider = document.getElementById("catSlider");

// Details modal
const detailsModal = document.getElementById("detailsModal");
const closeDetails = document.getElementById("closeDetails");
const detailImg = document.getElementById("detailImg");
const thumbs = document.getElementById("thumbs");
const detailName = document.getElementById("detailName");
const detailCat = document.getElementById("detailCat");
const detailPrice = document.getElementById("detailPrice");
const detailDesc = document.getElementById("detailDesc");
const detailAdd = document.getElementById("detailAdd");
const variationBox = document.getElementById("variationBox");
const variationSelect = document.getElementById("variationSelect");

// Carousel buttons
const prevImg = document.getElementById("prevImg");
const nextImg = document.getElementById("nextImg");

// Drawer
const btnCart = document.getElementById("btnCart");
const drawer = document.getElementById("drawer");
const closeDrawer = document.getElementById("closeDrawer");
const cartLines = document.getElementById("cartLines");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

// Checkout
const btnCheckout = document.getElementById("btnCheckout");

/* -------------------------------
   Render Products
-------------------------------- */
function renderProducts(list) {
  productGrid.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-img">
        <img src="${p.images[0]}" alt="${p.name}" />
        <button class="icon-btn eye" aria-label="Voir détails">👁</button>
      </div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <p class="muted">${p.description.substring(0, 60)}...</p>
        <div class="price">${p.price} FCFA</div>
        <button class="btn small add">Ajouter</button>
      </div>
    `;
    // open details on eye or image click
    card.querySelector(".eye").addEventListener("click", () => openDetails(p));
    card.querySelector("img").addEventListener("click", () => openDetails(p));
    // quick add
    card.querySelector(".add").addEventListener("click", () => addToCart(p));
    productGrid.appendChild(card);
  });
}

/* -------------------------------
   Categories
-------------------------------- */
function renderCategories() {
  const cats = [...new Set(products.map(p => p.category))];
  catSlider.innerHTML = `<button class="chip active" data-cat="all">Tout</button>`;
  cats.forEach(c => {
    catSlider.innerHTML += `<button class="chip" data-cat="${c}">${c}</button>`;
  });

  [...catSlider.querySelectorAll("button")].forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#catSlider .chip").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.cat;
      renderProducts(cat === "all" ? products : products.filter(p => p.category === cat));
    });
  });
}

/* -------------------------------
   Search
-------------------------------- */
searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  renderProducts(products.filter(p => p.name.toLowerCase().includes(q)));
});

/* -------------------------------
   Product Details Modal
-------------------------------- */
function openDetails(p) {
  currentProduct = p;
  currentImgIndex = 0;
  updateDetailImg();

  detailName.textContent = p.name;
  detailCat.textContent = p.category;
  detailPrice.textContent = `${p.price} FCFA`;
  detailDesc.textContent = p.description;

  // Variations
  if (p.variations) {
    variationBox.style.display = "block";
    variationSelect.innerHTML = "";
    p.variations.forEach((v, i) => {
      variationSelect.innerHTML += `<option value="${i}">${v.label} — ${v.price} FCFA</option>`;
    });
  } else {
    variationBox.style.display = "none";
  }

  detailsModal.setAttribute("aria-hidden", "false");
  detailsModal.classList.add("open");
}

function closeDetailsModal() {
  detailsModal.setAttribute("aria-hidden", "true");
  detailsModal.classList.remove("open");
}
closeDetails.addEventListener("click", closeDetailsModal);

function updateDetailImg() {
  detailImg.src = currentProduct.images[currentImgIndex];
  thumbs.innerHTML = "";
  currentProduct.images.forEach((img, i) => {
    const t = document.createElement("img");
    t.src = img;
    t.className = i === currentImgIndex ? "active" : "";
    t.addEventListener("click", () => {
      currentImgIndex = i;
      updateDetailImg();
    });
    thumbs.appendChild(t);
  });
}
prevImg.addEventListener("click", () => {
  currentImgIndex = (currentImgIndex - 1 + currentProduct.images.length) % currentProduct.images.length;
  updateDetailImg();
});
nextImg.addEventListener("click", () => {
  currentImgIndex = (currentImgIndex + 1) % currentProduct.images.length;
  updateDetailImg();
});
// 🔔 Toast notification
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500); // disappears after 2.5 sec
}

// Add to cart from modal
detailAdd.addEventListener("click", () => {
  const qty = parseInt(document.getElementById("detailQty").value) || 1;
  addToCart(currentProduct, variationSelect.value, qty);
  closeDetailsModal();
});


/* -------------------------------
   Cart
-------------------------------- */
function addToCart(p, variationIndex = null, qty = 1) {
  let price = p.price;
  let label = p.name;

  if (p.variations && variationIndex !== null && variationIndex !== "") {
    const v = p.variations[variationIndex];
    price = v.price;
    label = `${p.name} - ${v.label}`;
  }

  // Multiply by quantity
  const totalPrice = price * qty;

  cart.push({ name: label, price: totalPrice, qty, unitPrice: price });
  renderCart();

  // 🔔 Notify
  showToast(`${qty} × ${label} ajouté au panier 🛒`);
}



function renderCart() {
  cartLines.innerHTML = "";
  let total = 0;
  cart.forEach((item, i) => {
    total += item.price;
    const line = document.createElement("div");
    line.className = "cart-line";
    line.innerHTML = `
      <span>${item.qty} × ${item.name}</span>
      <strong>${item.price} FCFA</strong>
      <button class="icon-btn remove" aria-label="Retirer">✕</button>
    `;
    line.querySelector(".remove").addEventListener("click", () => {
      cart.splice(i, 1);
      renderCart();
    });
    cartLines.appendChild(line);
  });
  cartTotal.textContent = `${total} FCFA`;
  cartCount.textContent = cart.length;
}


/* -------------------------------
   Cart Drawer Toggle
-------------------------------- */
btnCart.addEventListener("click", () => {
  drawer.setAttribute("aria-hidden", "false");
  drawer.classList.add("open");
});
closeDrawer.addEventListener("click", () => {
  drawer.setAttribute("aria-hidden", "true");
  drawer.classList.remove("open");
});

/* -------------------------------
   Checkout via WhatsApp
-------------------------------- */
btnCheckout.addEventListener("click", () => {
  if (!cart.length) {
    alert("Votre panier est vide !");
    return;
  }

  const name = document.getElementById("fullName").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const mode = document.getElementById("mode").value;

  let msg = `Nouvelle commande :\n\n`;
  cart.forEach(item => {
    msg += `- ${item.name} : ${item.price} FCFA\n`;
  });
  msg += `\nTotal: ${cartTotal.textContent}\n\n`;
  msg += `Client: ${name}\nTéléphone: ${phone}\nAdresse: ${address}, ${city}\nMode: ${mode}`;

  const wa = `https://wa.me/237653154864?text=${encodeURIComponent(msg)}`;
  window.open(wa, "_blank");
});

/* -------------------------------
   Init
-------------------------------- */
renderProducts(products);
renderCategories();
document.getElementById("year").textContent = new Date().getFullYear();
