import Hero from "../components/web/Hero";
import Aboutus from "../components/web/Aboutus";
import Services from "../components/web/services";
import Courts from "../components/web/courts"; 
import Shop from "../components/web/shop"; 
import Footer from "../components/web/Footer";

export default function Home() {
  return (
    <div >
      <Hero/>
      <Aboutus/>
      <Services/>
      <Courts/>
      <Shop/>
      <Footer/>
    </div>
  );
}