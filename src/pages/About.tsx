import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Benefits from "../components/Benefits";
import ShareSection from "../components/ShareSection";

const About = () => {
  return (
    <>
        <Header />
        <Banner namePage="About" />
        <ShareSection />
        <Benefits />
        <Footer />
    </>
  )
}

export default About