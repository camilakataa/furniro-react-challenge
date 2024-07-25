import FilterIcon from '../assets/icon-filter.png';
import FilterIcon2 from '../assets/icon-filter2.png';
import FilterIcon3 from '../assets/icon-filter3.png';

const FilterMenu = () => {
  return (
    <div className="w-full flex flex-col gap-8 bg-beige-light px-10 py-6 items-center lg:flex-row lg:justify-between xl:px-16">
        <div className='flex gap-8 items-center'>
            <img className='h-[24px]' src={FilterIcon} />
            <p>Filter</p>
            <img className='h-[24px]' src={FilterIcon2} />
            <img className='h-[24px]' src={FilterIcon3} />
            <p className='border-solid border border-y-0 border-r-0 pl-6 border-gray-400'>Showing 1-16 of 32 results</p>
        </div>
        <div className='flex items-center gap-8'>
            <p>Show</p>
            <p className='bg-white py-3 px-6 text-gray-400 text-light'>16</p>
            <p>Sort by</p>
            <p className='bg-white py-3 px-8 text-gray-400 text-light'>Default</p>
        </div>
    </div>
  )
}

export default FilterMenu