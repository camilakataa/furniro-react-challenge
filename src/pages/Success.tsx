import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Benefits from "../components/Benefits";

const Success = () => {
    return (
        <>
            <Header />
            <Banner namePage="Success" />
            <div className="w-full h-[600px] flex flex-col justify-center items-center">
                <h2 className="text-[40px] font-bold text-yellow-dark py-4">Thank you for visiting Furniro!</h2>
                <p className="text-[20px] font-bold">We are glad to have you here</p>
            </div>
            <Benefits />
            <Footer />
        </>
      )
}

export default Success