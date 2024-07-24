import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerDiscover from "../components/BannerDiscover";
import Browse from "../components/Browse";
import ShareSection from "../components/ShareSection";
import ProductsSection from "../components/ProductsSection";

const Home = () => {
  return (
    <>
        <Header />
        <BannerDiscover />
        <Browse />
        <ProductsSection />
        <ShareSection />
        <Footer />
    </>
  )
}

export default Home