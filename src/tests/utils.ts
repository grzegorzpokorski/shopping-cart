export const products = [
  {
    id: 0,
    name: "Logitech M330 silent",
    price: 149.99,
    category: "mysz",
    image: {
      url: "/images/logitech-m330-silent.jpg",
      height: 532,
      width: 600,
      alt: "czarna myszka logitech m330 silent ukazana z góry",
    },
    availableAmount: 1,
  },
  {
    id: 1,
    name: "Logitech MX Keys for mac",
    price: 492,
    category: "klawiatura",
    image: {
      url: "/images/logitech-mx-keys-mac.jpg",
      height: 514,
      width: 580,
      alt: "szaro-grafitowa klawiatura logitech mx keys mac ukazana z profilu",
    },
    availableAmount: 5,
  },
  {
    id: 2,
    name: "Logitech MX Keys mini rose",
    price: 499,
    category: "klawiatura",
    image: {
      url: "/images/logitech-mx-keys-mini-rose.jpg",
      height: 514,
      width: 580,
      alt: "różowa klawiatura Logitech MX Keys mini rose ukazana pod kątem",
    },
    availableAmount: 2,
  },
];

export const product = products[0];

export const unavailableProduct = { ...product, availableAmount: 0 };
