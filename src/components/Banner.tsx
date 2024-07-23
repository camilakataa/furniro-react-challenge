import BannerImg from '../assets/bg-banner.png';
import LogoImg from '../assets/logo-furniro.png';
import TitlePage from './UI/TitlePage';
import ArrowIcon from '../assets/arrow-right.png';
import { Link } from 'react-router-dom';

interface NameProp {
    namePage: string;
}

const Banner: React.FC<NameProp> = ({namePage}) => {
  return (
    <div
    className='bg-cover bg-center w-full h-[316px] flex flex-col justify-center items-center gap-2'
    style={{backgroundImage: `url(${BannerImg})`}}
    >
        <img className='h-[32px]' src={LogoImg} alt="logo" />
        <TitlePage name={namePage}/>
        <div className='flex gap-3'>
            <Link to="/"><p className='font-medium'>Home</p></Link>
            <img src={ArrowIcon} alt="arrow" />
            <p className='font-normal'>{namePage}</p>
        </div>
    </div>
  )
}

export default Banner