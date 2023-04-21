import BestRestaurants from "../components/home/BestRestaurants";
import HowItWorks from "../components/home/HowItWork";
import MainSection from "../components/home/MainSection";
import Navbar from "../components/home/Navbar";
import Partnership from "../components/home/Partnership";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainSection />
      <HowItWorks />
      <BestRestaurants />
      <Partnership />
      <Footer />
    </>
  );
}
