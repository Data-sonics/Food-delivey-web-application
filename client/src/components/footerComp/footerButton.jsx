import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function FooterButtonPack() {
  return (
    <>
      <button className="p-2 bg-white border-2 rounded-full hover:bg-amber-500 hover:border-amber-500 duration-300 hover:text-white text-[#363636] ">
        <a href="https://Facebook.com" target="blank">
          <FaFacebook size={25} />
        </a>
      </button>
      <button className="p-2 bg-white border-2 rounded-full hover:bg-amber-500 hover:border-amber-500 duration-300 hover:text-white text-[#363636]">
        <a href="https://www.instagram.com" target="blank">
          <FaInstagram size={25} />
        </a>
      </button>
      <button className="p-2 bg-white border-2 rounded-full hover:bg-amber-500 hover:border-amber-500 duration-300 hover:text-white text-[#363636]">
        <a href="https://twitter.com" target="blank">
          <FaTwitter size={25} />
        </a>
      </button>
      <button className="p-2 bg-white border-2 rounded-full hover:bg-amber-500 hover:border-amber-500 duration-300 hover:text-white text-[#363636] ">
        <a href="https://github.com" target="blank">
          <FaGithub size={25} />
        </a>
      </button>
    </>
  );
}
