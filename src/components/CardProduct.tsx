import Image from '../assets/Bedroom.png'

const CardProduct = () => {
  return (
    <>
        <div 
        className='w-[285px] h-[446px] cursor-pointer hover:brightness-50'>
            <div
            className='bg-cover bg-center w-[285px] h-[301px] p-4 flex justify-end gap-2'
            style={{backgroundImage: `url(${Image})`}}
            >
                <div className='bg-highlight-pink w-[48px] h-[48px] rounded-full flex justify-center items-center text-white'>-30%</div>
                <div className='bg-highlight-blue w-[48px] h-[48px] rounded-full flex justify-center items-center text-white'>New</div>
            </div>
            <div className='w-[285px] h-[145px] bg-gray-100 p-4 flex flex-col justify-evenly'>
                <h2 className='font-semibold text-2xl'>Syltherine</h2>
                <p className='font-medium text-gray-600 text-base'>Stylish cafe chair</p>
                <div className='flex justify-between'>
                    <p className='font-semibold text-xl'>R$ 2.500</p>
                    <p className='font-normal text-base line-through text-gray-400'>R$ 3.500</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardProduct