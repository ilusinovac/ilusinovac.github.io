const PRODUCTS = {

  // Pijaloci
  "cola": {
    name: "Coca Cola",
    category: "Неалкохолни пијалоци",
    price: "100 ден",
    image: "images/cola.jpg",
    description: "Освежителен не алкохолен пијалок.",
    sostojki: ["/", "/", "/"],
    details: "Се сервира во 330ml чаша. Постои и опција без шеќер"
  },
  "Schweppes": {
    name: "Schweppes",
    category: "Неалкохолни пијалоци",
    price: "100 ден",
    image: "images/shveps.png",
    description: "Освежителен не алкохолен пијалок.",
    sostojki: ["/", "/", "/"],
    details: "Се сервира во 330ml чаша. Постои и опција без шеќер"
  },
  "fanta": {
    name: "Fanta",
    category: "Неалкохолни пијалоци",
    price: "100 ден.",
    image: "images/fanta.png",
    description: "Почувствувајте ја свежината.",
    sostojki: ["Екстракт од портокал",  "Шеќер", "Газирана вода"],
    details: "Се сервира во 330ml чаша."
  },
  "juice": {
    name: "Свежо цеден сок",
    category: "Неалкохолни пијалоци",
    price: "200 ден.",
    image: "images/sok.png",
    description: "Сок од свежо цедено овошје.",
    sostojki: ["Овошје"],
    details: ""
  },
  "gazirana": {
    name: "Газирана вода",
    category: "Неалкохолни пијалоци",
    price: "100 / 150 ден.",
    image: "images/rosa.png",
    description: "Минерална вода",
    sostojki: ["Газирана вода"],
    details: "Газирана вода доаѓа во две варијанти голема и мала флаша."
  },
  "mutni": {
    name: "Овошен сок",
    category: "Неалкохолни пијалоци",
    price: "120 ден.",
    image: "images/mutni.png",
    description: "Минерална вода",
    sostojki: ["Јагода", "Портокал", "Праска", "Боровница", "Ананас"],
    details: "Освежитлен овошен сок."
  },

  /* ---------- COFFEE & TEA ---------- */
  "espresso": {
    name: "Espresso",
    category: "Кафе & Чај",
    price: "70 ден",
    image: "images/espresso.jpg",
    description: "Богато со вукс и арома",
    sostojki: ["Свежо мелени зрна на кафе", "Вода"],
    details: "Богато со вукс и арома"
  },
  "cappuccino": {
    name: "Cappuccino",
    category: "Кафе & Чај",
    price: "100 ден",
    image: "images/cappuccino.jpg",
    description: "Свежо мелено кафе со богат вкус и арома",
    sostojki: ["Espresso", "Млеко","Какао во прав"],
    details: ""
  },
  "machiato": {
    name: "Макијато",
    category: "Кафе & Чај",
    price: "90 ден",
    image: "images/machiato.jpg",
    description: "",
    sostojki: [],
    details: ""
  },
  "nes": {
    name: "Нес кафе",
    category: "Кафе & Чај",
    price: "100 ден",
    image: "images/nes.jpg",
    description: "",
    sostojki: [],
    details: ""
  },
  "tmachiato": {
    name: "Топло макијато",
    category: "Кафе & Чај",
    price: "90 ден",
    image: "images/tmachiato.jpg",
    description: "",
    sostojki: [],
    details: ""
  },
  "chai": {
    name: "Чај",
    category: "Кафе & Чај",
    price: "100 ден",
    image: "images/chai.jpg",
    description: "Топол чај од Good Nature",
    sostojki: [],
    details: ""
  },

  /* ---------- BEER ---------- */
  "Skopsko": {
    name: "Скопско / Smooth пиво",
    category: "Алкохолни пијалоци",
    price: "120 ден",
    image: "images/skopsko.png",
    description: "",
    sostojki: [],
    details: ""
  },
  "Hainiken": {
    name: "Heineken",
    category: "Алкохолни пијалоци",
    price: "120 ден",
    image: "images/heineken.jpg",
    description: "",
    sostojki: [],
    details: ""
  },
  "Vino": {
    name: "Стоби црвено / бело вино",
    category: "Алкохолни пијалоци",
    price: "200 ден",
    image: "images/vino.jpg",
    description: "Вкусно вино со долга традиција",
    sostojki: [],
    details: ""
  },
  "ZlatenDab": {
    name: "Златен Даб",
    category: "Алкохолни пијалоци",
    price: "120 ден",
    image: "images/zlatendab.jpg",
    description: "",
    sostojki: [],
    details: ""
  },
  "Zolta": {
    name: "Жолта",
    category: "Алкохолни пијалоци",
    price: "80 ден",
    image: "images/zolta.jpg",
    description: "",
    sostojki: [],
    details: ""
  },
  "Aleksandrija": {
    name: "Александрија црвено / бело вино",
    category: "Алкохолни пијалоци",
    price: "220 ден",
    image: "images/aleksandrija.jpg",
    description: "",
    sostojki: [],
    details: ""
  },
  "Smederevska": {
    name: "Смедеревка",
    category: "Алкохолни пијалоци",
    price: "220 ден",
    image: "images/smederevska.png",
    description: "",
    sostojki: [],
    details: ""
  },
  "Belvedere": {
    name: "Belvedere",
    category: "Алкохолни пијалоци",
    price: "180 ден",
    image: "images/belvedere.jpg",
    description: "",
    sostojki: [],
    details: ""
  },


//-------- Коктели
  "plava": {
    name: "Blue Lagoon",
    category: "Коктели",
    price: "240 ден",
    image: "images/plava.jpg",
    description: "",
    sostojki: [],
    details: ""
  },
  "sexonthebeach": {
    name: "Sex on the beach",
    category: "Коктели",
    price: "220 ден",
    image: "images/sexonthebeach.jpg",
    description: "",
    sostojki: [],
    details: ""
  },
  "Mochito": {
    name: "Mochito",
    category: "Коктели",
    price: "200 ден",
    image: "images/Mochito.jpg",
    description: "",
    sostojki: [],
    details: ""
  },
  "pina": {
    name: "Piña colada",
    category: "Коктели",
    price: "250 ден",
    image: "images/pina.jpg",
    description: "Освежителен тропски коктел",
    sostojki: [],
    details: ""
  },



  // ---------- ПРЕДЈЕЛО 
  "Pileskiprsti": {
    name: "Пилешки прсти",
    category: "Предјело",
    price: "290 ден",
    image: "images/pileskiprsti.jpg",
    description: "",
    sostojki: ["стек", "јајца", "сусам", "презла"],
    details: ""
  },
  "Pileskiprstikorn": {
    name: "Пилешки Прсти со корнфликс",
    category: "Предјело",
    price: "300 ден",
    image: "images/pileskiprstikorn.jpg",
    description: "",
    sostojki: ["стек", "јајца", "сусам", "презла", "корнфлекс"],
    details: ""
  },
  "Pileskikrilca": {
    name: "Пилешки крилца",
    category: "Предјело",
    price: "290 ден",
    image: "images/pileskikrilca.jpg",
    description: "",
    sostojki: ["Пилешко", "томато сос"],
    details: ""
  },
  "pohovankaskaval": {
    name: "Похован Кашкавал",
    category: "Предјело",
    price: "140 ден",
    image: "images/pohovankaskaval.jpg",
    description: "",
    sostojki: ["Кашкавал", "презла", "сусам"],
    details: ""
  },
  "Sirenjeskara": {
    name: "Сирење на скара",
    category: "Предјело",
    price: "150 ден",
    image: "images/sirenjeskara.jpg",
    description: "",
    sostojki: [],
    details: ""
  },
  "pomfrit": {
    name: "Помфрит",
    category: "Предјело",
    price: "200 ден",
    image: "images/pomfrit.jpg",
    description: "",
    sostojki: ["компир"],
    details: ""
  },
  "pomfrityard": {
    name: "Yard омфрит",
    category: "Предјело",
    price: "220 ден",
    image: "images/pomfrityard.jpg",
    description: "",
    sostojki: ["компир", "зачини", "yard сос"],
    details: ""
  },
  "pomfritsirenje": {
    name: "Помфрит со сирење",
    category: "Предјело",
    price: "250 ден",
    image: "images/pomfritsirenje.jpg",
    description: "",
    sostojki: ["компир", "сирење"],
    details: ""
  },

  // ---------- ПИЦИ
  "kapricioza": {
    name: "Капричиоза",
    category: "Пици",
    price: "300 ден",
    image: "images/kapricioza.jpg",
    description: "",
    sostojki: ["тесто", "доматен сос", "шунка", "шампињони", "кашкавал"],
    details: ""
  },
  "peperoni": {
    name: "Пеперони",
    category: "Пици",
    price: "330 ден",
    image: "images/peperoni.jpg",
    description: "",
    sostojki: ["тесто", "доматен сос", "кашкавал", "кулен"],
    details: ""
  },
  "YardPica": {
    name: "Yard пица",
    category: "Пици",
    price: "390 ден",
    image: "images/yardpica.jpg",
    description: "",
    sostojki: ["тесто", "доматен сос", "кашкавал", "сув врат", "шампињони", "пршута", "павлака"],
    details: ""
  },
  "kvatro": {
    name: "Кватро формаџи",
    category: "Пици",
    price: "330 ден",
    image: "images/kvatro.jpg",
    description: "",
    sostojki: ["тесто", "доматен сос", "кашкавал", "пармезан", "бергарден", "моцарела"],
    details: ""
  },
  "proskijata": {
    name: "Проскијата",
    category: "Пици",
    price: "350 ден",
    image: "images/proskijata.jpg",
    description: "",
    sostojki: ["тесто", "доматен сос", "капшкавал", "пршута"],
    details: ""
  },
  "tunapica": {
    name: "Туна пица",
    category: "Пици",
    price: "290 ден",
    image: "images/tunapica.jpg",
    description: "",
    sostojki: ["тесто", "туна", "доматен сос", "зеленчук", "шампињони"],
    details: ""
  },
  "vegetarijana": {
    name: "Вегетаријана",
    category: "Пици",
    price: "280 ден",
    image: "images/vegetarijana.jpg",
    description: "",
    sostojki: ["тесто", "доматен сос", "зеленчук", "кашкавал"],
    details: ""
  },
  "margaritapica": {
    name: "Маргарита",
    category: "Пици",
    price: "290 ден",
    image: "images/margaritapica.jpg",
    description: "",
    sostojki: ["тесто", "доматен сос", "кашкавал"],
    details: ""
  },

  /* ---------- bURGERi ---------- */
  "classic-burger": {
    name: "Хамбургер",
    category: "Бургери",
    price: "190 ден",
    image: "images/classic-burger.jpg",
    description: "Прилагодете го кој било бургер со дополнителни опции.",
    sostojki: ["Лепиња", "плескавица", "помфрит"],
    details: ""
  },
  "signature-burger": {
    name: "Пилешки крцкав бургер",
    category: "Бургери",
    price: "220 ден",
    image: "images/signature-burger.jpg",
    description: "Прилагодете го кој било бургер со дополнителни опции.",
    sostojki: ["Лепиња", "пилешки стек", "кашкавал", "помфрит"],
    details: ""
  },
  "chicken-burger": {
    name: "Yard бургер",
    category: "Бургери",
    price: "290 ден",
    image: "images/chicken-burger.jpg",
    description: "Прилагодете го кој било бургер со дополнителни опции.",
    sostojki: ["Лепиња", "плескавица", "јајца", "сланина", "цедар кашкавал", "домат", "барула", "киели краставички", "бургер сос", "компири"],
    details: ""
  },
  "veggie-burger": {
    name: "Порк бургер  ",
    category: "Бургери",
    price: "320 ден",
    image: "images/veggie-burger.jpg",
    description: "Прилагодете го кој било бургер со дополнителни опции.",
    sostojki: ["Лепиња", "свинско месо", "барбекју сос", "семф", "чадар кашкавал", "зелка", "морков", "мајонез", "компири"],
    details: ""
  },
  "mocarelaburger": {
    name: "Моцарела бургер",
    category: "Бургери",
    price: "290 ден",
    image: "images/mocarela.jpg",
    description: "Прилагодете го кој било бургер со дополнителни опции.",
    sostojki: ["плескавица", "домат", "кромид", "марула", "моцарела", "компири"],
    details: ""
  },
  "samuraiburger": {
    name: "Самураи бургер",
    category: "Бургери",
    price: "300 ден",
    image: "images/samurai.jpg",
    description: "Прилагодете го кој било бургер со дополнителни опции.",
    sostojki: [],
    details: ""
  },
  "cizburger": {
    name: "Чизбургер",
    category: "Бургери",
    price: "200 ден",
    image: "images/cizburger.jpg",
    description: "Прилагодете го кој било бургер со дополнителни опции.",
    sostojki: ["Лепиња", "плескавица", "кашкавал", "помфрит"],
    details: ""
  },
  "cikenburger": {
    name: "Чикенбургер",
    category: "Бургери",
    price: "210 ден",
    image: "images/ciken.jpg",
    description: "",
    sostojki: ["Лепиња", "стек", "кашкавал", "помфрит"],
    details: ""
  },

  /* ---------- Сендвичи ---------- */
  "Italijanski": {
    name: "Италијански сендвич",
    category: "Сендвичи",
    price: "240 ден",
    image: "images/italijanski.jpg",
    description: "",
    sostojki: [""],
    details: ""
  },
  "avokado": {
    name: "Авокадо сендвич",
    category: "Сендвичи",
    price: "240 ден",
    image: "images/avokado.jpg",
    description: "",
    sostojki: [""],
    details: ""
  },
  "pizasendvic": {
    name: "Пица сендвич",
    category: "Сендвичи",
    price: "190 ден",
    image: "images/pica.jpg",
    description: "",
    sostojki: [""],
    details: ""
  },
  "kalcona": {
    name: "Калциона",
    category: "Сендвичи",
    price: "220 ден",
    image: "images/kalcona.jpg",
    description: "",
    sostojki: [""],
    details: ""
  },

  /* ---------- Deserti ---------- */
  "cheesecake": {
    name: "Vanilla Cheesecake",
    category: "Десерти",
    price: "150 ден",
    image: "images/vanila.jpg",
    description: "Creamy vanilla cheesecake with berry compote and fresh mint.",
    sostojki: ["Cream cheese", "Vanilla", "Digestive biscuit base", "Berry compote", "Fresh mint"],
    details: "Вегетерианско."
  },
  "chocolate-fondant": {
    name: "Chocolate Fondant",
    category: "Десерти",
    price: "190 ден",
    image: "images/cololatefondan.jpg",
    description: "Warm chocolate fondant with a molten center, served with vanilla ice cream.",
    sostojki: ["Dark chocolate", "Butter", "Eggs", "Flour", "Sugar", "Vanilla ice cream"],
    details: ""
  },
  "ice-cream": {
    name: "Ice Cream Trio",
    category: "Десерти",
    price: "180 ден",
    image: "images/sladoled-trio.jpg",
    description: "Three scoops of your choice from our daily selection.",
    sostojki: ["Milk", "Cream", "Sugar", "Natural flavourings"],
    details: "Постои и вегански избор"
  },
  "affogato": {
    name: "Affogato",
    category: "Десерти",
    price: "200 ден",
    image: "images/afogato.jpg",
    description: "A shot of hot espresso poured over a scoop of vanilla gelato.",
    sostojki: ["Espresso", "Vanilla gelato"],
    details: "Состои кофеин"
  },


};


(function renderProduct() {
  const root = document.getElementById("product-root");
  if (!root) return; 

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const product = PRODUCTS[id];

  if (!product) {
    root.innerHTML = `
      <div class="product-not-found">
        <h1>Продуктот не е најден</h1>
        <a href="menu.html" class="btn">МЕНИ</a>
      </div>`;
    return;
  }

  document.title = `${product.name} — The Yard Lounge Bar`;

  // potpuna
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-category").textContent = product.category;
  document.getElementById("product-cena").textContent = product.price;
  document.getElementById("product-informacije").textContent = product.description;
  document.getElementById("product-opis").textContent = product.details;

  
  const ingList = document.getElementById("product-sostojki");
  ingList.innerHTML = "";
  product.sostojki.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ingList.appendChild(li);
  });

  const img = document.getElementById("product-image");
  const fallback = document.getElementById("product-image-fallback");

  img.alt = product.name;
  img.src = product.image;

  img.addEventListener("error", () => {
    img.style.display = "none";
    fallback.style.display = "flex";
    fallback.textContent = product.name.charAt(0).toUpperCase();
  });

  img.addEventListener("load", () => {
    fallback.style.display = "none";
  });
})();