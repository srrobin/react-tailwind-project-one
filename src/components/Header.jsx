const Header = () => {
  return (
    <section className="bg-[url('https://github.com/Sridhar-C-25/highking/blob/main/highking_vid/src/assets/Background.png?raw=true')] bg-cover bg-center  py-4 md:px-24 px-4">
      <div className="flex md:flex-row flex-col gap-5 pt-20">
        <div className="flex-1">
          <h1
            className="md:text-5xl text-4xl font-semibold tracking-wide md:leading-tight
                leading-snug"
          >
            Be prepared for the mountains and beyond.
          </h1>
          <p className="text-gray-600 md:w-2/3 md:py-4 py-2 leading-relaxed">
            Are you looking for amazing hiking travel? Don’t worry! We got it
            for you!
          </p>
          <br />
          {/* <div className="flex md:gap-4 gap-2 flex-wrap">
            <ButtonFill>Contact Us</ButtonFill>
            <ButtonOutline />
          </div> */}
        </div>
        <div className="flex-1  flex justify-center">
          <img
            src={`
                https://video.fdac7-1.fna.fbcdn.net/v/t39.30808-6/289639572_5231689526922295_5436575506140437691_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rSBfglD7FMgAX_8hKVN&_nc_ht=video.fdac7-1.fna&oh=00_AT9QxK07zLTJpQpRPJsv0JZ-x4ZLSf5Vt_FcL6UKxkDwSQ&oe=62BCF07A`}
            alt="hero"
            className="h-2/3"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
