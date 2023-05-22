import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import ChevronRight from "../icon/ChevronRight";

export default function RestaurantsMain() {
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
      <section className="container mx-auto py-8">
        <div
          className=" align-middle flex justify-around items-center"
          data-aos="fade-up"
        >
          <div className="grid gap-5">
            {/* breadcrumbs */}
            <div>
              <ol className="flex items-center  ">
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
                      className=" text-sm font-medium text-gray-500  dark:text-gray-400 "
                    >
                      Restaurants
                    </Link>
                  </div>
                </li>
              </ol>

              {/* restaurant text */}
            </div>
            <div className="my-5 grid gap-8  w-[30rem] ">
              <p className="text-6xl text-amber-500 font-bold ">Restaurants</p>
              <p className="text-gray-600  text-xl ">
                Pretium lectus quam id leo in vitae turpis massa sed. Lorem
                donec massa sapien faucibus et molestie. Vitae elementum
                curabitur vitae nunc.
              </p>
            </div>

            {/* select restaurant */}
          </div>
          {/* restaurant img */}

          <div>
            <img
              src="https://bslthemes.com/html/quickeat/assets/img/photo-11.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
