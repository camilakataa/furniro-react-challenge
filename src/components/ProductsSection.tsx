import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import ShowMoreButton from "./UI/ShowMoreButton";
import axios from "axios";

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const sortedProducts = products.sort(function(a, b) {
    if(a.sku > b.sku) {
      return -1;
    } if (a.sku < b.sku) {
      return 1;
    } else {
      return 0;
    }
  });

  useEffect(() => {
    axios
    .get('http://localhost:3000/products')
    .then( function (response) {
      setProducts(response.data);
      setLoading(false);
    })
    .catch(function (error) {
      console.log(error);
      setLoading(false);
    })
  }, []);

  if(loading) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 p-10">
        <h2 className="font-bold text-[40px]">Our Products</h2>
        <div >
          <ul className="flex flex-wrap justify-center items-center gap-6 px-6">
            {sortedProducts
            .slice(0, 12)
            .map((product, index) => {
              return (<li key={index}>
                <CardProduct id={product.id} />
              </li>)
            }
            )}
          </ul>
        </div>
        <ShowMoreButton />
      </div>
    </>
  );
};

export default ProductsSection;
