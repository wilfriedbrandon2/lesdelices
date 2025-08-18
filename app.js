// ===== Config =====
const WHATSAPP_NUMBER = "237653154864"; // no '+'
const CURRENCY = "FCFA";
const WEB3FORMS_KEY = "e159c8a7-af37-457f-a38e-cdcf0cb14a93";

// ===== DOM Shortcuts =====
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => Array.from(root.querySelectorAll(s));

// ===== Data (Edit your products here) =====
// Multiple images per product supported (local files in /img or full URLs)
const PRODUCTS = [
  {
    name: "Fraisiers individuels",
    price: 1500,
    cat: "Gâteaux",
    images: ["img/product-2.jpg", "img/product-3.jpg"],
    desc: "Génoise légère, crème mousseline et fraises fraîches pour une fraîcheur irrésistible."
  },
  {
    name: "Cupcake vanille",
    price: 800,
    cat: "Cupcakes",
    images: ["img/product-3.jpg"],
    desc: "Base moelleuse vanille, topping crème au beurre onctueuse."
  },
  {
    name: "Croissant pur beurre",
    price: 400,
    cat: "Viennoiseries",
    images: ["img/product-4.jpg"],
    desc: "Feuilletage croustillant au pur beurre, doré à la perfection."
  },
  {
    name: "Tarte au citron",
    price: 2000,
    cat: "Tartes",
    images: ["img/product-5.jpg", "img/product-3.jpg"],
    desc: "Crème citron maison, meringue légèrement dorée, équilibre parfait sucré/acidulé."
  },
  {
    name: "Brownie chocolat",
    price: 1000,
    cat: "Classiques",
    images: ["img/product-2.jpg"],
    desc: "Ultra fondant 72% cacao, idéal pour les amoureux du chocolat."
  },
  {
    name: "Jus naturel ananas",
    price: 700,
    cat: "Boissons",
    images: ["img/product-3.jpg"],
    desc: "Pressé du jour, sans sucre ajouté, 100% fruit."
  },
];

// ===== State =====
let FILTER_CAT = "Tout";
let SEARCH = "";
let CART = []; // {name, price, qty}

// ===== Utils =====
function formatPrice(v){
  const n = Number(v||0);
  return new Intl.NumberFormat('fr-FR').format(n) + " " + CURRENCY;
}
function cartCount(){ return CART.reduce((a,l)=> a + (l.qty||1), 0); }
function setCartCount(){ $("#cartCount").textContent = cartCount(); }

// ===== Category slider =====
function getCategories(){
  const cats = Array.from(new Set(PRODUCTS.map(p => p.cat))).sort();
  return ["Tout", ...cats];
}
function renderCategories(){
  const wrap = $("#catSlider");
  wrap.innerHTML = "";
  getCategories().forEach(cat=>{
    const b = document.createElement("button");
    b.className = "cat-chip" + (cat===FILTER_CAT?" active":"");
    b.textContent = cat;
    b.addEventListener("click", ()=>{
      FILTER_CAT = cat;
      renderGrid();
      $$(".cat-chip", wrap).forEach(c=>c.classList.remove("active"));
      b.classList.add("active");
    });
    wrap.appendChild(b);
  });
}

// ===== Search =====
$("#searchInput").addEventListener("input", (e)=>{
  SEARCH = e.target.value.toLowerCase().trim();
  renderGrid();
});

