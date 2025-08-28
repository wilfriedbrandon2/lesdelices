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
      { label: "Bol de crudités avocat simple", price: 1000 },
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
    images: ["img/cake1.jpeg", "img/cake2.jpeg","img/cake3.jpeg"],
    variations: [
      { label: "gâteaux Nature ", price: 2500 },
      { label: "gâteaux Au citron ", price: 2500 },
      { label: "gâteaux a l'Orange  ", price: 2500 },
      { label: "gâteaux au  Chocolat ", price: 3000 },
      { label: "gâteaux au  Noix de coco ", price: 3000 },
      { label: "gâteaux Autre parfum ", price: 3000 },
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
      { label: "Pastels Précuit ", price: 150 },
      { label: "Pastels Cuit  unité", price: 200 },
      { label: "Pastels Avec fromage Schotteggs ", price: 300 },
    ]
  },
  {
    id: 5,
    name: "Pack prestige",
    category: "Combo",
    price: 4500,
    description: "1 plantain Burger premium 2 crêpes viande hachée fromage 1 crêpe pané 3broiche viande 1 Portion de frites +une boisson au choix Prix 4500f sans boisson 5mil avec une boisson au 5500f avec jus de fruits naturels",
    images: ["img/packtera.jpeg"],
    variations: [
      { label: "Pack prestige ", price: 4500 },
      { label: "Pack prestige avec une boisson", price: 5000 },
      { label: "Pack prestige avec jus de fruits naturels", price: 5500 }
    ]
  },
  {
    id: 6,
    name: "Mini pizza",
    category: "Pizza",
    price: 500,
    description: "Mini pizza 500f unité disponible avec Les Délices de Barbie, Bonne dégustation",
    images: ["img/pizza.jpeg","img/Minipacker.jpeg"],
  },
  {
    id: 7,
    name: "Tarif Nems ",
    category: "Nems",
    price: 1500,
    description: "poisson 150f,viande 150f,Feuilles de nems 10_500f,Commande minimum 10pieces",
    images: ["img/tune.jpeg","img/nems.jpeg"],
    variations: [
      { label: "Nems poisson 150f x 10", price: 1500 },
      { label: "Nems viande 150f x 10", price: 1500 },
      { label: "Nems precuit 100f x 10", price: 1000 },
      { label: "Feuilles de nems 10 a 500f", price: 500 }
    ]
  },
  {
    id: 8,
    name: "Tarif crêpes",
    category: "crêpes",
    price: 1000,
    description: "10 crêpes nature 1000f ---10 crêpes au chocolat 1500f---- | ----10 crêpes au lait 1500f--- | ---10crepes marbré 1500f--- | ---supplement chocolat 300f--- | ---1crepes viande hachée fromage 500f--- |--- crepe pané 1000f _3 a 2500f--- | ---crepe poulet fromage 800f--- | ---crepe poulet fromage pané 1200f unité--- | #Les Délices de Barbie Bonne dégustation",
    images:  ["img/crepa.jpeg", "img/crepa1.jpeg", "img/crepes.jpeg", "img/crepes choco1.jpeg", "img/crepes choco.jpeg"],
    variations: [
      { label: "10 crêpes nature", price: 1000 },
      { label: "10 crêpes au chocolat ", price: 1500 },
      { label: "10 crêpes au lait ", price: 1500 },
      { label: "1crepes viande hachée fromage ", price: 500 },
      { label: "crepe pané  ", price: 1000 },
      { label: "crepe pané x 3", price: 2500 },
      { label: "supplement chocolat ", price: 300 },
      { label: "crepe poulet fromage ", price: 800 },
      { label: "crepe poulet fromage pané", price: 1200 }
    ]
  },
  {
    id: 9,
    name: "Tarif apéritif",
    category: "apéritif",
    price: 1000,
    description: "Cacahuètes  (avec arachides) 0.5l _1000f,  1l_ 2000f, 1.5l _3000f |----- Croquettes  (sans arachides) 0.5l _1000f, 1l_2000f, 1.5l _2800f----  | ----Caramel 0.5l _800f, 1l_ 1500f, 1,5l_ 2400f--- | ---Coconut sweet 0.5l _1000f,1l_2000f, 1.5l_3000f---- Bonne dégustation #Les Délices de Barbie",
    images:  ["img/caramel.jpeg", "img/rocks.jpeg","img/rocksa.jpeg","img/rock2.jpeg","img/coco.jpeg"],
    variations: [
      { label: "Cacahuètes(avec arachides) 0.5l", price: 1000 },
      { label: "Cacahuètes(avec arachides) 1l ", price: 2000 },
      { label: "Cacahuètes(avec arachides) 1.5l ", price: 3000 },
      { label: "Croquettes (sans arachides) 0.5l", price: 1000 },
      { label: "Croquettes (sans arachides) 1l ", price: 2000 },
      { label: "crepe pané x 3", price: 2500 },
      { label: "Croquettes (sans arachides) 1.5l", price: 2800 },
      { label: "Caramel 0.5l ", price: 800 },
      { label: "Caramel 1l", price: 1500 },
      { label: "Caramel 1.5l", price: 2400 },
      { label: "Coconut sweet 0.5l", price: 1000 },
      { label: "Coconut sweet 1l", price: 2000 },
      { label: "Coconut sweet 1.5l ", price: 3000 }
    ]
  },
  {
    id: 10,
    name: " Boisson détox",
    category: "Boisson",
    price: 1000,
    description: "Pour les boissons il ya les jus de fruits naturels  menthe au lait Baobab au lait Le bissap et boisson détox sur commande",
    images:  ["img/beca.jpeg"],
    variations: [
      { label: "Boisson détox 0.5l Beca", price: 1000 },
      { label: "Boisson détox 1l Beca", price: 1800 },
      { label: "Boisson détox 1.5l Beca  ", price: 3000 },
      { label: "Boisson détox 0.5l vert", price: 1000 },
      { label: "Boisson détox 1l vert", price: 1800 },
      { label: "Boisson détox 1.5l vert  ", price: 3000 }
    ]
  },
  {
    id: 10,
    name: " Boisson au lait",
    category: "Boisson",
    price: 500,
    description: "Pour les boissons il ya les jus de fruits naturels  menthe au lait Baobab au lait Le bissap et boisson détox sur commande",
    images:  ["img/baoba.jpeg","img/baoba1.jpeg","img/mente.jpeg"],
    variations: [
      { label: "Menthe au lait 0.5l ", price: 500 },
      { label: "Menthe au lait 1l", price: 1000 },
      { label: "Menthe au lait 1.5l  ", price: 1500 },
      { label: "Baobab au lait 0.5l", price: 700 },
      { label: "Baobab au lait 1l", price: 1300 }
    ]
  },
  {
    id: 10,
    name: " Jus de fruits naturelles ",
    category: "Boisson",
    price: 1000,
    description: "Pour les boissons il ya les jus de fruits naturels  menthe au lait Baobab au lait Le bissap et boisson détox sur commande.NB ; les saveurs varie en fonction des saisons ",
    images:  ["img/jusa1.jpeg", "img/jus collection.jpeg","img/jus a2.jpeg"],
    variations: [
      { label: "Cocktail (Ananas pastèque papaye) 0.5l", price: 1000 },
      { label: "Cocktail (Ananas Cassis) 0.5l", price: 1000 },
      { label: "Cocktail (Ananas passion) 0.5l", price: 1000 },
      { label: "jus de ananas 0.5l ", price: 1000 },
      { label: "Ananas gingembre 0.5l", price: 1000 },
      { label: "pasteque ananas 0.5l ", price: 1000 },
      { label: "mangue ananas  0.5l ", price: 1000 },
      { label: "jus de corosol  0.5l", price: 1000 },
      { label: "jus de corosol  1l", price: 1500 }
    ]
  },
  {
    id: 11,
    name: " Pack salé ",
    category: "Combo",
    price: 3500,
    description: "Premium plantain et cheese  Burger Une mini pizza / une portion de frites  3pastels viande hachée  1boissons au choix (menthe ou baobab au lait  ) Prix 4mil 3500f sans boisson",
    images:  ["img/Pack salé.jpeg", "img/packyamo.jpeg","img/packyam1.jpeg"],
    variations: [
      { label: "Pack salé simple", price: 3500 },
      { label: "Pack salé + 1boissons (menthe au lait)", price: 4000 },
      { label: "Pack salé + 1boissons (boabab au lait)", price: 4000 }
    ]
  },
  {
    id: 12,
    name: " Pack anniversaire  ",
    category: "Combo",
    price: 12000,
    description: "Pack anniversaire 1gateau au choix 20nems 30crepes nature et choco 10 Schott eggs 12mil",
    images:  ["img/pack-carton.jpeg"],
  },
  {
    id: 13,
    name: " Poulet mayo   ",
    category: "Poulet",
    price: 3000,
    description: "Poulet mayo 1/4 avec frites 3000f 1/2 avec frittes 5500f 1 entier avec frittes 8, 10mil Supplement Frites de pommes où plantain",
    images:  ["img/pl.jpeg","img/Poulet mayo1.jpeg","img/Poulet mayo.jpeg"],
    variations: [
      { label: "Poulet mayo 1/4 avec frites", price: 3000 },
      { label: "1/2 avec frittes", price: 5500 },
      { label: "1 entier avec frittes", price: 8000 },
      { label: "1 entier avec frittes Supplement Frites de pommes où plantain", price: 10000 }
    ]
  },
  {
    id: 14,
    name: "plantain Burger",
    category: "Combo",
    price: 1000,
    description: "-1000f sans fromage -1500f avec fromage - Supplément frittes de pommes 500f ",
    images:  ["img/sandplan2.jpeg","img/sandplan3.jpeg"],
    variations: [
      { label: "sans fromage", price: 1000 },
      { label: "avec fromage", price: 1500 },
      { label: "sans fromage Supplément frittes de pommes", price: 1500 },
      { label: "sans fromage Supplément frittes de pommes", price: 2000 }
    ]
  },
  {
    id: 14,
    name: "cheese Burger",
    category: "Combo",
    price: 500,
    description: "Cheese Burger -Mini 500f -xl 1000f Supplément frittes de pommes 500f",
    images:  ["img/burger2.jpeg","img/burger.jpeg","img/burger1.jpeg"],
    variations: [
      { label: "Cheese Burger Mini", price: 500 },
       { label: "Cheese Burger Mini Supplément frittes de pommes", price: 1000 },
      { label: "Cheese Burger xl", price: 1000 },
      { label: "Cheese Burger xl Supplément frittes de pommes", price: 1500 }
    ]
  },
  {
    id: 15,
    name: "Pack délice",
    category: "Combo",
    price: 3000,
    description: "Pack délice Il coûte 3mil sans boisson 3500f avec une boisson au choix",
    images:  ["img/pack22.jpeg","img/packer2.jpeg"],
    variations: [
      { label: "Pack délice simple", price: 3000 },
       { label: "Pack délice simple + Boisson au choix", price: 3500 }
    ]
  },
  {
    id: 16,
    name: "Pack découverte ",
    category: "Combo",
    price: 4000,
    description: "1burger classic -1crepe pané -3 pastels -2crepes viande fromage -1 œuf pané Prix 4mil",
    images:  ["img/precu.jpeg"],
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


  const name = document.getElementById("fullName").value || "(non précisé)";
  const phone = document.getElementById("phone").value || "(non précisé)";
  const address = document.getElementById("address").value || "(non précisé)";
  const city = document.getElementById("city").value || "(non précisé)";
  const mode = document.getElementById("mode").value || "(non précisé)";


  btnCheckout.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("🛒 Votre panier est vide !");
    return; // stop execution
  }
  
  let msg = `📑Nouvelle commande :\n\n`;
  cart.forEach(item => {
    msg +=  `🧧${item.qty} × ${item.name} : 💰 ${item.price} FCFA\n`;
  });
  msg += `\nTotal: 💰${cartTotal.textContent}\n\n`;
  msg += `Client: 👤${name}\nTéléphone: 📞${phone}\nAdresse: 🏘️${address}\n, 📑${city}\nMode: 🚚${mode}`;

  const wa = `https://wa.me/237695445208?text=${encodeURIComponent(msg)}`;
  window.open(wa, "_blank");
});

/* -------------------------------
   Init
-------------------------------- */
renderProducts(products);
renderCategories();
document.getElementById("year").textContent = new Date().getFullYear();
