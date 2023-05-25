import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { BackgroundContext } from "../contexts/BackgroundProvider";
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { IoIosMail, IoMdMail } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import EmailMenu from "../components/home/Emailmenu";
import Aos from "aos";
import ChevronRight from "../components/icon/ChevronRight";

export default function Contacts() {
  const { setColor } = useContext(BackgroundContext);
  setColor("bg-transparent");
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
    <section className="container mx-auto">
      <div className="flex">
        <div className="my-16" data-aos="fade-up">
          <ol className="flex items-center my-9">
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
                  to="/contactus"
                  className=" text-sm font-medium text-gray-500 "
                >
                  Contacts
                </Link>
              </div>
            </li>
          </ol>
          <div className="sm:text-center mx-auto text-center lg:text-left">
            <h1 className="text-5xl font-bold mt-5">Contact us</h1>
          </div>
          <div className="mt-10 flex gap-8 flex-wrap md:justify-center lg:justify-start sm:justify-start justify-center">
            <div className="w-48 rounded-xl shadow-2xl p-5 hover:bg-black/80 duration-300 hover:text-white">
              <IoLocationSharp className="text-amber-500 text-5xl" />
              <p className="my-2 leading-9">
                Baynzurkh duureg , Seoul bussiness center 
              </p>
            </div>
            <div className="w-48 rounded-xl shadow-2xl p-5 hover:bg-black/80 duration-300 hover:text-white">
              <IoIosMail className="text-amber-500 text-5xl" />
              <p className="mt-5">quick.info@mail.net</p>
              <p className="text-gray-400 text-sm font-thin">
                Mail me for new company and projects
              </p>
              <p className="mt-2">quick.res@mail.net</p>
              <p className="text-gray-400 text-sm font-thin">
                Mail me for review foods and restaurants
              </p>
            </div>
            <div className="w-48 rounded-xl shadow-2xl p-5 hover:bg-black/80 duration-300 hover:text-white">
              <IoCall className="text-amber-500 text-5xl" />
              <p className="mt-5">+9769321239</p>
              <p className="text-xs font-thin">Contact our sales manager</p>
              <p className="mt-2">+9769320501</p>
              <p className="text-xs font-thin">Contact our marketing manager</p>
            </div>
          </div>
        </div>
        <div className="mt-[2%] hidden md:hidden lg:block sm:block" data-aos="fade-up">
          <img
            src="https://bslthemes.com/html/quickeat/assets/img/contacts-1.png"
            alt="callme"
            className="w-[60rem]"
          />
        </div>
      </div>
      <div
        className="flex gap-16 my-10 shadow-2xl p-8 rounded-lg flex-wrap"
        data-aos="fade-up"
      >
        <div className="w-[100%] md:w-[75%] sm:w-[100%] md:mx-auto lg:w-[50%]">
          <h1 className="text-4xl font-bold my-10">Get in touch with us</h1>
          <div className="relative">
            <input
              type="text"
              className="border rounded-lg font-thin w-full h-14 ps-10 ring-white focus:outline-0 "
              placeholder={`Enter your name`}
            />
            <FaUserAlt className="absolute top-0 left-0 mt-5 ml-3 text-gray-400" />
          </div>
          <div className="relative">
            <input
              type="email"
              className="border rounded-lg font-thin w-full h-14 ps-10 my-4 focus:outline-0"
              placeholder={`Enter your email`}
            />
            <IoMdMail className="absolute top-0 left-0 mt-9 ml-3 text-gray-400" />
          </div>
          <textarea
            rows="10"
            type="text"
            className="w-full resize-none border rounded-lg ps-2 pt-5 focus:outline-0 font-thin"
            placeholder="Enter your message"
          ></textarea>
          <button className="text-center duration-500 bg-amber-500 w-full h-14 rounded-lg text-white hover:text-amber-500 hover:bg-transparent hover:border-amber-500 border-2 font-thin my-5 ">
            Submit Application
          </button>
        </div>
        <div className="mx-auto">
          <iframe
            title="locationFrame"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d666.8676028654205!2d106.93400347248576!3d47.92397649373824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDfCsDU1JzI2LjgiTiAxMDbCsDU2JzAzLjYiRQ!5e0!3m2!1smn!2smn!4v1683012245725!5m2!1smn!2smn"
            className="w-[600px] h-[100%] rounded-xl"
          ></iframe>
        </div>
      </div>
      <EmailMenu />
    </section>
  );
}
