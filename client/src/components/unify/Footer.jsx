import Location from "../icon/Location";
import Flogo from "../logo/Flogo";
import Message from "../icon/Message";
import Phone from "../icon/Phone";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const [navTitle, setNavTitle] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/navtitle`)
      .then((res) => {
        setNavTitle(res.data);
      })
      .catch((e) => {
        toast.error("Footer title error ", e);
      });
  }, []);
  return (
    <>
      <footer className="bg-[#363636]">
        <div className="mx-auto w-full">
          <div className="lg:flex lg:gap-8 lg:px-4 lg:py-20 lg:justify-between lg:container lg:mx-auto  md:flex-wrap md:text-center lg:text-left">
            <div className="lg:w-[403px] md:w-full">
              <a href="/" className="md:flex md:justify-center lg:block">
                <Flogo />
              </a>
              <p className="text-6xl text-white font-bold  py-10">
                The Best Restaurants in Your Home
              </p>
            </div>
            <div className="md:hidden lg:block">
              <h2 className="text-2xl mb-6  font-semibold text-[#787878] uppercase">
                Menu
              </h2>
              <ul className=" dark:text-gray-400 font-medium text-[#cfcfcf] ">
                {navTitle.map((name, index) => {
                  return (
                    <li className="mb-4" key={index}>
                      <a
                        href={name.to}
                        className="hover:text-[#F29F05] hover:ease-in duration-300 "
                      >
                        {name.title} &nbsp;&rarr;
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="lg:w-[420px] md:mt-3 md:mx-auto lg:mx-0">
              <h2 className="text-2xl mb-6  font-semibold text-[#787878] uppercase">
                Contacts
              </h2>
              <ul className=" dark:text-gray-400 font-medium text-[#cfcfcf]">
                <li className=" mb-3 ">
                  <a
                    href="/"
                    className="flex hover:text-[#F29F05] hover:ease-in duration-300 "
                  >
                    <Location /> &nbsp; 1717 Harrison St, San Francisco, CA
                    94103, United States
                  </a>
                </li>
                <hr />
                <li className="   hover:text-[#F29F05] hover:ease-in duration-300 ">
                  <a href="mailto:gg@gmail.com" className="flex items-center">
                    <Message /> &nbsp; company@gmail.com
                  </a>
                </li>
                <li className="  hover:text-[#F29F05] hover:ease-in duration-300">
                  <a href="tel:+976 9999 9999" className="flex items-center">
                    <Phone /> &nbsp; +976 9999 9999
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className=" container mx-auto  py-6 md:flex md:items-center md:justify-between    ">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              {new Date().getFullYear()} &copy; All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
              <button className="p-2 bg-white border-2 rounded-full hover:bg-amber-500 hover:border-amber-500 duration-300 hover:text-white text-[#363636] ">
                <a href="https://Facebook.com" target="blank">
                  <FaFacebook size={25} />
                  <span className="sr-only">Facebook page</span>
                </a>
              </button>
              <button className="p-2 bg-white border-2 rounded-full hover:bg-amber-500 hover:border-amber-500 duration-300 hover:text-white text-[#363636]">
                <a href="https://www.instagram.com" target="blank">
                  <FaInstagram size={25} />
                  <span className="sr-only">Instagram page</span>
                </a>
              </button>
              <button className="p-2 bg-white border-2 rounded-full hover:bg-amber-500 hover:border-amber-500 duration-300 hover:text-white text-[#363636]">
                <a href="https://twitter.com" target="blank">
                  <FaTwitter size={25} />
                  <span className="sr-only">Twitter page</span>
                </a>
              </button>
              <button className="p-2 bg-white border-2 rounded-full hover:bg-amber-500 hover:border-amber-500 duration-300 hover:text-white text-[#363636] ">
                <a href="https://github.com" target="blank">
                  <FaGithub size={25} />
                  <span className="sr-only">GitHub account</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
