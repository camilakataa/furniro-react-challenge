import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Benefits from "../components/Benefits";
import ContactSection from "../components/ContactSection";

const Contact = () => {
  return (
    <>
        <Header />
        <Banner namePage="Contact" />
        <ContactSection />
        <Benefits />
        <Footer />
    </>
  )
}

export default Contact