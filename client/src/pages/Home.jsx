// /components/unify folder dotor bga
import Navbar from "../components/unify/Navbar";
import Footer from "../components/unify/Footer";
// /components/home folder dotor bga
import HowItWorks from "../components/home/HowItWork";
import MainSection from "../components/home/MainSection";
import Partnership from "../components/home/Partnership";
import EmailMenu from "../components/home/Emailmenu";
// /components/unify folder dotor bga

import RestaurantsCategory from "../components/unify/RestaurantsCategory";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainSection />
      <HowItWorks />
      <RestaurantsCategory />
      <Partnership />
      <EmailMenu />
      <Footer />
    </>
  );
}
