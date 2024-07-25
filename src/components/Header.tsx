import LogoImg from '../assets/logo-furniro.png';
import LoginImg from '../assets/login-icon.png';
import CartImg from '../assets/cart-icon.png';
import { Link } from 'react-router-dom';
import { auth, dbUsers } from '../services/firebaseConfig';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';

const Header = () => {

  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async(user) => {
      console.log(user);
      const docRef = doc(dbUsers, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data())
      } else {
        console.log("User is not logged in")
      }
    })
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = './';
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="w-full bg-white flex py-6 justify-between flex-col gap-4 lg:pl-14 lg:pr-24 lg:flex-row lg:h-24">
        <div className='flex justify-center items-center gap-1'>
          <img className='h-8' src={LogoImg} alt="logo" />
          <h2 className='font-montserrat font-bold text-4xl'>Furniro</h2>
        </div>
        <nav className='flex items-center justify-center gap-4 lg:gap-14'>
          <Link to="/">Home</Link>
          <Link to="/Shop">Shop</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </nav>
        <div className='flex items-center justify-center gap-8'>
          {userDetails ? (
            <>
              <p>Olá, {userDetails.firstName}!</p>
              <button onClick={handleLogout} className='border-solid border rounded-2xl p-2 text-sm hover:bg-gray-100'>Logout</button>
            </>
          ) : ( 
            <Link to="/Register"><img className='h-4' src={LoginImg} alt="login-icon" /></Link>
          )}
          <img className='h-5' src={CartImg} alt="cart-icon" />
        </div>
    </div>
  )
}

export default Header