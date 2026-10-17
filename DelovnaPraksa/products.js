const PRODUCTS = {

  /* ---------- SOFT DRINKS ---------- */
  "cola": {
    name: "Coca Cola",
    category: "Не газирани пијалоци",
    price: "100 ден",
    image: "images/cola.jpg",
    description: "Освежителен не алкохолен пијалок.",
    ingredients: ["/", "/", "/"],
    details: "Се сервира во 330ml чаша. Постои и опција без шеќер"
  },
  "Schweppes": {
    name: "Schweppes",
    category: "Не газирани пијалоци",
    price: "100 ден",
    image: "images/shveps.png",
    description: "Освежителен не алкохолен пијалок.",
    ingredients: ["/", "/", "/"],
    details: "Се сервира во 330ml чаша. Постои и опција без шеќер"
  },
  "fanta": {
    name: "Fanta",
    category: "Soft Drinks",
    price: "100 ден.",
    image: "images/fanta.png",
    description: "Почувствувајте ја свежината.",
    ingredients: ["Екстракт од портокал",  "Шеќер", "Газирана вода"],
    details: "Се сервира во 330ml чаша."
  },
  "juice": {
    name: "Свежо цеден сок",
    category: "Soft Drinks",
    price: "200 ден.",
    image: "images/sok.png",
    description: "Сок од свежо цедено овошје.",
    ingredients: ["Овошје"],
    details: ""
  },
  "gazirana": {
    name: "Газирана вода",
    category: "Soft Drinks",
    price: "100 / 150 ден.",
    image: "images/rosa.png",
    description: "Минерална вода",
    ingredients: ["Газирана вода"],
    details: "Газирана вода доаѓа во две варијанти голема и мала флаша."
  },
  "mutni": {
    name: "Овошни сокови",
    category: "Soft Drinks",
    price: "120 ден.",
    image: "images/mutni.png",
    description: "Минерална вода",
    ingredients: ["Јагода", "Портокал", "Праска", "Боровница", "Ананас"],
    details: "Освежитлен овошен сок."
  },

  /* ---------- COFFEE & TEA ---------- */
  "espresso": {
    name: "Espresso",
    category: "Coffee & Tea",
    price: "3.50",
    image: "images/espresso.jpg",
    description: "A rich double shot of Italian-roast espresso with a thick crema.",
    ingredients: ["Freshly ground espresso beans", "Filtered water"],
    details: "Double shot. Served with a small glass of sparkling water."
  },
  "cappuccino": {
    name: "Cappuccino",
    category: "Coffee & Tea",
    price: "4.50",
    image: "images/cappuccino.jpg",
    description: "Espresso topped with velvety steamed milk foam and a dusting of cocoa.",
    ingredients: ["Espresso", "Steamed milk", "Milk foam", "Cocoa powder"],
    details: "Available with oat, almond, or soy milk."
  },
  "green-tea": {
    name: "Green Tea",
    category: "Coffee & Tea",
    price: "3.50",
    image: "images/green-tea.jpg",
    description: "Delicate jasmine green tea, steeped to a light golden colour.",
    ingredients: ["Jasmine green tea leaves", "Hot water"],
    details: "Served in a ceramic pot. Refill available."
  },
  "chai-latte": {
    name: "Chai Latte",
    category: "Coffee & Tea",
    price: "4.50",
    image: "images/chai-latte.jpg",
    description: "Spiced black tea blended with steamed milk and a touch of honey.",
    ingredients: ["Black tea", "Cinnamon", "Cardamom", "Ginger", "Cloves", "Steamed milk", "Honey"],
    details: "Sweetened with honey. Vegan option available."
  },

  /* ---------- BEER ---------- */
  "lager": {
    name: "Draft Lager",
    category: "Beer",
    price: "6.00",
    image: "images/lager.jpg",
    description: "A crisp, light-bodied lager poured cold from the tap.",
    ingredients: ["Barley", "Hops", "Yeast", "Water"],
    details: "Served in a 500ml glass. Pint option available."
  },
  "ipa": {
    name: "Craft IPA",
    category: "Beer",
    price: "7.50",
    image: "images/ipa.jpg",
    description: "A hoppy India Pale Ale with citrus and pine notes.",
    ingredients: ["Pale malt", "Citra hops", "Yeast", "Water"],
    details: "6.2% ABV. Local craft brewery."
  },
  "stout": {
    name: "Dark Stout",
    category: "Beer",
    price: "7.00",
    image: "images/stout.jpg",
    description: "Rich and creamy with notes of roasted coffee and dark chocolate.",
    ingredients: ["Roasted barley", "Hops", "Yeast", "Water"],
    details: "5.5% ABV. Served at cellar temperature."
  },
  "cider": {
    name: "Apple Cider",
    category: "Beer",
    price: "6.50",
    image: "images/cider.jpg",
    description: "Dry, orchard-fresh cider made from pressed apples.",
    ingredients: ["Pressed apples", "Yeast"],
    details: "4.5% ABV. Gluten-free."
  },

  /* ---------- WINE ---------- */
  "house-red": {
    name: "House Red",
    category: "Wine",
    price: "9 / 38",
    image: "images/house-red.jpg",
    description: "A dry, full-bodied red with dark fruit and a smooth finish.",
    ingredients: ["Red wine grapes (Cabernet blend)"],
    details: "Available by the glass (175ml) or bottle (750ml)."
  },
  "house-white": {
    name: "House White",
    category: "Wine",
    price: "9 / 38",
    image: "images/house-white.jpg",
    description: "Crisp and refreshing with bright citrus notes.",
    ingredients: ["White wine grapes (Sauvignon blend)"],
    details: "Available by the glass (175ml) or bottle (750ml)."
  },
  "rose": {
    name: "Rosé Reserve",
    category: "Wine",
    price: "11 / 44",
    image: "images/rose.jpg",
    description: "Floral and delicate with a dry, elegant finish.",
    ingredients: ["Rosé wine grapes (Grenache blend)"],
    details: "Available by the glass (175ml) or bottle (750ml)."
  },
  "prosecco": {
    name: "Prosecco",
    category: "Wine",
    price: "10 / 42",
    image: "images/prosecco.jpg",
    description: "Light, sparkling, and festive — with green apple and pear notes.",
    ingredients: ["Glera grapes"],
    details: "Available by the glass (150ml) or bottle (750ml)."
  },

  /* ---------- COCKTAILS ---------- */
  "yard-old-fashioned": {
    name: "Yard Old Fashioned",
    category: "Cocktails",
    price: "14",
    image: "images/yard-old-fashioned.jpg",
    description: "A Yard twist on the classic — bourbon with smoked honey and orange bitters.",
    ingredients: ["Bourbon", "Smoked honey syrup", "Orange bitters", "Orange peel"],
    details: "Stirred over a large ice cube. Served with a smoked orange twist."
  },
  "amber-hour": {
    name: "Amber Hour",
    category: "Cocktails",
    price: "15",
    image: "images/amber-hour.jpg",
    description: "Rye whiskey meets apricot and cinnamon for a warm, layered cocktail.",
    ingredients: ["Rye whiskey", "Apricot liqueur", "Cinnamon syrup", "Lemon juice"],
    details: "Shaken and served straight up in a coupe."
  },
  "sage-sun": {
    name: "Sage & Sun",
    category: "Cocktails",
    price: "13",
    image: "images/sage-sun.jpg",
    description: "A floral and herbal gin cocktail with fresh sage.",
    ingredients: ["Gin", "Elderflower liqueur", "Fresh sage", "Lemon juice", "Soda water"],
    details: "Served tall over ice with a sage leaf garnish."
  },
  "rust-roses": {
    name: "Rust & Roses",
    category: "Cocktails",
    price: "15",
    image: "images/rust-roses.jpg",
    description: "Smoky mezcal balanced with floral hibiscus and bright lime.",
    ingredients: ["Mezcal", "Hibiscus syrup", "Fresh lime juice", "Agave"],
    details: "Served in a rocks glass with a hibiscus flower."
  },
  "lounge-negroni": {
    name: "Lounge Negroni",
    category: "Cocktails",
    price: "16",
    image: "images/lounge-negroni.jpg",
    description: "A barrel-aged Negroni with deep, rounded flavours and orange zest.",
    ingredients: ["Barrel-aged gin", "Campari", "Sweet vermouth", "Orange zest"],
    details: "Aged 3 months in oak. Served over ice."
  },

  /* ---------- SPIRITS ---------- */
  "scotch": {
    name: "Single Malt Scotch",
    category: "Spirits",
    price: "14",
    image: "images/scotch.jpg",
    description: "A selection of aged single malt Scotch whiskies.",
    ingredients: ["Malted barley", "Water", "Yeast"],
    details: "Ask your server for today's selection. Served neat or with a splash of water."
  },
  "bourbon": {
    name: "Small Batch Bourbon",
    category: "Spirits",
    price: "13",
    image: "images/bourbon.jpg",
    description: "Smooth small-batch bourbon with caramel and vanilla notes.",
    ingredients: ["Corn", "Rye", "Barley", "Water"],
    details: "Served neat, on the rocks, or with a dash of bitters."
  },
  "tequila": {
    name: "Premium Tequila",
    category: "Spirits",
    price: "12",
    image: "images/tequila.jpg",
    description: "100% agave reposado tequila with a smooth, earthy finish.",
    ingredients: ["Blue agave"],
    details: "Served with salt and lime on request."
  },
  "rum": {
    name: "Aged Rum",
    category: "Spirits",
    price: "12",
    image: "images/rum.jpg",
    description: "Caribbean 12-year aged rum with notes of oak, vanilla, and dried fruit.",
    ingredients: ["Sugarcane", "Molasses", "Yeast"],
    details: "Served neat or on a single large ice cube."
  },

  /* ---------- STARTERS ---------- */
  "marinated-olives": {
    name: "Marinated Olives",
    category: "Starters",
    price: "7",
    image: "images/marinated-olives.jpg",
    description: "A mix of green and black olives marinated with citrus and herbs.",
    ingredients: ["Green olives", "Black olives", "Orange zest", "Rosemary", "Thyme", "Olive oil"],
    details: "Vegan. Served at room temperature with toothpicks."
  },
  "truffle-fries": {
    name: "Truffle Fries",
    category: "Starters",
    price: "10",
    image: "images/truffle-fries.jpg",
    description: "Crispy golden fries tossed in truffle oil, parmesan, and fresh chives.",
    ingredients: ["Potatoes", "Truffle oil", "Parmesan cheese", "Fresh chives", "Sea salt"],
    details: "Vegetarian. Served with garlic aioli."
  },
  "spiced-almonds": {
    name: "Spiced Almonds",
    category: "Starters",
    price: "6",
    image: "images/spiced-almonds.jpg",
    description: "Warm roasted almonds tossed in smoked paprika and sea salt.",
    ingredients: ["Almonds", "Smoked paprika", "Sea salt", "Olive oil"],
    details: "Vegan. Served warm."
  },
  "charcuterie": {
    name: "Charcuterie Board",
    category: "Starters",
    price: "22",
    image: "images/charcuterie.jpg",
    description: "A generous board of cured meats, aged cheeses, pickles, and crackers.",
    ingredients: ["Prosciutto", "Salami", "Aged cheddar", "Brie", "Pickles", "Crackers", "Fig jam"],
    details: "Perfect for sharing. Serves 2–3."
  },

  /* ---------- BURGERS ---------- */
  "classic-burger": {
    name: "Classic Burger",
    category: "Burgers",
    price: "14",
    image: "images/classic-burger.jpg",
    description: "A juicy beef patty with cheddar and house sauce in a toasted brioche bun.",
    ingredients: ["Beef patty", "Cheddar cheese", "Lettuce", "Tomato", "House sauce", "Brioche bun"],
    details: "Served with fries or a side salad."
  },
  "signature-burger": {
    name: "Yard Signature Burger",
    category: "Burgers",
    price: "18",
    image: "images/signature-burger.jpg",
    description: "Double beef patty, smoked bacon, and aged cheddar — our house favourite.",
    ingredients: ["Double beef patty", "Smoked bacon", "Aged cheddar", "Caramelised onions", "Signature sauce", "Brioche bun"],
    details: "Served with truffle fries."
  },
  "chicken-burger": {
    name: "Crispy Chicken Burger",
    category: "Burgers",
    price: "15",
    image: "images/chicken-burger.jpg",
    description: "Buttermilk-fried chicken with slaw and spicy sriracha mayo.",
    ingredients: ["Buttermilk chicken", "Coleslaw", "Sriracha mayo", "Pickles", "Brioche bun"],
    details: "Mild spice. Served with fries."
  },
  "veggie-burger": {
    name: "Veggie Burger",
    category: "Burgers",
    price: "13",
    image: "images/veggie-burger.jpg",
    description: "A hearty black bean patty with avocado, tomato, and chipotle mayo.",
    ingredients: ["Black bean patty", "Avocado", "Tomato", "Lettuce", "Chipotle mayo", "Brioche bun"],
    details: "Vegetarian. Vegan option available."
  },
  "burger-addons": {
    name: "Burger Add-Ons",
    category: "Burgers",
    price: "2 – 5",
    image: "images/burger-addons.jpg",
    description: "Customise any burger with these optional extras.",
    ingredients: ["Extra cheese", "Smoked bacon", "Fried egg", "Extra patty", "Avocado"],
    details: "Add any item to your burger for an additional charge."
  },

  /* ---------- MAINS ---------- */
  "ribeye": {
    name: "Grilled Ribeye",
    category: "Mains",
    price: "32",
    image: "images/ribeye.jpg",
    description: "A tender ribeye steak grilled to your liking, finished with herb butter.",
    ingredients: ["Ribeye steak", "Herb butter", "Sea salt", "Black pepper", "Fries"],
    details: "Served with fries and seasonal greens. Choose your doneness."
  },
  "salmon": {
    name: "Pan-Seared Salmon",
    category: "Mains",
    price: "24",
    image: "images/salmon.jpg",
    description: "Crispy-skinned salmon with lemon, capers, and seasonal greens.",
    ingredients: ["Salmon fillet", "Lemon", "Capers", "Butter", "Seasonal greens"],
    details: "Gluten-free. Rich in omega-3."
  },
  "risotto": {
    name: "Wild Mushroom Risotto",
    category: "Mains",
    price: "19",
    image: "images/risotto.jpg",
    description: "Creamy arborio rice with wild mushrooms, parmesan, and truffle oil.",
    ingredients: ["Arborio rice", "Wild mushrooms", "Parmesan", "Truffle oil", "White wine", "Vegetable stock"],
    details: "Vegetarian. Gluten-free."
  },
  "chicken-supreme": {
    name: "Chicken Supreme",
    category: "Mains",
    price: "21",
    image: "images/chicken-supreme.jpg",
    description: "Roasted chicken breast with garlic potatoes and pan jus.",
    ingredients: ["Chicken breast", "Garlic", "Potatoes", "Rosemary", "Pan jus"],
    details: "Served with seasonal vegetables."
  },

  /* ---------- DESSERTS ---------- */
  "cheesecake": {
    name: "Vanilla Cheesecake",
    category: "Desserts",
    price: "9",
    image: "images/cheesecake.jpg",
    description: "Creamy vanilla cheesecake with berry compote and fresh mint.",
    ingredients: ["Cream cheese", "Vanilla", "Digestive biscuit base", "Berry compote", "Fresh mint"],
    details: "Vegetarian."
  },
  "chocolate-fondant": {
    name: "Chocolate Fondant",
    category: "Desserts",
    price: "10",
    image: "images/chocolate-fondant.jpg",
    description: "Warm chocolate fondant with a molten center, served with vanilla ice cream.",
    ingredients: ["Dark chocolate", "Butter", "Eggs", "Flour", "Sugar", "Vanilla ice cream"],
    details: "Please allow 12 minutes — made fresh to order."
  },
  "ice-cream": {
    name: "Ice Cream Trio",
    category: "Desserts",
    price: "8",
    image: "images/ice-cream.jpg",
    description: "Three scoops of your choice from our daily selection.",
    ingredients: ["Milk", "Cream", "Sugar", "Natural flavourings"],
    details: "Ask your server for today's flavours. Vegan option available."
  },
  "affogato": {
    name: "Affogato",
    category: "Desserts",
    price: "8",
    image: "images/affogato.jpg",
    description: "A shot of hot espresso poured over a scoop of vanilla gelato.",
    ingredients: ["Espresso", "Vanilla gelato"],
    details: "Served in a chilled glass. Contains caffeine."
  }

};


