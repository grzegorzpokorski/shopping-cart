import { ShoppingCartStateType } from "../context/ShoppingCartContext";

export type ShoppingCartActionType =
  | { type: "add_product_to_cart"; id: number }
  | { type: "remove_product_from_cart"; id: number }
  | { type: "increase_product_qty_in_cart"; id: number }
  | { type: "decrease_product_qty_in_cart"; id: number }
  | { type: "toggle_cart" };

export const shoppingCartReducer = (
  prevState: ShoppingCartStateType,
  action: ShoppingCartActionType,
) => {
  switch (action.type) {
    case "add_product_to_cart": {
      const product = prevState.products.find((p) => p.id == action.id);

      if (product) {
        return {
          ...prevState,
          inCart: [
            ...prevState.inCart,
            {
              ...product,
              qty: 1,
            },
          ],
        };
      }
      return prevState;
    }
    case "remove_product_from_cart":
      return {
        ...prevState,
        inCart: prevState.inCart.filter((p) => p.id !== action.id),
      };
    case "increase_product_qty_in_cart":
      return {
        ...prevState,
        inCart: [
          ...prevState.inCart.map((item) =>
            item.id === action.id
              ? { ...item, qty: item.qty + 1 }
              : { ...item },
          ),
        ],
      };
    case "decrease_product_qty_in_cart":
      return {
        ...prevState,
        inCart: [
          ...prevState.inCart.map((item) =>
            item.id === action.id
              ? { ...item, qty: item.qty - 1 }
              : { ...item },
          ),
        ],
      };
    case "toggle_cart":
      return {
        ...prevState,
        cartOpen: !prevState.cartOpen,
      };
    default:
      return prevState;
  }
};