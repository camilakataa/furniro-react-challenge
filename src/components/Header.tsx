import LogoImg from '../assets/logo-furniro.png';
import LoginImg from '../assets/login-icon.png';
import CartImg from '../assets/cart-icon.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full bg-white flex py-6 justify-between flex-col gap-4 lg:pl-14 lg:pr-24 lg:flex-row lg:h-24">
        <div className='flex justify-center items-center gap-1'>
          <img className='h-8' src={LogoImg} alt="logo" />
          <h2 className='font-montserrat font-bold text-4xl'>Furniro</h2>
        </div>
        <nav className='flex items-center justify-center gap-4 lg:gap-14'>
          <Link to="/">Home</Link>
          <Link to="/Shop">Shop</Link>
          <a href="#">About</a>
          <Link to="/Contact">Contact</Link>
        </nav>
        <div className='flex items-center justify-center gap-8'>
          <img className='h-4' src={LoginImg} alt="login-icon" />
          <img className='h-5' src={CartImg} alt="cart-icon" />
        </div>
    </div>
  )
}

export default Header