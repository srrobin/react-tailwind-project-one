import HeroImage from "../assets/hero.png";
const Header = () => {
  console.log(HeroImage);
  return (
    <section className="bg-[url('https://github.com/Sridhar-C-25/highking/blob/main/highking_vid/src/assets/Background.png?raw=true')] bg-cover bg-center  py-4 md:px-24 px-4">
      <div className="flex md:flex-row flex-col gap-3 pt-20">
        <div className="flex-1">
          <h1
            className="md:text-4xl text-4xl font-semibold tracking-wide md:leading-tight
                leading-snug"
          >
            Hi, This is Sayam
          </h1>
          <p className="text-gray-600 md:w-2/3 md:py-4 py-2 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
            incidunt!
          </p>
          <br />
          {/* <div className="flex md:gap-4 gap-2 flex-wrap">
            <ButtonFill>Contact Us</ButtonFill>
            <ButtonOutline />
          </div> */}
        </div>
        <div className="flex-1  flex justify-center">
          <img src={HeroImage} alt="hero" className="h-2/3" />
        </div>
      </div>
    </section>
  );
};

export default Header;
