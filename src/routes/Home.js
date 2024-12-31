import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import HomeImg from "../assets/home.jpg"
import Event from "../components/Event"
import Training from "../components/Training";

function Home () {
    return(
        <>
        <Navbar />
        <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Dive into AdvenRush excitement!"
        text="Explore AdvenRush's exhilarating adventures and adrenaline-pumping races. 
        Immerse yourself in our dynamic website, featuring stunning visuals and detailed event information. 
        Join the excitement and start your adventure with AdvenRush today!"
        /> 
        <Event /> 
        <Training /> 
        </>
    );
}

export default Home;