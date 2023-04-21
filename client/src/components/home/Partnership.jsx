export default function Partnership() {
  return (
    <section className="bg-[#363636] pb-16">
      <div className="container mx-auto">
        <h1 className="text-white text-5xl text-center pt-[100px]">
          Want to Join Partnership?
        </h1>
        <div className="flex justify-center pt-16 gap-[100px]">
          <div className="border-4  rounded-lg border-amber-500 relative">
            <img
              src="https://bslthemes.com/html/quickeat/assets/img/photo-6.jpg"
              alt=""
              className="rounded-lg"
            />
            <div className="absolute top-[65%] left-[10%]">
              <p className="text-white text-5xl">Join Courier</p>
              <button className="text-white bg-amber-500 w-[150px] h-[50px] rounded-xl mt-5">
                LEARN MORE→
              </button>
            </div>
          </div>
          <div className="border-4  rounded-lg border-amber-500 relative">
            <img
              src="https://bslthemes.com/html/quickeat/assets/img/photo-7.jpg"
              alt=""
              className="rounded-lg"
            />
            <div className="absolute top-[65%] left-[10%]">
              <p className="text-white text-5xl">Join Merchant</p>
              <button className="text-white bg-amber-500 w-[150px] h-[50px] rounded-xl mt-5">
                LEARN MORE→
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