/* =========================================================
   RENDER LOGIC — runs on product.html
   ========================================================= */
(function renderProduct() {
  const root = document.getElementById("product-root");
  if (!root) return; // not on product page

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const product = PRODUCTS[id];

  if (!product) {
    root.innerHTML = `
      <div class="product-not-found">
        <h1>Product Not Found</h1>
        <p>The item you're looking for doesn't exist on our menu.</p>
        <a href="menu.html" class="btn">Back to Menu</a>
      </div>`;
    return;
  }

  // Update page title
  document.title = `${product.name} — The Yard Lounge Bar`;

  // Fill in fields
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-category").textContent = product.category;
  document.getElementById("product-price").textContent = product.price;
  document.getElementById("product-description").textContent = product.description;
  document.getElementById("product-details").textContent = product.details;

  // Ingredients list
  const ingList = document.getElementById("product-ingredients");
  ingList.innerHTML = "";
  product.ingredients.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ingList.appendChild(li);
  });

  // Image with fallback
  const img = document.getElementById("product-image");
  const fallback = document.getElementById("product-image-fallback");

  img.alt = product.name;
  img.src = product.image;

  img.addEventListener("error", () => {
    img.style.display = "none";
    fallback.style.display = "flex";
    fallback.textContent = product.name.charAt(0).toUpperCase();
  });

  // If image loads fine, hide fallback
  img.addEventListener("load", () => {
    fallback.style.display = "none";
  });
})();