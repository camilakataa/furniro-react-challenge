import LogoImg from "../assets/logo-furniro.png";
import LoginImg from "../assets/login-icon.png";
import CartImg from "../assets/cart-icon.png";
import { Link } from "react-router-dom";
import { auth, dbUsers } from "../services/firebaseConfig";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useCart } from "../context/CartContext";
import ModalCart from "./ModalCart";

const Header = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { cartItems } = useCart();

  const getTotalItems = (): number => {
    return cartItems.reduce((total, item) => total + item.qty, 0);
  }

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(dbUsers, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "./";
    } catch (error) {
      console.log(error.message);
    }
  };

  const toggleModal = () =>{
    setOpenModal(!openModal)
  }

  return (
    <>
    <ModalCart isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>
    <div className="w-full bg-white flex py-6 justify-between flex-col gap-4 lg:pl-14 lg:pr-24 lg:flex-row lg:h-24">
      <div className="flex justify-center items-center gap-1">
        <img className="h-8" src={LogoImg} alt="logo" />
        <h2 className="font-montserrat font-bold text-4xl">Furniro</h2>
      </div>
      <nav className="flex items-center justify-center gap-4 lg:gap-14">
        <Link to="/">Home</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
      <div className="flex items-center justify-center gap-8">
        {userDetails ? (
          <>
            <p>Olá, {userDetails.firstName}!</p>
            <button
              onClick={handleLogout}
              className="border-solid border rounded-2xl p-2 text-sm hover:bg-gray-100"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/Register">
            <img className="h-4" src={LoginImg} alt="login-icon" />
          </Link>
        )}
        {cartItems.length === 0 ? (
          <div onClick={toggleModal} className="flex">
            <img className="h-5 " src={CartImg} alt="cart-icon" />
          </div>
        ) : (
          <div onClick={toggleModal} className="flex">
            <img className="h-5 " src={CartImg} alt="cart-icon" />
            <div className="text-[12px] w-[18px] h-[18px] bg-red-600 rounded-full text-center text-white">
              {getTotalItems()}
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Header;
