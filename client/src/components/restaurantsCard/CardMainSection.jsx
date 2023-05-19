// rating stars
import RatingStars from "react-rating-stars-component";
// /components/unify/genresbutton
import GenresButton from "../unify/Genresbutton";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import ChevronRight from "../icon/ChevronRight";

export default function CardMainSection() {
  useEffect(() => {
    Aos.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 700,
      easing: "ease",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <div className="bg-gradient">
      <section className="container mx-auto py-20">
        <div className="  items-center flex justify-around " data-aos="fade-up">
          {/* restaurant about */}
          <div>
            {/* breadcrumb */}
            <ol className="inline-flex items-center ">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-amber-500 "
                >
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight />
                  <Link
                    to="/restaurants"
                    className=" text-sm font-medium text-gray-700 hover:text-amber-500  "
                  >
                    Restaurants
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <ChevronRight />
                  <span className=" text-sm font-medium text-gray-500  dark:text-gray-400">
                    Kennington Lane Cafe
                  </span>
                </div>
              </li>
            </ol>
            {/* restaurant title */}
            <div className="flex my-5 items-center">
              <img
                className="  rounded-lg  "
                src="https://bslthemes.com/html/quickeat/assets/img/logos-2.jpg"
                alt=""
              />
              <h3 className="text-5xl w-[19rem] ml-5  font-bold  ">
                Kennington Lane Cafe
              </h3>
            </div>
            {/* rating stars */}
            <div className="my-5">
              <p className="text-gray-600 ">Rate:</p>
              <RatingStars
                count={5}
                value={5}
                size={20}
                activeColor="#ffa500"
              />
            </div>
            {/* Genresbutton */}
            <div className="my-5">
              <p className="text-gray-600 uppercase ">Cuisines:</p>
              <GenresButton />
            </div>
            {/* restaurant text */}
            <div className="my-5">
              <p className="text-gray-600  uppercase ">FEATURES:</p>
              <p className="text-[#787878;] w-[29rem]">
                Lorem mollis aliquam ut porttitor. Nisl rhoncus mattis rhoncus
                urna neque. Pharetra sit amet aliquam id. Urna nec tincidunt
                praesent semper feugiat nibh.
              </p>
            </div>
          </div>
          {/* restaurant image */}
          <img
            src="https://assets.architecturaldigest.in/photos/63733ec2a2dd6ea6560eb6da/1:1/w_1080,h_1080,c_limit/Ditas%20Interior%20Image%20-%201%20(8).png"
            className="rounded-3xl drop-shadow-md shadow-xl    "
            width="40%"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}
