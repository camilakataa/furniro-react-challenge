import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductDetails from "../components/ProductDetails";
import DescriptionSection from "../components/DescriptionSection";
import RelatedProducts from "../components/RelatedProducts";

const SingleProduct = () => {
  return (
    <>
        <Header />
        <ProductDetails />
        <DescriptionSection />
        <RelatedProducts />
        <Footer />
    </>
  )
}

export default SingleProduct