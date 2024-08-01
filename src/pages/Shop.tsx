import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Benefits from "../components/Benefits";
import ShopSection from "../components/ShopSection";

const Shop = () => {
  return (
    <>
        <Header />
        <Banner namePage="Shop" />
        <ShopSection />
        <Benefits />
        <Footer />
    </>
  )
}

export default Shop