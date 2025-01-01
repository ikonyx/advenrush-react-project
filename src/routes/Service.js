import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import ServiceImg from "../assets/service.jpg"
import Footer from "../components/Footer";

function Service () {
    return(
      <>
        <Navbar />
        <Hero
        cName="hero-mid" heroImg={ServiceImg} title="Service"/>
        <Footer /> 
      </>
    );
}

export default Service;