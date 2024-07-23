import BannerImg from '../assets/bg-banner.png';
import LogoImg from '../assets/logo-furniro.png';
import TitlePage from './UI/TitlePage';
import ArrowIcon from '../assets/arrow-right.png'

const Banner = (titlePage) => {
  return (
    <div
    className='bg-cover bg-center w-full h-[316px] flex flex-col justify-center items-center gap-2'
    style={{backgroundImage: `url(${BannerImg})`}}
    >
        <img className='h-[32px]' src={LogoImg} alt="logo" />
        <TitlePage titlePage={titlePage} />
        <div className='flex gap-3'>
            <p className='font-medium'>Home</p>
            <img src={ArrowIcon} alt="arrow" />
            <p className='font-normal'>Shop</p>
        </div>
    </div>
  )
}

export default Banner