import Navbar from "../components/Navbar";
import Partnership from "../components/Partnership";
import Footer from "../components/Footer";
import Emailmenu from "../components/Emailmenu";
import MainSection from "../components/home/MainSection";
import HowItWorks from "../components/home/HowItWork";
import BestRestaurants from "../components/home/BestRestaurants";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainSection />
      <HowItWorks />
      <BestRestaurants />
      <Partnership />
      <Emailmenu />
      <Footer />
    </>
  );
}
