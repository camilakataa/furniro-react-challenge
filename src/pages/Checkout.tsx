import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Benefits from "../components/Benefits";
import BillingDetails from "../components/BillingDetails";

const Checkout = () => {
  return (
    <>
        <Header />
        <Banner namePage="Checkout" />
        <BillingDetails />
        <Benefits />
        <Footer />
    </>
  )
}

export default Checkout