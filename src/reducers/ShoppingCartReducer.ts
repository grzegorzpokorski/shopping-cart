import {
  ProductInCartType,
  ShoppingCartStateType,
  SortByType,
} from "../providers/ShoppingCartProvider";

export type ShoppingCartReducerActions =
  | { type: "add_product_to_cart"; id: number; price: number }
  | { type: "remove_product_from_cart"; id: number }
  | { type: "increase_product_qty_in_cart"; id: number }
  | { type: "decrease_product_qty_in_cart"; id: number }
  | { type: "change_sort_by"; sortBy: SortByType }
  | { type: "change_displayed_category"; category: string }
  | { type: "toggle_favourite"; id: number }
  | { type: "place_order"; order: ProductInCartType[] }
  | {
      type: "decrease_available_amount";
      id: number;
      orderedAmount: number;
    }
  | {
      type: "cancel_order";
      orderId: number;
      items: ProductInCartType[];
    };

export const shoppingCartReducer = (
  state: ShoppingCartStateType,
  action: ShoppingCartReducerActions,
) => {
  switch (action.type) {
    case "add_product_to_cart": {
      return {
        ...state,
        inCart: [
          ...state.inCart,
          {
            id: action.id,
            qty: 1,
            price: action.price,
          },
        ],
      };
    }
    case "remove_product_from_cart":
      return {
        ...state,
        inCart: state.inCart.filter((p) => p.id !== action.id),
      };
    case "increase_product_qty_in_cart":
      return {
        ...state,
        inCart: [
          ...state.inCart.map((item) =>
            item.id === action.id
              ? { ...item, qty: item.qty + 1 }
              : { ...item },
          ),
        ],
      };
    case "decrease_product_qty_in_cart":
      return {
        ...state,
        inCart: [
          ...state.inCart.map((item) =>
            item.id === action.id
              ? { ...item, qty: item.qty - 1 }
              : { ...item },
          ),
        ],
      };
    case "change_sort_by":
      return { ...state, sortBy: action.sortBy };
    case "change_displayed_category":
      return { ...state, category: action.category };
    case "toggle_favourite": {
      if (state.favourite.includes(action.id)) {
        return {
          ...state,
          favourite: [...state.favourite.filter((item) => item !== action.id)],
        };
      }
      return {
        ...state,
        favourite: [...state.favourite, action.id],
      };
    }
    case "place_order": {
      return {
        ...state,
        inCart: [],
        orders: [{ id: Date.now(), items: action.order }, ...state.orders],
        products: state.products,
      };
    }
    case "decrease_available_amount":
      return {
        ...state,
        products: [
          ...state.products.map((item) =>
            item.id === action.id
              ? {
                  ...item,
                  availableAmount: item.availableAmount - action.orderedAmount,
                }
              : { ...item },
          ),
        ],
      };
    case "cancel_order": {
      const getQty = (id: number): number => {
        const item = action.items.find((item) => item.id === id);
        return item ? item.qty : 0;
      };
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.orderId),
        products: [
          ...state.products.map((item) => {
            return {
              ...item,
              availableAmount: item.availableAmount + getQty(item.id),
            };
          }),
        ],
      };
    }
    default:
      return state;
  }
};
