import FacebookIcon from "../assets/facebook 1.png";
import InstaIcon from "../assets/instagram 1.png";
import TwitterIcon from "../assets/twitter 1.png";
import LinkedinIcon from "../assets/linkedin 1.png";

const Footer = () => {
  return (
    <>
      <div className="w-full px-4 py-8 border-solid border-b-0 border-x-0 border-t border-gray-300 flex flex-col lg:px-20">
        <div className="mb-8 lg:flex">
          <div className="flex flex-col gap-6 mb-8 lg:mr-20 xl:mr-40">
            <h2 className="font-bold text-2xl font-montserrat">Furniro.</h2>
            <p className="font-normal text-gray-400 py-2 lg:py-[20px]">
              400 University Drive Suite 200 Coral<br></br> Gables, <br></br>FL 33134 USA
            </p>
            <div>
              <ul className="flex gap-4">
                <li className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer shadow">
                  <a href="https://www.facebook.com/" target="_blank">
                    <img className="w-3 h-3" src={FacebookIcon} alt="" />
                  </a>
                </li>
                <li className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer shadow">
                  <a href="https://instagram.com/" target="_blank">
                    <img className="w-4 h-4" src={InstaIcon} alt="" />
                  </a>
                </li>
                <li className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer shadow">
                  <a href="https://twitter.com/" target="_blank">
                    <img className="w-4 h-4" src={TwitterIcon} alt="" />
                  </a>
                </li>
                <li className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer shadow">
                  <a href="https://www.linkedin.com/" target="_blank">
                    <img className="w-4 h-4" src={LinkedinIcon} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:flex">
            <div className="pb-7 lg:mr-20">
              <h3 className="text-gray-400 pb-3 lg:pb-[50px]">Links</h3>
              <nav className="flex gap-6 font-medium lg:flex-col lg:gap-10">
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
              </nav>
            </div>
            <div className="pb-7 lg:mr-16">
              <h3 className="text-gray-400 pb-3 lg:pb-[50px]">Help</h3>
              <nav className="flex gap-4 items-center lg:flex-col lg:items-start lg:gap-10">
                <a href="#">Payment Options</a>
                <a href="#">Returns</a>
                <a href="#">Privacy Policies</a>
              </nav>
            </div>
            <div >
              <h3 className="text-gray-400 pb-3 lg:pb-[50px]">Newsletter</h3>
              <form className="flex gap-3">
                <div className="w-[200px] border-solid border-x-0 border-t-0 border-b">
                    <input className="w-[180px] text-sm font-light" type="text" placeholder="Enter Your Email Address" />
                </div>
                <button className="border-solid border-x-0 border-t-0 border-b text-sm">SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-solid border-b-0 border-x-0 border-t border-gray-200 p">
          <p className="font-normal pt-7">2023 furniro. All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
