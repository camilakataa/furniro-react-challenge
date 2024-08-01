import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardProduct from "./CardProduct";
import ShowMoreButton from "./UI/ShowMoreButton";
import { IProducts } from "../types/CartTypes";

const RelatedProducts = () => {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<IProducts[]>([]);
  const productId = Number(id);
  const [productCategory, setProductCategory] = useState<string>("");
  const [numberShow, setNumberShow] = useState<number>(4)

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/`)
      .then(function (response) {
        setProducts(response.data);

        const currentProduct = response.data.find((product: IProducts) => product.id === productId);
        if (currentProduct) {
          setProductCategory(currentProduct.category);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [productId]);

  const filteredProducts = products?.filter((product) => product.category === productCategory && product.id !== productId );

  const handleOnClick = () => {
    setNumberShow(numberShow + 4)
  }

  return (
    <div className="flex flex-col justify-center items-center py-20 border-solid border-x-0 border-b-0 border-t border-gray-300">
      <h2 className="font-medium text-[36px] pb-14">Related Products</h2>
      <ul className="flex flex-wrap justify-center items-center gap-6 pb-10">
        { filteredProducts?.slice(0, numberShow).map((item: IProducts) => {
          return (
            <li key={item.id}>
              <CardProduct id={item.id} />
            </li>
          )
        }) }
      </ul>
      <button onClick={handleOnClick}>
        <ShowMoreButton />
      </button>
    </div>
  );
};

export default RelatedProducts;
