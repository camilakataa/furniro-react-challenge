import { useState, useEffect } from "react";
import axios from "axios";
import DeleteIcon from "../assets/deleteIcon.png";
import { IProducts } from "../types/CartTypes";

interface isOpenType {
  isOpen: boolean;
  setModalOpen: React.MouseEventHandler;
  categories: string[];
  setSelectedCategory: string;
}

const ModalCategories: React.FC<isOpenType> = ({
  isOpen,
  setModalOpen,
  categories,
  setSelectedCategory
}) => {
  const [products, setProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/`)
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleOnClick = () => {
    setSelectedCategory("")
  }

  if (isOpen) {
    return (
      <div className="w-full h-full z-10">
        <div className="absolute md:left-60">
          <div className="bg-beige-light border-solid border w-[360px] p-10 flex flex-col">
            <div className="border-solid border-x-0 border-t-0 border-b border-gray-400 pb-4 flex justify-between items-center">
              <h2 className="font-semibold text-[18px]">
                Filter by Categories
              </h2>
              <img
                className="h-[20px] w-[20px]"
                onClick={setModalOpen}
                src={DeleteIcon}
                alt="close icon"
              />
            </div>
            <div className="pt-4">
              <h3 className="pb-2">Select Category:</h3>
              <ul>
                <li onClick={() => handleOnClick()} className="font-light text-[14px] hover:text-yellow-dark cursor-pointer">All</li>
                {categories.map((category, index) => (
                  <li
                    onClick={() => setSelectedCategory(category)}
                    className="font-light text-[14px] hover:text-yellow-dark cursor-pointer"
                    key={index}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ModalCategories;
