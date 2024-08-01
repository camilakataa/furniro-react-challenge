import { useState, useEffect } from "react";
import CardProduct from "./CardProduct";
import { IProducts } from "../types/CartTypes";
import axios from "axios";
import FilterIcon from '../assets/icon-filter.png';
import FilterIcon2 from '../assets/icon-filter2.png';
import FilterIcon3 from '../assets/icon-filter3.png';

const ShopSection = () => {
  const [products, setProducts] = useState<IProducts[]>([])
  const [numberShowItens, setNumberShowItens] = useState<number>(16)
  
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


  return (
    <div>
      <div className="w-full flex flex-col gap-8 bg-beige-light px-10 py-6 items-center lg:flex-row lg:justify-between xl:px-16">
        <div className='flex gap-8 items-center'>
            <img className='h-[24px]' src={FilterIcon} />
            <p>Filter</p>
            <img className='h-[24px]' src={FilterIcon2} />
            <img className='h-[24px]' src={FilterIcon3} />
            <p className='border-solid border border-y-0 border-r-0 pl-6 border-gray-400'>Showing 1-16 of {products.length} results</p>
        </div>
        <div className='flex items-center gap-8'>
            <p>Show</p>
            <p className='bg-white py-3 px-6 text-gray-400 text-light'>{numberShowItens}</p>
            <p>Sort by</p>
            <p className='bg-white py-3 px-8 text-gray-400 text-light'>Default</p>
        </div>
    </div>
      <ul className="flex flex-wrap justify-center items-center py-14 px-16 gap-6">
        { products?.slice(0, numberShowItens).map((item: IProducts) => {
          return (
            <li key={item.id}>
              <CardProduct id={item.id} />
            </li>
        )
        })}
      </ul>
        <div>
        </div>
    </div>
  )
}

export default ShopSection