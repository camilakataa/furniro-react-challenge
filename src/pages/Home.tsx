import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerDiscover from "../components/BannerDiscover";
import Browse from "../components/Browse";
import ShareSection from "../components/ShareSection";
import ProductsSection from "../components/ProductsSection";
import InspirationSection from "../components/InspirationSection";

const Home = () => {
  return (
    <>
        <Header />
        <BannerDiscover />
        <Browse />
        <ProductsSection />
        <InspirationSection />
        <ShareSection />
        <Footer />
    </>
  )
}

export default Home