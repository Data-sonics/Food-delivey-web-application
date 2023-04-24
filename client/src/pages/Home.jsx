// /components/unify hawtsn dotor bga
import Navbar from "../components/unify/Navbar";
import Footer from "../components/unify/Footer";
// /components/home hawtsn dotor bga
import BestRestaurants from "../components/home/BestRestaurants";
import HowItWorks from "../components/home/HowItWork";
import MainSection from "../components/home/MainSection";
import Partnership from "../components/home/Partnership";

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