// ===== Grid =====
function productVisible(p){
  const matchCat = (FILTER_CAT==="Tout" || p.cat===FILTER_CAT);
  const matchSearch = !SEARCH || [p.name, p.desc, p.cat].join(" ").toLowerCase().includes(SEARCH);
  return matchCat && matchSearch;
}
function renderGrid(){
  const grid = $("#productGrid");
  grid.innerHTML = "";
  PRODUCTS.filter(productVisible).forEach((p, idx)=>{
    const card = document.createElement("div");
    card.className = "card";
    const cover = (p.images && p.images[0]) ? p.images[0] : "https://placehold.co/800x600?text=Image";
    card.innerHTML = `
      <div class="media" data-open="${idx}">
        <img src="${cover}" alt="${p.name}" />
        <button class="icon-btn eye" data-open="${idx}" aria-label="Voir détails">👁</button>
      </div>
      <div class="card-body">
        <div class="card-head">
          <div class="card-name">${p.name}</div>
          <span class="chip card-cat">${p.cat||"Divers"}</span>
        </div>
        <div class="desc">${p.desc||""}</div>
        <div class="card-foot">
          <span class="price">${formatPrice(p.price)}</span>
          <button class="btn primary" data-add="${idx}">Ajouter</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ===== Details Modal with Carousel =====
const detailsModal = $("#detailsModal");
let currentDetailIndex = -1;
let currentImgIndex = 0;

function openDetails(i){
  currentDetailIndex = i;
  currentImgIndex = 0;
  const p = PRODUCTS[i];
  $("#detailName").textContent = p.name;
  $("#detailCat").textContent = p.cat||"";
  $("#detailPrice").textContent = formatPrice(p.price);
  $("#detailDesc").textContent = p.desc||"";
  renderCarousel();
  detailsModal.classList.add("open");
}
function closeDetails(){
  detailsModal.classList.remove("open");
}

function renderCarousel(){
  const p = PRODUCTS[currentDetailIndex];
  const imgs = p.images && p.images.length ? p.images : ["https://placehold.co/800x600?text=Image"];
  $("#detailImg").src = imgs[currentImgIndex];
  $("#detailImg").alt = p.name;

  const thumbs = $("#thumbs");
  thumbs.innerHTML = "";
  imgs.forEach((src, tIdx)=>{
    const im = document.createElement("img");
    im.src = src;
    if(tIdx===currentImgIndex) im.classList.add("active");
    im.addEventListener("click", ()=>{ currentImgIndex = tIdx; renderCarousel(); });
    thumbs.appendChild(im);
  });
}

$("#prevImg").addEventListener("click", ()=>{
  const imgs = PRODUCTS[currentDetailIndex].images || [];
  const len = imgs.length || 1;
  currentImgIndex = (currentImgIndex - 1 + len) % len;
  renderCarousel();
});
$("#nextImg").addEventListener("click", ()=>{
  const imgs = PRODUCTS[currentDetailIndex].images || [];
  const len = imgs.length || 1;
  currentImgIndex = (currentImgIndex + 1) % len;
  renderCarousel();
});
$("#closeDetails").addEventListener("click", closeDetails);
detailsModal.addEventListener("click", (e)=>{ if(e.target === detailsModal) closeDetails(); });

// Open details by click (image or eye)
document.addEventListener("click", (e)=>{
  const open = e.target.closest("[data-open]");
  if(open){
    const i = Number(open.getAttribute("data-open"));
    openDetails(i);
  }
});

// Add to cart from modal
$("#detailAdd").addEventListener("click", ()=>{
  if(currentDetailIndex<0) return;
  addToCart(PRODUCTS[currentDetailIndex]);
  closeDetails();
  $("#drawer").classList.add("open");
});

// ===== Cart =====
function addToCart(p){
  const existing = CART.find(l=> l.name===p.name && l.price===p.price);
  if(existing){ existing.qty = (existing.qty||1) + 1; }
  else { CART.push({ name:p.name, price:p.price, qty:1 }); }
  renderCart();
}

document.addEventListener("click", (e)=>{
  const add = e.target.closest("[data-add]");
  if(add){
    const i = Number(add.getAttribute("data-add"));
    addToCart(PRODUCTS[i]);
    $("#drawer").classList.add("open");
  }
});

function renderCart(){
  const lines = $("#cartLines");
  lines.innerHTML = "";
  let total = 0;
  CART.forEach((line,i)=>{
    const sum = (line.qty||1) * Number(line.price||0);
    total += sum;
    const row = document.createElement("div");
    row.className = "line";
    row.innerHTML = `
      <div style="flex:1">
        <strong>${line.name}</strong><br>
        <small class="muted">${formatPrice(line.price)} x </small>
        <input type="number" min="1" value="${line.qty||1}" data-qty="${i}" style="width:64px"/>
      </div>
      <div style="text-align:right">
        <div>${formatPrice(sum)}</div>
        <button class="btn outline" data-del="${i}" style="margin-top:6px">Supprimer</button>
      </div>
    `;
    lines.appendChild(row);
  });
  $("#cartTotal").textContent = formatPrice(total);
  setCartCount();
}

document.addEventListener("input", (e)=>{
  const qty = e.target.closest("[data-qty]");
  if(qty){
    const i = Number(qty.getAttribute("data-qty"));
    const v = Math.max(1, Number(e.target.value||1));
    CART[i].qty = v;
    renderCart();
  }
});
document.addEventListener("click", (e)=>{
  const del = e.target.closest("[data-del]");
  if(del){
    const i = Number(del.getAttribute("data-del"));
    CART.splice(i,1);
    renderCart();
  }
});

// Drawer controls
$("#btnCart").addEventListener("click", ()=> $("#drawer").classList.add("open"));
$("#closeDrawer").addEventListener("click", ()=> $("#drawer").classList.remove("open"));

// Checkout via WhatsApp
$("#btnCheckout").addEventListener("click", ()=>{
  if(CART.length===0){ alert("Votre panier est vide."); return; }
  const fullName = $("#fullName").value.trim();
  const phone = $("#phone").value.trim();
  const address = $("#address").value.trim();
  const city = $("#city").value.trim();
  const mode = $("#mode").value;
  if(!fullName || !phone){ alert("Veuillez renseigner votre nom et téléphone."); return; }

  let msg = `Bonjour, nouvelle commande Les Délices de Barbie%0A`;
  msg += `👤 ${fullName}%0A📞 ${phone}%0A🏠 ${address ? address+', ' : ''}${city}%0A🚚 ${mode}%0A%0A`;
  msg += `🛍️ Détails:%0A`;
  let total=0;
  CART.forEach(l => { const s=(l.qty||1)*Number(l.price||0); total+=s; msg += `- ${l.name} x${l.qty||1} = ${s} ${CURRENCY}%0A`; });
  msg += `%0A💰 Total: ${total} ${CURRENCY}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  window.open(url, "_blank");
});

// ===== Newsletter (Web3Forms, no redirect) =====
$("#newsletterForm").addEventListener("submit", async (e)=>{
  e.preventDefault();
  const email = $("#nlEmail").value.trim();
  if(!email) return;
  $("#nlMsg").textContent = "Envoi en cours…";
  try{
    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", "Nouvelle inscription newsletter — Les Délices de Barbie");
    formData.append("email", email);
    formData.append("from_name", "Les Délices de Barbie");
    formData.append("message", `Newsletter signup: ${email}`);

    const r = await fetch("https://api.web3forms.com/submit", { method:"POST", body: formData });
    const data = await r.json();
    if(data.success){
      $("#nlMsg").textContent = "Merci ! Vous êtes inscrit(e).";
      e.target.reset();
    } else {
      $("#nlMsg").textContent = "Échec de l’inscription. Réessayez plus tard.";
    }
  }catch(err){
    $("#nlMsg").textContent = "Erreur réseau. Réessayez.";
  }
});

// ===== Init =====
renderCategories();
renderGrid();
renderCart();
$("#year").textContent = new Date().getFullYear();
