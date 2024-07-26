import { useParams } from "react-router-dom";
import ArrowIcon from "../assets/arrow-right.png";
import { useEffect, useState } from "react";
import axios from "axios";
import AddToCartButton from "./UI/AddToCartButton";
import StarIcon from "../assets/star.png";
import FacebookIcon from "../assets/icon-facebook.png";
import LinkedinIcon from "../assets/icon-linkedin.png";
import TwitterIcon from "../assets/icon-twitter.png";

const ProductDetails = (props) => {
  const { id } = useParams() || props;
  const [products, setProducts] = useState([]);

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
      <div className="flex bg-beige-light w-full p-8 lg:h-[100px] lg:px-12">
        <div className="flex gap-6 items-center">
          <p className="font-light">Home</p>
          <img className="h-6" src={ArrowIcon} alt="arrow-right" />
          <p className="font-light">Shop</p>
          <img className="h-6" src={ArrowIcon} alt="arrow-right" />
          <p className="font-semibold border-solid border-y-0 border-r-0 border-l border-gray-400 pl-8">
            {products[id]?.title}
          </p>
        </div>
      </div>
      <div className="lg:flex xl:gap-16 xl:px-16">
        <div>
          <div className="flex flex-col p-5 justify-center items-start gap-4 md:flex-row">
            <ul className="flex gap-2 md:flex-col md:items-start">
              {products[id]?.images.gallery.map((image, index) => {
                return (
                  <li
                    key={index}
                    className="h-[80px] w-[76px] bg-cover border-solid border-4 border-beige-light rounded-lg"
                    style={{ backgroundImage: `url(${image})` }}
                  ></li>
                );
              })}
            </ul>
            <div
              className="h-[400px] w-[320px] lg:h-[500px] lg:w-[423px] bg-cover bg-center border-solid border-4 border-beige-light rounded-lg"
              style={{
                backgroundImage: `url(${products[id]?.images.mainImage})`,
              }}
            ></div>
          </div>
        </div>
        <div className="p-10 xl:w-[600px]">
          <h2 className="font-normal text-[42px]">{products[id]?.title}</h2>
          {products[id]?.salesPrice ? (
            <p className="text-[24px] text-gray-400 pb-4">
              R$ {products[id]?.salesPrice}
            </p>
          ) : (
            <p className="text-[24px] text-gray-400 pb-4">
              R$ {products[id]?.normalPrice}
            </p>
          )}
          <div className="flex pb-4">
            <div className="pr-4 flex gap-3">
              {products[id]?.rating}
              <img className="h-[20px]" src={StarIcon} alt="star" />
            </div>
            <p className="font-light text-sm text-gray-400 border-solid border border-y-0 border-r-0 pl-5">
              5 Customers Review
            </p>
          </div>
          <p className="font-normal text-sm pb-4 text-justify">
            {products[id]?.description.long}
          </p>
          <div>
            <p className="font-light text-sm text-gray-400">Size</p>
            <div>
              <ul className="flex gap-4 py-4">
                {products[id]?.sizes.map((size, index) => {
                  return (
                    <li
                      className="h-[30px] w-[30px] bg-beige-light flex justify-center items-center font-normal text-[13px] rounded-md"
                      key={index}
                    >
                      {size}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div>
            <p className="font-light text-sm text-gray-400">Color</p>
            <div>
              <ul className="flex gap-3">
                {products[id]?.colors.map((color, index) => {
                  return (
                    <li
                      className="h-[30px] w-[30px] rounded-full my-4 border-solid border border-beige-light"
                      style={{ backgroundColor: `${color.hex}` }}
                      key={index}
                    ></li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex items-center pt-4 pb-10 border-solid border-x-0 border-t-0 border-b border-gray-300 gap-4">
            <div className="border-solid border rounded-lg border-gray-400 h-[64px] w-[123px] flex justify-between items-center px-3 ">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <AddToCartButton />
          </div>
          <div className="py-8">
            <div className="flex items-center gap-3 pb-3">
              <p className="text-gray-400 font-light">SKU: </p>
              <p className="text-gray-400 font-light">{products[id]?.sku}</p>
            </div>
            <div className="flex items-center gap-3 pb-3">
              <p className="text-gray-400 font-light">Category:</p>
              <p className="text-gray-400 font-light">
                {products[id]?.category}
              </p>
            </div>
            <div className="flex items-center gap-3 pb-3">
              <p className="text-gray-400 font-light pr-4">Tags:</p>
              <ul className="flex items-center flex-wrap gap-2">
                {products[id]?.tags.map((tag, index) => {
                  return (
                    <li className="text-gray-400 font-light" key={index}>
                      {tag},
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-gray-400 font-light">Share:</p>
              <div className="flex items-center gap-6">
                <a href="https://www.facebook.com/" target="_blank">
                  <img src={FacebookIcon} alt="facebook icon" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                  <img src={LinkedinIcon} alt="facebook icon" />
                </a>
                <a href="https://twitter.com/" target="_blank">
                  <img src={TwitterIcon} alt="facebook icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
