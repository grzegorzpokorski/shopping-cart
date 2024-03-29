import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { FaTrash } from "react-icons/fa";
import { toast } from "sonner";
import {
  ProductInCartType,
  useShoppingCartContext,
} from "../../../providers/ShoppingCartProvider";
import { formatCurrency } from "../../../utils/formatCurrency";
import { getTotalPrice } from "../../../utils/getTotalPrice";
import { Button } from "../../atoms/button/Button";

type OrderProps = {
  id: number;
  items: ProductInCartType[];
};

export const Order = ({ id, items }: OrderProps) => {
  const { t } = useTranslation();
  const { dispatch } = useShoppingCartContext();

  return (
    <li className="flex flex-col gap-4 justify-between border-2 border-zinc-200 bg-white p-4 rounded">
      <div className="flex flex-wrap gap-1.5 justify-between items-center border-b-2 pb-3 text-sm">
        <p>
          {new Date(id).toLocaleDateString(i18next.language, {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <Button
          variant="red"
          onClick={() => {
            const confirmation = confirm(`${t("cancel_order_confirmation")}`);

            if (confirmation) {
              dispatch({
                type: "cancel_order",
                orderId: id,
                items: items,
              });
              toast.success(t("cancel_order_info"));
            }
          }}
          aria-label={`${t("cancel_order")}`}
        >
          {t("button.cancel_order")}
          <FaTrash />
        </Button>
      </div>
      <ul className="flex flex-col divide-y divide-gray-200 -my-2">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
      <div className="flex justify-between border-t-2 pt-3 font-bold text-sm">
        <p>{t("order_value")}</p>
        <p>{formatCurrency(getTotalPrice(items))}</p>
      </div>
    </li>
  );
};

const Item = ({ id, qty, price }: ProductInCartType) => {
  const { shoppingCartState } = useShoppingCartContext();
  const product = shoppingCartState.products.find((p) => p.id === id);

  if (product) {
    return (
      <li className="py-3">
        <div className="flex flex-row items-center gap-4 items-center">
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded border border-gray-200">
            <img
              src={product.image.url}
              alt={product.image.alt}
              height={product.image.height}
              width={product.image.width}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-900 w-full">
            <h3 className="font-bold">{product.name}</h3>
            <div className="flex flex-row justify-between items-center">
              <p className="text-sm text-gray-500">
                {qty} x {formatCurrency(price)}
              </p>
              <p className="text-sm text-start">{formatCurrency(price)}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

  return null;
};
