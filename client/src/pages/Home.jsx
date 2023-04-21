import Bestrestaurants from "../components/Bestrestaurants";
import Howitworks from "../components/Howitwork";
import Mainsection from "../components/Mainsection";
import Navbar from "../components/Navbar";
import Partnership from "../components/Partnership";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Mainsection />
      <Howitworks />
      <Bestrestaurants />
      <Partnership />
      <Footer />
    </>
  );
}
