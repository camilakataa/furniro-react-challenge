import BannerDiscoveryImg from '../assets/bg-banner-home.png'
import { Link } from 'react-router-dom'

const BannerDiscover = () => {
  return (
    <>
        <div 
        className='w-full h-[700px] bg-cover bg-center flex justify-center pt-36 md:justify-end md:pr-20'
        style={{backgroundImage: `url(${BannerDiscoveryImg})`}}>
            <div className='bg-yellow-light w-[300px] h-[430px] rounded-lg p-10 lg:w-[600px]'>
                <p className='font-semibold text-gray-600'>New Arrival</p>
                <h2 className='text-yellow-dark font-bold text-[28px] pb-4 lg:text-[52px] lg:pb-2'>Discover Our New Collection</h2>
                <p className='text-sm text-gray-500 pb-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <Link to="/Shop" >
                <button className='bg-yellow-dark text-white w-[200px] h-[70px] font-bold lg:w-[222px] cursor-pointer'>
                    BUY NOW
                </button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default BannerDiscover