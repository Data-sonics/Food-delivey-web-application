import Aos from "aos";
import { useEffect, useState } from "react";
import RatingStars from "react-rating-stars-component";
import axios from "axios"
import {Link} from "react-router-dom"

// const resCategory = [
//   {
//     id: "1",
//     imageUrl: "https://bslthemes.com/html/quickeat/assets/img/logos-2.jpg",
//     imageAlt: "",
//     title: "Kennington Lane Cafe",
//     text: "Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.",
//   },
//   {
//     id: "2",
//     imageUrl: "https://bslthemes.com/html/quickeat/assets/img/logos-1.jpg",
//     imageAlt: "",
//     title: "The Wilmington",
//     text: "Vulputate enim nulla aliquet porttitor lacus luctus. Suscipit adipiscing bibendum est ultricies integer. Sed adipiscing diam donec adipiscing tristique.",
//   },
//   {
//     id: "3",
//     imageUrl: "https://bslthemes.com/html/quickeat/assets/img/logos-3.jpg",
//     imageAlt: "",
//     title: " Kings Arms",
//     text: "Tortor at risus viverra adipiscing at in tellus. Cras semper auctor neque vitae tempus. Dui accumsan sit amet nulla facilisi. Sed adipiscing diam donec adipiscing tristique.",
//   },
//   {
//     id: "4",
//     imageUrl: "https://bslthemes.com/html/quickeat/assets/img/logos-4.jpg",
//     imageAlt: "",
//     title: "The Victoria",
//     text: "Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.",
//   },
// ];

export default function RestaurantsCategory() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/api/restaurants')
      .then(response => {
        const dataArray = Object.values(response.data)
        setData(dataArray[0]);
        console.log(dataArray)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);;
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
    <div className="grid gap-8 py-10 bg-gray-100">
      <section className="mx-auto container flex gap-16 flex-wrap  pt-16">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="flex w-[46rem]  rounded-xl bg-white p-10 shadow-xl"
              data-aos="flip-down"
            >
              <div className="">
                <img
                  src={item.img}
                  alt=""
                  className="rounded-lg w-52  "
                />
              </div>
              <div className="mx-7">
                <a href={`/restaurantsCard/${item.id}`} >
                  <h1 className="text-3xl">
                    {item.name}
                  </h1>
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
