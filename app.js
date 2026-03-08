/* ================================
   Les Délices de Barbie — app.js
   ================================ */

// Sample products
const products = [

   {
    id: 112,
    name: "Patte a crêpes ",
    category: "patisséries",
    price: 1000,
    description: "Patte a crêpes 4saveurs Orange 1200f _0,5 | Vanille 1000f_0,5l | Chocolat 2500f _1l | Nature 2000f _1l",
    images: ["img/pate.jpeg", "img/pate1.jpeg"],
    variations: [
      { label: "Vanille _0,5l ", price: 1000 },
      { label: "Orange  _0,5 ", price: 1200 },
      { label: "Nature  _1l", price: 2000 },
      { label: "Chocolat  _1l", price: 2500 },
    ]
  },
   {
    id: 113,
    name: "Mais arachides grille ",
    category: "apéritif",
    price: 800,
    description: "Mais arachides grille disponible 0,5l_800f 1l _1500f 1,5_ 2200f",
    images: ["img/mix.jpeg", "img/mix1.jpeg", "img/mix3.jpeg"],
    variations: [
      { label: "Bouteille _0,5l ", price: 800 },
      { label: "Bouteille _1l", price: 1500 },
      { label: "Nature  _1,5l", price: 2200 },
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
    id: 7,
    name: "Tarif Nems ",
    category: "Nems",
    price: 150,
    description: "poisson 150f,viande 150f,Feuilles de nems 10_500f,Commande minimum 10pieces,Précuit 125f et 100frs a partir de 30 précuit",
    images: ["img/tune.jpeg","img/nems.jpeg"],
    variations: [
      { label: "Nems poisson ", price: 150 },
      { label: "Nems viande  ", price: 150 },
      { label: "Nems precuit ", price: 125 },
      { label: "Feuilles de nems 10 a 500f", price: 500 }
    ]
  },
   {
    id: 6,
    name: "Mini pizza",
    category: "Pizza",
    price: 500,
    description: "Mini pizza 500f unité disponible avec Les Délices de Barbie, Bonne dégustation",
    images: ["img/pizza.jpeg","img/Minipacker.jpeg","img/mini pizza.jpeg"],
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
      { label: "Cheese Burger Moyen", price: 750 },
       { label: "Cheese Burger Mini Supplément frittes de pommes", price: 1000 },
      { label: "Cheese Burger xl", price: 1000 },
      { label: "Cheese Burger xl Supplément frittes de pommes", price: 1500 }
    ]
  },
  {
    id: 10,
    name: " Boisson au lait",
    category: "Boisson",
    price: 500,
    description: "Pour les boissons il ya les jus de fruits naturels  menthe au lait Baobab au lait Le bissap et boisson détox sur commande",
    images:  ["img/j2.jpeg","img/baoba.jpeg","img/baoba1.jpeg","img/mente.jpeg"],
    variations: [
      { label: "Menthe au lait 0.5l ", price: 500 },
      { label: "Menthe au lait 1l", price: 1000 },
      { label: "Menthe au lait 1.5l  ", price: 1500 },
      { label: "Baobab au lait 0.5l", price: 700 },
      { label: "Baobab au lait 1l", price: 1300 }
    ]
  },
  {
    id: 31,
    name: " Eouf Pané",
    category: "combo",
    price: 500,
    description: "eouf pané a la viande hachée 500frs l'unité, la gamelle avec les frites 2000frs.",
    images:  ["img/ep.jpeg","img/ep1.jpeg","img/ep3.jpeg"],
    variations: [
      { label: "eouf pané a la viande hachée", price: 500 },
      { label: "la gamelle avec les frites", price: 2000 }
    ]
  },
   {
    id: 18,
    name: "Hamburger  ",
    category: "Combo",
    price: 600,
    description: "Hamburger 600f unité Supplément frittes 500f",
    images:  ["img/pane3.jpeg","img/pane4.jpeg","img/ham.jpeg"],
    variations: [
      { label: "Hamburger 600f unité", price: 600},
      { label: "Hamburger 600f unité Supplément frittes 500f", price: 1100 },
      { label: "Supplément frittes 500f", price: 500 }
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
    id: 8,
    name: "Tarif crêpes",
    category: "crêpes",
    price: 1000,
    description: "10 crêpes nature 1000f ---10 crêpes au chocolat 1500f---- | ----10 crêpes au lait 1500f--- | ---10crepes marbré 1500f--- | ---supplement chocolat 300f--- | ---1crepes viande hachée fromage 500f--- |--- crepe pané 1000f _3 a 2500f--- | ---crepe poulet fromage 800f--- | ---crepe poulet fromage pané 1200f unité--- | #Les Délices de Barbie Bonne dégustation",
    images:  ["img/crepa.jpeg", "img/crepa1.jpeg", "img/crepes.jpeg", "img/crepes choco1.jpeg", "img/crepes choco.jpeg","img/cr1.jpeg"],
    variations: [
      { label: "10 crêpes nature", price: 1000 },
      { label: "10 crêpes au chocolat ", price: 1500 },
      { label: "10 crêpes au lait ", price: 1500 },
      { label: "10crepes marbré ", price: 1500 },
      { label: "1crepes viande hachée fromage ", price: 700 },
      { label: "crepe pané  ", price: 1000 },
      { label: "crepe pané x 3", price: 2800 },
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
    name: " Jus de fruits naturelles ",
    category: "Boisson",
    price: 1000,
    description: "Pour les boissons il ya les jus de fruits naturels  menthe au lait Baobab au lait Le bissap et boisson détox sur commande.NB ; les saveurs varie en fonction des saisons ",
    images:  ["img/jusa1.jpeg", "img/jus collection.jpeg","img/jus a2.jpeg","img/j1.jpeg"],
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
    id: 30,
    name: " crêpes panés ",
    category: "patisséries",
    price: 1000,
    description: "-crepe viande hachée fromage 1000f _3 a 2800f - crepe poulet fromage pané 1200f unité_#Les Délices de Barbie_Bonne dégustation ",
    images:  ["img/cp.jpeg"],
    variations: [
      { label: "crepe viande hachée fromage", price: 1000 },
      { label: "3 X (crepe viande hachée fromage)", price: 2800 },
      { label: "crepe poulet fromage pané", price: 1200 }
    ]
  },
    {
    id: 26,
    name: "Egg cheese burger ",
    category: "Combo",
    price: 2000,
    description: "Egg cheese burger ",
    images: ["img/egg cheese.jpeg"],
  },
   {
    id: 20,
    name: "Gamelle pour cérémonie  ",
    category: "Combo",
    price: 2500,
    description: "poulet,poisson,chips,Boulettes miondo,nems,Oeuf dur 2500frs a partir de 10pieces et 2000frs a partir de 50pieces",
    images:  ["img/recep.jpeg","img/recep1.jpeg"],
    variations: [
      { label: "2500frs a partir de 10pieces", price: 2500},
      { label: " 2000frs a partir de 50pieces", price: 2000},
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
    id: 17,
    name: "poulet pané  ",
    category: "Combo",
    price: 3000,
    description: "Tarifs poulet pané 3 morceaux +frittes _3mil 5 morceaux+frittes _5000f 10morceaux + frittes _8000f Supplément frittes 500f",
    images:  ["img/fffff.jpeg","img/pouletp.jpeg",],
    variations: [
      { label: "poulet pané 3 morceaux +frittes", price: 3000 },
      { label: "poulet pané 5 morceaux + frittes", price: 5000 },
      { label: "poulet pané 10morceaux + frittes", price: 8000 },
      { label: " Supplément frittes 500f", price: 500 },
    ]
  },
  {
    id: 13,
    name: " Poulet mayo   ",
    category: "Poulet",
    price: 3000,
    description: "Poulet mayo 1/4 avec frites 3000f 1/2 avec frittes 5000f 1 entier avec frittes 8, 10mil Supplement Frites de pommes où plantain",
    images:  ["img/pl.jpeg","img/Poulet mayo1.jpeg","img/Poulet mayo.jpeg"],
    variations: [
      { label: "Poulet mayo 1/4 avec frites", price: 3000 },
      { label: "1/2 avec frittes", price: 5000 },
      { label: "1 entier avec frittes", price: 8000 },
      { label: "1 entier avec frittes Supplement Frites de pommes où plantain", price: 10000 }
    ]
  },
  
  {
    id: 15,
    name: "Pack délice",
    category: "Combo",
    price: 3000,
    description: "Pack délice Il coûte 3mil sans boisson 3500f avec une boisson au choix",
    images:  ["img/pack22.jpeg","img/packer2.jpeg","img/delpack.jpeg"],
    variations: [
      { label: "Pack délice simple", price: 3000 },
       { label: "Pack délice simple + Boisson au choix", price: 3500 }
    ]
  },
   {
    id: 21,
    name: "Pack douceur",
    category: "Combo",
    price: 3500,
    description: "1plantain Burger 1portion de frites 3bouches plantain 5crepes marbré Un jus de fruit naturel Prix :3500f, 2700f sans boisson ,3300f avec menthe au lait",
    images: ["img/new.jpeg"],
    variations: [
      { label: "Pack douceur complet", price: 3500 },
      { label: "Pack douceur sans boisson", price: 2700 },
      { label: "Pack douceur avec menthe au lait", price: 3300 },
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
    id: 11,
    name: " Pack salé ",
    category: "Combo",
    price: 3500,
    description: "Premium plantain et cheese  Burger Une mini pizza / une portion de frites  3pastels viande hachée  1boissons au choix (menthe ou baobab au lait  ) Prix 4mil 3500f sans boisson",
    images:  ["img/pack sale1.jpeg","img/pack sale.jpeg","img/Pack salé.jpeg", "img/packyamo.jpeg","img/packyam1.jpeg"],
    variations: [
      { label: "Pack salé simple", price: 3500 },
      { label: "Pack salé + 1boissons (menthe au lait)", price: 4000 },
      { label: "Pack salé + 1boissons (boabab au lait)", price: 4000 }
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
    id: 123,
    name: "Box poulet",
    category: "Combo",
    price: 5000,
    description: "Box poulet :1/4Poulet mayo , poulet pané + frittes ",
    images: ["img/box.jpeg"],
    variations: [
      { label: "Box poulet ", price: 5000 }
    ]
  },
  {
    id: 22,
    name: "Pack élection",
    category: "Combo",
    price: 5000,
    description: "2morceaux de poulet pané+frittes 2crepes viande hachée fromage 1burger5crepes Nature 1bouteille de menthe Prix 5500f avec menthe5000f sans menthe",
    images: ["img/ELEC.jpeg","img/ELEC1.jpeg"],
    variations: [
      { label: "Pack élection ", price: 5000 },
      { label: "Pack élection avec menthe", price: 5500 },
    ]
  },
  {
    id: 24,
    name: "Pack caviar",
    category: "Combo",
    price: 5100,
    description: "1/4 poulet mayo 1bol de crudités1mini burger et un hamburger 1bouteille de menthe au laitOu 1bouteille de jus de fruits naturel_Prix 5100f sans boisson 5600f avec menthe6mil avec jus de fruits naturel_",
    images: ["img/CAVI.jpeg","img/CAVI1.jpeg"],
    variations: [
      { label: "Pack caviar", price: 5100 },
      { label: "Pack caviar avec menthe", price: 5600 },
      { label: "Pack caviar avec jus de fruit naturel", price: 6000 },
    ]
  },
  {
    id: 19,
    name: "pack visité  ",
    category: "Combo",
    price: 7000,
    description: "20pastels, 1L de cacahuete, 1l de menthe au lait",
    images:  ["img/pack visite.jpeg","img/pack visite1.jpeg"],
  },
  {
    id: 23,
    name: "Pack premium",
    category: "Combo",
    price: 9000,
    description: "1/4Poulet mayo+frites 3morceaux de poulet pané+frites1pack délice1jus de fruitOu une 1bouteille de menthe_Prix 9mil avec menthe 9500f avec jus de fruit naturel_",
    images: ["img/PREM1.jpeg","img/PREM.jpeg"],
    variations: [
      { label: "Pack premium", price: 9000 },
      { label: "Pack premium avec jus de fruit naturel", price: 9500 },
    ]
  },
 
    {
    id: 25,
    name: "Pack Gold",
    category: "Combo",
    price: 10000,
    description: "Pack Gold 1/4Poulet mayo 2egg cheese burger 4crepes viande hachée fromage 1bouteille de menthe",
    images: ["img/pack gold.jpeg","img/pack gold1.jpeg"],
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
    id: 32,
    name: " Pack sucré  ",
    category: "Combo",
    price: 14500,
    description: "50crepes mix 1Gâteau marbré 6mini cakes 5l de menthe au lait Prix 14500f",
    images:  ["img/ps.jpeg","img/ps1.jpeg"],
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
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy" />
        <button class="icon-btn eye" aria-label="Voir détails">👁</button>
      </div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <p class="muted">${p.description.substring(0, 60)}...</p>
        <div class="card-footer">
          <div class="price">${p.price} FCFA</div>
          <button class="btn small add icon-add">+</button>
        </div>
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
-------------------------------- 


  const name = document.getElementById("fullName").value ;
  const phone = document.getElementById("phone").value ;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value ;
  const mode = document.getElementById("mode").value ;


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
});*/
document.getElementById("btnCheckout").addEventListener("click", () => {
  // Get user info
  const name = document.getElementById("fullName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const mode = document.getElementById("mode").value;

  // Validate (optional)
  if (!name || !phone || !address) {
    alert("Veuillez remplir vos informations avant de commander !");
    return;
  }

  // Build message
  let msg = `📑 Nouvelle commande :\n\n`;
  cart.forEach(item => {
    msg += `🧧 ${item.qty} × ${item.name} : 💰 ${item.price} FCFA\n`;
  });

  msg += `\nTotal: 💰 ${cartTotal.textContent}\n\n`;
  msg += `Client: 👤 ${name}\nTéléphone: 📞 ${phone}\nAdresse: 🏘️ ${address}\nNote: 📑 ${city}\nMode: 🚚 ${mode}`;

  // Send to WhatsApp
  const wa = `https://wa.me/237695445208?text=${encodeURIComponent(msg)}`;
  window.open(wa, "_blank");
});


/* -------------------------------
   Init
-------------------------------- */
renderProducts(products);
renderCategories();
document.getElementById("year").textContent = new Date().getFullYear();

//  APP INSTALLATION
function isIos() {
  return /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
}

function isInStandaloneMode() {
  return ("standalone" in window.navigator) && window.navigator.standalone;
}

if (isIos() && !isInStandaloneMode()) {
  document.getElementById("pwa-ios-hint").style.display = "block";
}

// Hero Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index));
});

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

function refreshApp() {
    const alertModal = document.getElementById('customAlert');
    alertModal.classList.add('show');
    alertModal.setAttribute('aria-hidden', 'false');
}

document.getElementById('alertCancel').addEventListener('click', () => {
    const alertModal = document.getElementById('customAlert');
    alertModal.classList.remove('show');
    alertModal.setAttribute('aria-hidden', 'true');
});

document.getElementById('alertConfirm').addEventListener('click', () => {
    window.location.reload();
});

window.addEventListener('beforeunload', function(e) {
    e.preventDefault();
    e.returnValue = "Attention: Actualiser la page supprimera tous les articles de votre panier.";
});

window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('hide');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});
