import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Benefits from "../components/Benefits";
import FilterMenu from "../components/FilterMenu";

const Shop = () => {
  return (
    <>
        <Header />
        <Banner namePage="Shop" />
        <FilterMenu />
        <Benefits />
        <Footer />
    </>
  )
}

export default Shop