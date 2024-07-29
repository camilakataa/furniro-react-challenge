import TrashIcon from "../assets/trash.png";
import CheckoutButton from "./UI/CheckoutButton";
import { useCart } from "../context/CartContext";

const CartTotal: React.FC = () => {
  const { cartItems, removeFromCart, updateItemQuantity } = useCart();

  const priceDiscount = (price: number, discount: number): number => {
    return price * (1 - discount);
  };

  const subtotal = (price: number, qty: number): number => {
    return price * qty;
  };

  const cartTotal = (): number => {
    return cartItems.reduce((total, item) => total + subtotal(priceDiscount(item.normalPrice, item.discountPercentage), item.qty), 0)
  }

  const handleDecreaseQty = (id: number, qty: number) => {
    if(qty > 1) {
      updateItemQuantity(id, qty - 1)
    }
  }

  const handleIncreaseQty = (id: number, qty: number) => {
    updateItemQuantity(id, qty + 1)
  }

  return (
    <div className="flex flex-col justify-center items-center gap-10 py-20 px-4 lg:flex-row lg:items-start">
      <div className="lg:w-[817px]">
        <div className="bg-beige-light h-[55px] flex items-center justify-evenly mb-10 pl-24">
          <p className="font-semibold">Product</p>
          <p className="font-semibold">Price</p>
          <p className="font-semibold">Quantity</p>
          <p className="font-semibold">Subtotal</p>
        </div>
        {cartItems.length === 0 ? (
          <p>Carrinho Vazio</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li
                className="flex items-center gap-8 justify-between pb-4"
                key={item.id}
              >
                <img
                  className="h-[105px] w-[105px] border-solid border-6 border-beige-light rounded-lg"
                  src={item.images.mainImage}
                  alt="product"
                />
                <p>{item.title}</p>
                <p className="flex">
                  R${" "}
                  {priceDiscount(
                    item.normalPrice,
                    item.discountPercentage
                  ).toFixed(2)}
                </p>
                <div className="border-solid border rounded-lg p-3 md:w-[106px] md:flex md:justify-between md:px-3">
                  <button onClick={() => handleDecreaseQty(item.id, item.qty)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => handleIncreaseQty(item.id, item.qty)}>+</button>
                </div>
                <p>
                  R${" "}
                  {subtotal(
                    priceDiscount(item.normalPrice, item.discountPercentage),
                    item.qty
                  ).toFixed(2)}
                </p>
                <img
                  onClick={() => removeFromCart(item.id)}
                  className="h[28px] w-[28px]"
                  src={TrashIcon}
                  alt="trash icon"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="bg-beige-light w-[390px] flex flex-col items-center mt-10 pb-20 lg:mt-0">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center">
            <h2 className="font-semibold text-[32px] pt-4 pb-8">Cart Totals</h2>
            <div className="w-full flex justify-between items-center pb-6">
              <p>Subtotal</p>
              <p className="text-gray-400 font-light">R$ 0</p>
            </div>
            <div className="w-full flex justify-between pb-6">
              <p>Total</p>
              <p className="text-yellow-dark text-[20px]">R$ 0</p>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="font-semibold text-[32px] pt-4 pb-8">Cart Totals</h2>
            <div>
              <ul>
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="w-full flex justify-between items-center pb-6"
                  >
                    <p>Subtotal</p>
                    <p className="text-gray-400 font-light">
                      R${" "}
                      {subtotal(
                        priceDiscount(
                          item.normalPrice,
                          item.discountPercentage
                        ),
                        item.qty
                      ).toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full flex justify-between pb-6">
              <p>Total</p>
              <p className="text-yellow-dark text-[20px]">R$ {cartTotal().toFixed(2)}</p>
            </div>
          </div>
        )}
        <CheckoutButton />
      </div>
    </div>
  );
};

export default CartTotal;
