import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const Shop = (titlePage) => {
  return (
    <>
        <Header />
        <Banner titlePage={titlePage} />
        <Footer />
    </>
  )
}

export default Shop