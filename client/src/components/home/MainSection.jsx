export default function Mainsection() {
  return (
    <div className="bg-gradient">
      <section className="container mx-auto">
        <div className=" align-middle flex justify-between">
          <div>
            <h1 className="text-6xl w-[20rem] leading-snug col-span-5 font-bold pt-10 ">
              The Best Restaurants In Your Home
            </h1>
            <p className="text-gray-600 w-[29rem] pt-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              asperiores rem expedita?
            </p>
            <input
              type="search"
              className="w-[400px] h-[50px] rounded-lg ps-1 shadow-xl"
              placeholder="Choose a Restaurant"
            />
            <button className="bg-amber-500 text-white mt-10 w-[100px] h-[50px] rounded-lg font-thin ms-10">
              ORDER NOW
            </button>
          </div>
          <div className="col-span-5">
            <img
              src="https://bslthemes.com/html/quickeat/assets/img/photo-1.png"
              alt="courierman"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
