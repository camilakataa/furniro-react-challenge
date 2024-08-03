import ClearCart from "../assets/clear-cart.png";
import DeleteIcon from "../assets/deleteIcon.png";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

interface isOpenType {
  isOpen: boolean;
  setModalOpen: React.MouseEventHandler;
}

const ModalCart: React.FC<isOpenType> = ({ isOpen, setModalOpen }) => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const priceDiscount = (price: number, discount: number): number => {
    return price * (1 - discount);
  };

  const subtotal = (price: number, qty: number): number => {
    return price * qty;
  };

  const cartTotal = (): number => {
    return cartItems.reduce(
      (total, item) =>
        total +
        subtotal(
          priceDiscount(item.normalPrice, item.discountPercentage),
          item.qty
        ),
      0
    );
  };

  if (isOpen) {
    return (
      <div className="w-full h-full fixed bg-[rgb(0,0,0,0.5)] z-10">
        <div className="absolute top-0 right-0">
          <div className="bg-white w-[417px] h-[580px] p-8 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <h2 className="text-[24px] font-semibold border-solid border-x-0 border-t-0 border-b border-gray-400 pb-6">
                Shopping Cart
              </h2>
              <button onClick={() => clearCart()}>
                <img className="h-[19px]" src={ClearCart} alt="trash" />
              </button>
            </div>
            <div className="h-full flex flex-col justify-between py-8">
              <div className="flex flex-col justify-between">
                {cartItems.length === 0 ? (
                  <p>Carrinho Vazio</p>
                ) : (
                  <ul>
                    {cartItems.map((item) => (
                      <li
                        className="flex justify-between items-center pb-4"
                        key={item.id}
                      >
                        <img
                          className="h-[105px] w-[108px] rounded-lg"
                          src={item.images.mainImage}
                        />
                        <div>
                          <p>{item.title}</p>
                          <p>
                            <span className="font-light">{item.qty}</span> x{" "}
                            <span className="text-yellow-dark">
                              {" "}
                              {priceDiscount(
                                item.normalPrice,
                                item.discountPercentage
                              ).toFixed(2)}
                            </span>
                          </p>
                        </div>
                        <button onClick={() => removeFromCart(item.id)}>
                          <img src={DeleteIcon} alt="delete icon" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex justify-between pr-20">
                <p>Subtotal</p>
                <p className="text-yellow-dark font-semibold">R$ {cartTotal().toFixed(2)}</p>
              </div>
            </div>
            <div className="border-solid border-x-0 border-b-0 border-t border-gray-400 pt-6 flex justify-between items-center">
              <Link to="/Cart">
                <button className="border-solid border px-6 py-2 rounded-full text-[12px]">
                  Cart
                </button>
              </Link>
              <Link to="/Checkout">
                <button className="border-solid border px-6 py-2 rounded-full text-[12px]">
                  Checkout
                </button>
              </Link>
              <button
                onClick={setModalOpen}
                className="border-solid border px-6 py-2 rounded-full text-[12px]"
              >
                Close Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ModalCart;
