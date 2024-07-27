import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Benefits from "../components/Benefits";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  return (
    <>
        <Header />
        <Banner namePage="Cart" />
        <CartTotal />
        <Benefits />
        <Footer />
    </>
  )
}

export default Cart