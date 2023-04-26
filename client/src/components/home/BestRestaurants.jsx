import RatingStars from "react-rating-stars-component";
import GenresButton from "../unify/Genresbutton";

export default function Bestrestaurants() {
  return (
    <div className="bg-slate-50">
      <section className="mx-auto container pt-16 justify-center flex">
        <div>
          <div className="flex gap-[200px]">
            <div className="w-[600px] bg-white p-10 rounded-xl">
              <h1 className="text-5xl font-bold">
                12 Best Restaurants in Your City
              </h1>
              <p className="text-gray-400 pt-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                nobis.Deasd golod aotqpt mfsraqr bad mg.
              </p>
            </div>
            <div className="flex w-[600px] h-[250px] rounded-xl bg-white p-10">
              <div>
                <img
                  src="https://bslthemes.com/html/quickeat/assets/img/logos-2.jpg"
                  alt="kinnington"
                  className="rounded-lg"
                />
              </div>
              <div className="ms-5">
                <h1 className="text-3xl font-bold hover:text-amber-500 duration-300">
                  Kennington Lane Cafe
                </h1>
                <RatingStars
                  count={5}
                  value={5}
                  size={20}
                  activeColor="#FFA500"
                />
                <div>
                  <GenresButton />
                  <p className="font-thin pt-5">
                    Non enim praesent elementum facilisis leo vel fringilla.
                    Lectus proin nibh nisl condimentum id. Quis varius quam
                    quisque id diam vel.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[200px] mt-10">
            <div className="flex w-[600px] h-[250px] rounded-xl bg-white p-10">
              <div>
                <img
                  src="https://bslthemes.com/html/quickeat/assets/img/logos-2.jpg"
                  alt="kinnington"
                  className="rounded-lg"
                />
              </div>
              <div className="ms-5">
                <h1 className="text-3xl font-bold hover:text-amber-500 duration-300">
                  The Wilmington
                </h1>
                <RatingStars
                  count={5}
                  value={4}
                  size={20}
                  activeColor="#FFA500"
                />
                <div>
                  <GenresButton />
                  <p className="font-thin pt-5">
                    Non enim praesent elementum facilisis leo vel fringilla.
                    Lectus proin nibh nisl condimentum id. Quis varius quam
                    quisque id diam vel.
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="flex w-[600px] h-[250px] rounded-xl bg-white p-10">
              <div>
                <img
                  src="https://bslthemes.com/html/quickeat/assets/img/logos-2.jpg"
                  alt="kinnington"
                  className="rounded-lg"
                />
              </div>
              <div className="ms-5">
                <h1 className="text-3xl font-bold hover:text-amber-500 duration-300">
                  King Arms
                </h1>
                <RatingStars
                  count={5}
                  value={3}
                  size={20}
                  activeColor="#FFA500"
                />
                <div>
                  <GenresButton />
                  <p className="font-thin pt-5">
                    Vulputate enim nulla aliquet porttitor lacus luctus.
                    Suscipit adipiscing bibendum est ultricies integer. Sed
                    adipiscing diam donec adipiscing tristique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center mt-16 pb-12">
        <button className="hover:bg-amber-500 border-2 border-amber-500 text-amber-500 hover:text-white w-[100px] h-[50px] rounded-xl">
          SEE ALL →
        </button>
      </div>
    </div>
  );
}
