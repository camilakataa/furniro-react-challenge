import Header from "../components/Header";
import Footer from "../components/Footer";
import Benefits from "../components/Benefits";
import LoginSection from "../components/LoginSection";
import Banner from "../components/Banner";

const Login = () => {
  return (
    <>
        <Header />
        <Banner namePage="Login" />
        <LoginSection />
        <Benefits />
        <Footer />
    </>
  )
}

export default Login