const HeroSection = () => {
  return (
    <div id="hero" className="flex  items-center justify-center flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3  font-semibold text-indigo-600 dark:text-indigo-600">
          Hi, This is Sayam
        </h1>
        <p className="text-md md:text-xl max-w-sm mb-3 text-gray-600 text-center dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          incidunt, est saepe expedita odit optio!
        </p>
        <a
          href="#works"
          className=" rounded-md inline-block px-6 py-1 bg-indigo-600 text-white border border-transparent hover:bg-indigo-800 text-base font-medium"
        >
          See Works
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
