import Button from "../unify/Button";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MainSection() {
  useEffect(() => {
    AOS.init({
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
    <div className="bg-gradient">
      <section className="container mx-auto">
        <div
          className=" align-middle grid justify-between  items-center md:flex py-10"
          data-aos="fade-up"
        >
          <div className="max-w-xl ">
            <div className="grid items-center gap-10 text-center">
              <h1 className="text-6xl leading-snug  font-bold  ">
                The Best Restaurants In Your Home
              </h1>
              <p className="text-gray-600 ">
                You can choose your favorite restaurant and take your favorite
                meals from home
              </p>
              <div className=" w-full">
                <Button />
              </div>
            </div>
          </div>

          <div className="">
            <img
              src="https://bslthemes.com/html/quickeat/assets/img/photo-1.png"
              alt="courierman"
              className="object-cover w-full h-full"
              data-aos="fade-up"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
