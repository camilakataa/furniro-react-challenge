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
  const [productCategories, setProductCategories] = useState<string[]>([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/`)
      .then(function (response) {
        setProducts(response.data);
        const currentProduct = response.data.find((product: IProducts) => product.id === productId);
        if (currentProduct && Array.isArray(currentProduct.tags)) {
          setProductCategories(currentProduct.tags);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.id !== productId &&
      productCategories.some((tag) => product.tags.includes(tag))
  );

  return (
    <div className="flex flex-col justify-center items-center py-20 border-solid border-x-0 border-b-0 border-t border-gray-300">
      <h2 className="font-medium text-[36px] pb-14">Related Products</h2>
      <ul className="flex flex-wrap justify-center items-center gap-6 pb-10">
        { filteredProducts?.slice(0, 4).map((item: IProducts) => {
          return (
            <li key={item.id}>
              <CardProduct id={item.id} />
            </li>
          )
        }) }
      </ul>
      <ShowMoreButton />
    </div>
  );
};

export default RelatedProducts;
