import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CardProduct = (productId) => {
  const [products, setProducts] = useState([]);
  const { id } = productId;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/`)
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <Link to={`/SingleProduct/${products[id]?.id}`}>
        <div className="w-[285px] h-[446px] cursor-pointer hover:brightness-50">
          <div
            className="bg-cover bg-center w-[285px] h-[301px] p-4 flex justify-end gap-2"
            style={{
              backgroundImage: `url(${products[id]?.images.mainImage})`,
            }}
          >
            {products[id]?.discountPercentage ? (
              <div className="bg-highlight-pink w-[48px] h-[48px] rounded-full flex justify-center items-center text-white">
                {products[id].discountPercentage * 100}%
              </div>
            ) : (
              <div></div>
            )}
            {products[id]?.new ? (
              <div className="bg-highlight-blue w-[48px] h-[48px] rounded-full flex justify-center items-center text-white">
                New
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="w-[285px] h-[145px] bg-gray-100 p-4 flex flex-col justify-evenly">
            <h2 className="font-bold text-xl">{products[id]?.title}</h2>
            <p className="font-medium text-gray-600 text-sm">
              {products[id]?.description.short}
            </p>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-xl">
                R$ {products[id]?.salePrice}
              </p>
              <p className="font-normal text-base line-through text-gray-400">
                R$ {products[id]?.normalPrice}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardProduct;
