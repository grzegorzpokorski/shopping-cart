import { FavouriteProductsList } from "./FavouriteProductsList";
import {
  initValue,
  renderWithShoppingCartContext,
} from "../../../tests/ShoppingCartProvider";
import { UIProvider } from "../../../providers/UIProvider";

const products = [
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

const favourite = [0, 2];
const favouriteTitles = ["Logitech M330 silent", "Logitech MX Keys mini rose"];

describe("<FavouriteProductsList />", () => {
  const renderList = () => {
    const { container } = renderWithShoppingCartContext(
      <UIProvider>
        <FavouriteProductsList />
      </UIProvider>,
      {
        contextValue: {
          ...initValue,
          shoppingCartState: {
            ...initValue.shoppingCartState,
            products: products,
            favourite: favourite,
          },
        },
      },
    );
    return container;
  };

  it("should display all favourites products", () => {
    const container = renderList();
    const items = container.querySelectorAll("li");

    expect(items.length).toBe(2);
  });

  it("displayed products should be in favourite products list", () => {
    const container = renderList();
    const items = container.querySelectorAll("li");
    items.forEach((item, index) => {
      expect(item.textContent).toContain(favouriteTitles[index]);
    });
  });
});
