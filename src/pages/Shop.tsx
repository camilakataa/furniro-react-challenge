import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Benefits from "../components/Benefits";
import FilterMenu from "../components/FilterMenu";
import ShopSection from "../components/ShopSection";

const Shop = () => {
  return (
    <>
        <Header />
        <Banner namePage="Shop" />
        <FilterMenu />
        <ShopSection />
        <Benefits />
        <Footer />
    </>
  )
}

export default Shop