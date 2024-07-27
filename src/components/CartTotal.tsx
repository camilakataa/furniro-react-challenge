import TrashIcon from "../assets/trash.png";
import CheckoutButton from "./UI/CheckoutButton";


import Sofa from '../assets/sofas (1).png'

const CartTotal = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 py-20 px-4 lg:flex-row lg:items-start">
      <div className="lg:w-[817px]">
        <div className="bg-beige-light h-[55px] flex items-center justify-evenly mb-10">
          <p className="font-semibold">Product</p>
          <p className="font-semibold">Price</p>
          <p className="font-semibold">Quantity</p>
          <p className="font-semibold">Subtotal</p>
        </div>
        <div className="flex items-center gap-8 justify-between">
          <img className="h-[105px] w-[105px] border-solid border-6 border-beige-light rounded-lg" src={Sofa} alt="product" />
          <p>Asgaard sofa</p>
          <p>R$ 2500</p>
          <div className="border-solid border rounded-lg p-3 md:w-[106px] md:flex md:justify-between md:px-3">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <p>R$2500</p>
          <img className="h[28px] w-[28px]" src={TrashIcon} alt="trash icon" />
        </div>
      </div>
      <div className="bg-beige-light w-[390px] flex flex-col items-center mt-10 pb-20 lg:mt-0">
        <h2 className="font-semibold text-[32px] pt-4 pb-8">Cart Totals</h2>
        <div className="w-full flex justify-between items-center px-20 pb-6">
          <p>Subtotal</p>
          <p className="text-gray-400 font-light">R$ 2500</p>
        </div>
        <div className="w-full flex justify-between px-20 pb-6">
          <p>Total</p>
          <p className="text-yellow-dark text-[20px]">R$ 2500</p>
        </div>
        <CheckoutButton />
      </div>
    </div>
  );
};

export default CartTotal;
