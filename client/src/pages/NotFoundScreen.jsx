import { HomeIcon } from "@heroicons/react/20/solid";
import useCurrentUser from "../hooks/useCurrentUser";

export const NotFoundScreen = () => {
  const { currentUser } = useCurrentUser();

  return (
    <div className="py-20 justify-center bg-gradient">
      <center className="m-auto ">
        <section className="error-section">
          <div className="container">
            <div className="error-page">
              <img
                alt="girl"
                src="https://bslthemes.com/html/quickeat/assets/img/404.png"
                data-aos="flip-up"
                data-aos-delay="300"
                data-aos-duration="400"
                className="aos-init aos-animate object-cover"
              />
              <h4
                data-aos="flip-up"
                data-aos-delay="400"
                data-aos-duration="500"
                className="aos-init aos-animate text-6xl text-amber-500 font-black"
              >
                4 0 4
              </h4>
              <p
                data-aos="flip-up"
                data-aos-delay="600"
                data-aos-duration="700"
                className="aos-init aos-animate text-2xl my-2"
              >
                Sorry not found screen.
              </p>
            </div>
          </div>
        </section>
      </center>
      <center className="mt-6">
        {!currentUser && (
          <button className="rounded-md  p-2 text-xl shadow-xl bg-amber-500 duration-300   hover:shadow-xl focus:outline-0 hover:bg-white ">
            <a href="/">
              <HomeIcon
                width={40}
                className="fill-white hover:fill-amber-500"
              />
            </a>
          </button>
        )}
      </center>
    </div>
  );
};
