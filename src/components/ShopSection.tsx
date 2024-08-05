import { useState, useEffect } from "react";
import CardProduct from "./CardProduct";
import { IProducts } from "../types/CartTypes";
import axios from "axios";
import FilterIcon from "../assets/icon-filter.png";
import FilterIcon2 from "../assets/icon-filter2.png";
import FilterIcon3 from "../assets/icon-filter3.png";
import ModalCategories from "./ModalCategories";

const ShopSection = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const itemsPerPage = 16;
  const filteredProducts = selectedCategory ? products?.filter((product) => product.category === selectedCategory) : products
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

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

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const toggleModal = () =>{
    setOpenModal(!openModal)
  }

  const uniqueCategories = new Set(products.map((product) => product.category));

  return (
    <>
    <div>
      <div className="w-full flex flex-col gap-8 bg-beige-light px-10 py-6 items-center lg:flex-row lg:justify-between xl:px-16">
        <div className="flex gap-8 items-center">
          <img className="h-[24px]" src={FilterIcon} />
          <p>Filter</p>
          <img onClick={toggleModal} className="h-[24px]" src={FilterIcon2} />
          <img className="h-[24px]" src={FilterIcon3} />
          <p className="border-solid border border-y-0 border-r-0 pl-6 border-gray-400">
            Showing {startIndex + 1}-
            {filteredProducts.length > endIndex ? endIndex : filteredProducts.length} of{" "}
            {filteredProducts.length} results
          </p>
        </div>
        <div className="flex items-center gap-8">
          <p>Show</p>
          <p className="bg-white py-3 px-6 text-gray-400 text-light">
            {filteredProducts.length > itemsPerPage ? itemsPerPage : filteredProducts.length}
          </p>
          <p>Sort by</p>
            {filteredProducts.length === 59 ? (
              <p className="bg-white py-3 px-8 text-gray-400 text-light">
              Default
              </p>
              ) : (
                <p className="bg-white py-3 px-8 text-gray-400 text-light">
                {selectedCategory}
                </p>
              )}
        </div>
      </div>
      <ModalCategories 
      isOpen={openModal} 
      setSelectedCategory={setSelectedCategory}
      setModalOpen={() => setOpenModal(!openModal)} 
      categories={[...uniqueCategories]}
      />
      <ul className="flex flex-wrap justify-center items-center py-14 px-16 gap-6">
        {filteredProducts?.slice(startIndex, endIndex).map((item: IProducts) => {
          return (
            <li key={item.id}>
              <CardProduct id={item.id} />
            </li>
          );
        })}
      </ul>
      <div className="flex justify-center">
        <div className="flex w-[360px] justify-evenly items-center mb-20">
          {[...Array(totalPages).keys()].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`bg-beige-light w-[60px] h-[60px] rounded-lg font-medium text-[20px] ${
                currentPage === index + 1 ? "bg-yellow-dark text-white" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default ShopSection;
