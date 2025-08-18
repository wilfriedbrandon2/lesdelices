// ====== Config ======
const WHATSAPP_NUMBER = "237653154864"; // no "+" here
const CURRENCY = "FCFA";

// Web3Forms (newsletter) — using your key, no redirect
const WEB3FORMS_KEY = "e159c8a7-af37-457f-a38e-cdcf0cb14a93";

// ====== Helpers ======
const $ = (sel, root = document) => root.querySelector(sel);
function formatPrice(v) {
  const n = Number(v || 0);
  return new Intl.NumberFormat("fr-FR").format(n) + " " + CURRENCY;
}

// ====== Products (edit directly here) ======
const PRODUCTS = [
  { name: "Tarte au citron", price: 2000, cat: "Tartes", img: "img/product-4.jpg", desc: "Crème citron maison, meringue dorée." },
  { name: "Cupcake vanille", price: 800, cat: "Cupcakes", img: "img/product-2.jpg", desc: "Moelleux vanille, crème au beurre." },
  { name: "Croissant beurre", price: 400, cat: "Viennoiserie", img: "img/product-3.jpg", desc: "Feuilletage croustillant pur beurre." },
  { name: "Brownie chocolat", price: 1000, cat: "Classiques", img: "img/product-5.jpg", desc: "Ultra fondant 72% cacao." },
];

// ====== State ======
let CART = JSON.parse(localStorage.getItem("ldb_cart_v1") || "[]");

// ====== Render products ======
function renderGrid() {
  const grid = $("#productGrid");
  grid.innerHTML = "";
  PRODUCTS.forEach((p, idx) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" loading="lazy" />
      <div class="card-body">
        <div class="card-head">
          <strong>${p.name}</strong>
          <span class="chip">${p.cat || "Divers"}</span>
        </div>
        <div class="muted" style="min-height:35px">${p.desc || ""}</div>
        <div class="desca" style="display:flex;flex-direction:column; align-items:left;gap:8px">
          <span class="price">${formatPrice(p.price)}</span>
          <button class="btn primary" data-add="${idx}">Ajouter</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

// ====== Cart ======
function saveCart() { localStorage.setItem("ldb_cart_v1", JSON.stringify(CART)); }
function cartCount() { return CART.reduce((a, l) => a + (l.qty || 1), 0); }

function renderCart() {
  const wrap = $("#cartLines");
  wrap.innerHTML = "";
  let total = 0;

  CART.forEach((line, i) => {
    const sum = (line.qty || 1) * Number(line.price || 0);
    total += sum;
    const row = document.createElement("div");
    row.className = "line";
    row.innerHTML = `
      <div style="flex:1">
        <strong>${line.name}</strong><br>
        <small class="muted">${formatPrice(line.price)} × </small>
        <input type="number" min="1" value="${line.qty || 1}" data-qty="${i}" style="width:64px" />
      </div>
      <div>
        <div style="text-align:right">${formatPrice(sum)}</div>
        <button class="btn outline" data-del="${i}" style="margin-top:6px">Supprimer</button>
      </div>`;
    wrap.appendChild(row);
  });

  $("#cartTotal").textContent = formatPrice(total);
  $("#cartCount").textContent = cartCount();
}

// Add / delete / qty change
document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  if (add) {
    const idx = Number(add.getAttribute("data-add"));
    const p = PRODUCTS[idx];
    const existing = CART.find((l) => l.name === p.name && l.price === p.price);
    if (existing) existing.qty = (existing.qty || 1) + 1;
    else CART.push({ name: p.name, price: p.price, qty: 1 });
    saveCart();
    renderCart();
    $("#drawer").classList.add("open");
  }

  const del = e.target.closest("[data-del]");
  if (del) {
    const i = Number(del.getAttribute("data-del"));
    CART.splice(i, 1);
    saveCart();
    renderCart();
  }
});

document.addEventListener("input", (e) => {
  const qty = e.target.closest("[data-qty]");
  if (qty) {
    const i = Number(qty.getAttribute("data-qty"));
    const v = Math.max(1, Number(qty.value || 1));
    CART[i].qty = v;
    saveCart();
    renderCart();
  }
});

// Drawer actions
$("#btnCart").addEventListener("click", () => $("#drawer").classList.add("open"));
$("#closeDrawer").addEventListener("click", () => $("#drawer").classList.remove("open"));

// Checkout via WhatsApp (opens WhatsApp with prefilled message)
$("#btnCheckout").addEventListener("click", () => {
  if (CART.length === 0) { alert("Votre panier est vide."); return; }

  const fullName = $("#fullName").value.trim();
  const phone = $("#phone").value.trim();
  const address = $("#address").value.trim();
  const city = $("#city").value.trim();
  const mode = $("#mode").value;

  if (!fullName || !phone) { alert("Veuillez renseigner votre nom et téléphone."); return; }

  let msg = `Bonjour, nouvelle commande Les Délices de Barbie%0A`;
  msg += `👤 ${fullName}%0A📞 ${phone}%0A🏠 ${address ? address + ", " : ""}${city}%0A🚚 ${mode}%0A%0A`;
  msg += `🛍️ Détails:%0A`;
  let total = 0;
  CART.forEach((l) => {
    const s = (l.qty || 1) * Number(l.price || 0);
    total += s;
    msg += `- ${l.name} x${l.qty || 1} = ${s} ${CURRENCY}%0A`;
  });
  msg += `%0A💰 Total: ${total} ${CURRENCY}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  window.open(url, "_blank");
});

// Newsletter (Web3Forms via fetch, no redirect)
$("#newsletterForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = $("#nlEmail").value.trim();
  if (!email) return;
  $("#nlMsg").textContent = "Envoi en cours…";
  try {
    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", "Nouvelle inscription newsletter — Les Délices de Barbie");
    formData.append("email", email);
    formData.append("from_name", "Les Délices de Barbie");
    formData.append("message", `Newsletter signup: ${email}`);

    const r = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
    const data = await r.json();
    if (data.success) {
      $("#nlMsg").textContent = "Merci ! Vous êtes inscrit(e).";
      e.target.reset();
    } else {
      $("#nlMsg").textContent = "Échec de l’inscription. Réessayez plus tard.";
    }
  } catch (err) {
    $("#nlMsg").textContent = "Erreur réseau. Réessayez.";
  }
});

// Init
renderGrid();
renderCart();
$("#year").textContent = new Date().getFullYear();
