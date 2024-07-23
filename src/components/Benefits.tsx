import TrophyImg from '../assets/trophy 1.png';
import VerifyImg from '../assets/guarantee.png';
import ShippingImg from '../assets/shipping.png';
import SupportImg from '../assets/customer-support.png'

const Benefits = () => {
  return (
    <>
        <div className='bg-beige-light w-full px-8 flex flex-col justify-center gap-10 py-14 lg:flex-row lg:h-[270px] lg:items-center'>
            <div className='flex'>
                <img className='h-[60px] pr-2' src={TrophyImg} alt="Trophy Icon" />
                <div>
                    <h2 className='font-semibold text-2xl'>High Quality</h2>
                    <p className='font-medium text-gray-500 text-xl'>Crafted from top materials</p>
                </div>
            </div>
            <div className='flex'>
                <img className='h-[60px] pr-2' src={VerifyImg} alt="Trophy Icon" />
                <div>
                    <h2 className='font-semibold text-2xl'>Warranty Protection</h2>
                    <p className='font-medium text-gray-500 text-xl'>Over 2 years</p>
                </div>
            </div>
            <div className='flex'>
                <img className='h-[60px] pr-2' src={ShippingImg} alt="Trophy Icon" />
                <div>
                    <h2 className='font-semibold text-2xl'>Free Shipping</h2>
                    <p className='font-medium text-gray-500 text-xl'>Orders over 150 $</p>
                </div>
            </div>
            <div className='flex'>
                <img className='h-[60px] pr-2' src={SupportImg} alt="Trophy Icon" />
                <div>
                    <h2 className='font-semibold text-2xl'>24 / 7 Support</h2>
                    <p className='font-medium text-gray-500 text-xl'>Dedicated support</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Benefits