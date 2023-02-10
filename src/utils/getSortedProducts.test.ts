import { describe } from "vitest";
import { getSortedProducts } from "./getSortedProducts";

const products = [
  {
    id: 4,
    name: "Logitech MX Keys",
    price: 463,
    category: "klawiatura",
    image: {
      url: "/images/logitech-mx-keys.jpg",
      height: 514,
      width: 580,
      alt: "klawiatura Logitech MX Keys ukazana pod kątem z nadajnikiem",
    },
    availableAmount: 20,
  },
  {
    id: 5,
    name: "Logitech MX Master 3S (grafitowy)",
    price: 499,
    category: "mysz",
    image: {
      url: "/images/logitech-mx-master-3s-grafit.jpg",
      height: 514,
      width: 580,
      alt: "mysz Logitech mx master 3s w kolorze grafitowym o ergonomicznym kształcie ukazana od góry",
    },
    availableAmount: 20,
  },
  {
    id: 6,
    name: "Logitech MX Master 3S (jasnoszary)",
    price: 499,
    category: "mysz",
    image: {
      url: "/images/logitech-mx-master-3s-szary.jpg",
      height: 514,
      width: 580,
      alt: "mysz Logitech mx master 3s w kolorze jasnoszarym o ergonomicznym kształcie ukazana od góry",
    },
    availableAmount: 20,
  },
  {
    id: 7,
    name: "Logitech MX Mechanical Mini",
    price: 639,
    category: "klawiatura",
    image: {
      url: "/images/logitech-mx-mechanical-mini.jpg",
      height: 514,
      width: 580,
      alt: "grafitowa klawiatura Logitech mx mechanical mini ukazana pod katem z nadajnikiem",
    },
    availableAmount: 0,
  },
];

const productsSortedByPriceASC = [
  {
    id: 4,
    name: "Logitech MX Keys",
    price: 463,
    category: "klawiatura",
    image: {
      url: "/images/logitech-mx-keys.jpg",
      height: 514,
      width: 580,
      alt: "klawiatura Logitech MX Keys ukazana pod kątem z nadajnikiem",
    },
    availableAmount: 20,
  },
  {
    id: 5,
    name: "Logitech MX Master 3S (grafitowy)",
    price: 499,
    category: "mysz",
    image: {
      url: "/images/logitech-mx-master-3s-grafit.jpg",
      height: 514,
      width: 580,
      alt: "mysz Logitech mx master 3s w kolorze grafitowym o ergonomicznym kształcie ukazana od góry",
    },
    availableAmount: 20,
  },
  {
    id: 6,
    name: "Logitech MX Master 3S (jasnoszary)",
    price: 499,
    category: "mysz",
    image: {
      url: "/images/logitech-mx-master-3s-szary.jpg",
      height: 514,
      width: 580,
      alt: "mysz Logitech mx master 3s w kolorze jasnoszarym o ergonomicznym kształcie ukazana od góry",
    },
    availableAmount: 20,
  },
  {
    id: 7,
    name: "Logitech MX Mechanical Mini",
    price: 639,
    category: "klawiatura",
    image: {
      url: "/images/logitech-mx-mechanical-mini.jpg",
      height: 514,
      width: 580,
      alt: "grafitowa klawiatura Logitech mx mechanical mini ukazana pod katem z nadajnikiem",
    },
    availableAmount: 0,
  },
];

const productsSortedByPriceDESC = [
  {
    id: 7,
    name: "Logitech MX Mechanical Mini",
    price: 639,
    category: "klawiatura",
    image: {
      url: "/images/logitech-mx-mechanical-mini.jpg",
      height: 514,
      width: 580,
      alt: "grafitowa klawiatura Logitech mx mechanical mini ukazana pod katem z nadajnikiem",
    },
    availableAmount: 0,
  },
  {
    id: 5,
    name: "Logitech MX Master 3S (grafitowy)",
    price: 499,
    category: "mysz",
    image: {
      url: "/images/logitech-mx-master-3s-grafit.jpg",
      height: 514,
      width: 580,
      alt: "mysz Logitech mx master 3s w kolorze grafitowym o ergonomicznym kształcie ukazana od góry",
    },
    availableAmount: 20,
  },
  {
    id: 6,
    name: "Logitech MX Master 3S (jasnoszary)",
    price: 499,
    category: "mysz",
    image: {
      url: "/images/logitech-mx-master-3s-szary.jpg",
      height: 514,
      width: 580,
      alt: "mysz Logitech mx master 3s w kolorze jasnoszarym o ergonomicznym kształcie ukazana od góry",
    },
    availableAmount: 20,
  },
  {
    id: 4,
    name: "Logitech MX Keys",
    price: 463,
    category: "klawiatura",
    image: {
      url: "/images/logitech-mx-keys.jpg",
      height: 514,
      width: 580,
      alt: "klawiatura Logitech MX Keys ukazana pod kątem z nadajnikiem",
    },
    availableAmount: 20,
  },
];

describe("getSortedProducts()", () => {
  it("should return ascending sorted products by price", () => {
    expect(getSortedProducts(products, "PRICE_ASC")).toEqual(
      productsSortedByPriceASC,
    );
  });

  it("should return descending sorted products by price", () => {
    expect(getSortedProducts(products, "PRICE_DESC")).toEqual(
      productsSortedByPriceDESC,
    );
  });
});
