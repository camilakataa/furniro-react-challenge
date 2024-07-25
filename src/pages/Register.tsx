import Header from "../components/Header";
import Footer from "../components/Footer";
import RegisterSection from "../components/RegisterSection";
import Benefits from "../components/Benefits";
import Banner from "../components/Banner";

const Register = () => {
  return (
   <>
    <Header />
    <Banner namePage="Register" />
    <RegisterSection />
    <Benefits />
    <Footer />
   </>
  )
}

export default Register;