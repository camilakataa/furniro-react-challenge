import DiningImg from '../assets/Dining.png';
import LivingImg from '../assets/Living.png';
import BedroomImg from '../assets/Bedroom.png';
import { Link } from 'react-router-dom';

const Browse = () => {
  return (
    <>
        <div className='p-14'>
            <div className='flex flex-col justify-center items-center px-2'>
                <h2 className='font-bold text-[32px]'>Browse The Range</h2>
                <p className='text-gray-400 text-[20px] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='pt-6 flex flex-col md:flex-row justify-center items-center gap-4'>
                <Link to={{
                    pathname: "/Shop",
                    
                }} >
                <div className='flex flex-col justify-center items-center pt-10'>
                    <img src={DiningImg} alt="Dining Room" />
                    <p className='text-2xl font-semibold pt-6'>Dining</p>
                </div>
                </Link>
                <Link to='/Shop'>
                <div className='flex flex-col justify-center items-center pt-10'>
                    <img src={LivingImg} alt="Living Room" />
                    <p className='text-2xl font-semibold pt-6'>Living</p>
                </div>
                </Link>
                <Link to='/Shop'>
                <div className='flex flex-col justify-center items-center pt-10'>
                    <img src={BedroomImg} alt="Bedroom" />
                    <p className='text-2xl font-semibold pt-6'>Bedroom</p>
                </div>
                </Link>
            </div>
        </div>
    </>
  )
}

export default Browse