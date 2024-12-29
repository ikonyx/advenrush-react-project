import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import ServiceImg from "../assets/service.jpg"

function Service () {
    return(
      <>
        <Navbar />
        <Hero
        cName="hero-mid" heroImg={ServiceImg} title="Service"/>
      </>
    );
}

export default Service;