// /components/home hawtsn dotor bga
import BestRestaurants from "../components/home/BestRestaurants";
import HowItWorks from "../components/home/HowItWork";
import MainSection from "../components/home/MainSection";
import Partnership from "../components/home/Partnership";
import Emailmenu from "../components/home/Emailmenu";

export default function Home() {
  return (
    <>
      <MainSection />
      <HowItWorks />
      <BestRestaurants />
      <Partnership />
      <Emailmenu />
    </>
  );
}
