import Aos from "aos";
import axios from "axios";
import { useEffect, useState } from "react";
import RatingStars from "react-rating-stars-component";

export default function RestaurantsCategory() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/restaurants`)
      .then((response) => {
        const dataArray = Object.values(response.data);
        setData(dataArray[0]);
        console.log(dataArray);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
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
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <div className="grid gap-8 py-20 bg-gray-100">
      <section className="mx-auto container flex gap-16 flex-wrap  ">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="flex w-[46rem]  rounded-xl bg-white p-10 shadow-xl"
              data-aos="flip-down"
            >
              <div className="">
                <img src={item.logo} alt="" className="rounded-lg w-52  " />
              </div>
              <div className="mx-7">
                <a href={`/restaurantsCard/${item.id}`}>
                  <h1 className="text-3xl">{item.name}</h1>
                </a>
                <RatingStars
                  count={5}
                  value={item.rating}
                  size={20}
                  activeColor="#FFA500"
                />
                <div className="grid gap-5 ">
                  <div>
                    <p className="border border-amber-500 inline-block px-2 py-1 mr-2 rounded-lg text-amber-500 hover:bg-amber-500 hover:text-white cursor-pointer font-thin mt-1">
                      {item.type}
                    </p>
                  </div>
                  <p className="font-thin  ">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
