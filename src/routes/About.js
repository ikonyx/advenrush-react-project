import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import AboutImg from "../assets/about.jpg"
import Footer from "../components/Footer";

function About () {
    return(
      <>
        <Navbar />
        <Hero
        cName="hero-mid" heroImg={AboutImg} title="About"/>
        <Footer />    
      </>
    );
}

export default About;