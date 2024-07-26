import CardProduct from "./CardProduct";
import ShowMoreButton from "./UI/ShowMoreButton";

const RelatedProducts = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20 border-solid border-x-0 border-b-0 border-t border-gray-300">
      <h2 className="font-medium text-[36px]">Related Products</h2>
      <div className="flex flex-wrap justify-center items-center gap-6 pb-10">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <ShowMoreButton />
    </div>
  );
};

export default RelatedProducts;
