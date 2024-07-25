import CardProduct from "./CardProduct";
import ShowMoreButton from "./UI/ShowMoreButton";

const ProductsSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 p-10">
        <h2 className="font-bold text-[40px]">Our Products</h2>
        <div className="flex flex-wrap justify-center items-center gap-6 px-6">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
        <ShowMoreButton />
      </div>
    </>
  );
};

export default ProductsSection;
