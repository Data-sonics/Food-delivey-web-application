// rating stars
import RatingStars from "react-rating-stars-component";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Aos from "aos";
import axios from "axios";

export default function CardMainSection() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/restaurants/${id}`)
      .then((response) => {
        setRestaurant(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

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
            <ol class="inline-flex items-center ">
              <li class="inline-flex items-center">
                <Link
                  to="/"
                  class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-amber-500 "
                >
                  Home
                </Link>
              </li>
              <li>
                <div class="flex items-center">
                  <svg
                    aria-hidden="true"
                    class="w-6 h-6 text-gray-400"
                    fill="#ffa500"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <Link
                    to="/restaurants"
                    class="ml-1 text-sm font-medium text-gray-700 hover:text-amber-500 md:ml-2 "
                  >
                    Restaurants
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div class="flex items-center">
                  <svg
                    aria-hidden="true"
                    class="w-6 h-6 text-gray-400"
                    fill="#ffa500"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                    {restaurant.name}
                  </span>
                </div>
              </li>
            </ol>
            {/* restaurant title */}
            <div className="flex my-5 items-center">
              <img className="  rounded-lg  " src={restaurant.logo} alt="" />
              <h3 className="text-5xl w-[19rem] ml-5  font-bold  ">
                {restaurant.name}
              </h3>
            </div>
            {/* rating stars */}
            <div className="my-5">
              <p className="text-gray-600 ">Rate:</p>
              <RatingStars
                count={5}
                value={restaurant.rating}
                size={20}
                activeColor="#ffa500"
              />
            </div>
            <div className="my-5">
              <p className="text-gray-600 uppercase">Cuisines:</p>
              <p className="border border-amber-500 inline-block px-2 py-1 mr-2 rounded-lg text-amber-500 hover:bg-amber-500 hover:text-white cursor-pointer font-thin mt-1">
                {restaurant.type}
              </p>
            </div>
            {/* restaurant text */}
            <div className="my-5">
              <p className="text-gray-600  uppercase ">FEATURES:</p>
              <p className="text-[#787878;] w-[29rem]">
                {restaurant.description}
              </p>
            </div>
          </div>
          {/* restaurant image */}
          <img
            src={restaurant.coverimg}
            className="rounded-3xl drop-shadow-md shadow-xl"
            width="40%"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}
