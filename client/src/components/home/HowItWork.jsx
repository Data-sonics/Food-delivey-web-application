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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          dignissimos earum autem vel eveniet nisi dolorem doloribus?
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
              Non enim praesent elementum facilisis leo vel fringilla. Lectus
              proin nibh nisl condimentum id. Quis varius quam quisque id diam
              vel.
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
              Select Restaurant
            </p>
            <p className=" text-center text-gray-500 pt-5">
              Non enim praesent elementum facilisis leo vel fringilla. Lectus
              proin nibh nisl condimentum id. Quis varius quam quisque id diam
              vel.
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
              Select Restaurant
            </p>
            <p className=" text-center text-gray-500 pt-5">
              Non enim praesent elementum facilisis leo vel fringilla. Lectus
              proin nibh nisl condimentum id. Quis varius quam quisque id diam
              vel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
