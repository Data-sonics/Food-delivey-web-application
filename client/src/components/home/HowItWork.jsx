import Aos from "aos";
import { useEffect } from "react";

export default function Howitworks() {
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
    <section className="container mx-auto my-10">
      <div className="text-center grid gap-5 ">
        <h1 className="text-5xl font-bold">How it works</h1>
        <p className=" mx-auto text-gray-600  font-medium">
            How Quick Eat really works?  Is there any instructions
        </p>
        <div className="grid justify-center items-center  gap-20 md:flex md:justify-between">
          <div data-aos="flip-up" className="w-full max-w-sm">
            <img
              src="https://bslthemes.com/html/quickeat/assets/img/illustration-1.png"
              className="w-full"
              alt="select"
            />
            <p className="text-2xl text-center ">
              <span className="text-5xl  text-gray-400">01</span>
              Select Restaurant
            </p>
            <p className=" text-center text-gray-500 pt-5">
              Select your restaurants from quick eat
            </p>
          </div>
          <div data-aos="flip-up" className="w-full max-w-sm">
            <img
              src="https://bslthemes.com/html/quickeat/assets/img/illustration-2.png"
              className="w-full"
              alt="select"
            />
            <p className="text-2xl text-center ">
              <span className="text-5xl  text-gray-400">02</span>
              Select Menu
            </p>
            <p className=" text-center text-gray-500 pt-5">
            Select your menu from their restaurant and take from breakfast , lunch etc whatever
            </p>
          </div>
          <div data-aos="flip-up" className="w-full max-w-sm">
            <img
              src="https://bslthemes.com/html/quickeat/assets/img/illustration-3.png"
              className="w-full"
              alt="select"
            />
            <p className="text-2xl text-center ">
              <span className="text-5xl  text-gray-400">03</span>
              Wait for delivery
            </p>
            <p className=" text-center text-gray-500 pt-5">
              After selected your meal all you need is wait for your delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
