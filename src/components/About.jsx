import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20">
      <div className="w-full md:w-6/12">
        <SectionTitle>about me</SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          veniam dolor consectetur pariatur explicabo, iure nulla. Dolor
          debitis, natus cum ad, fugiat excepturi minima culpa atque modi
          accusantium vel voluptatem?
        </p>
        <a
          href="mailto:srrobin@gmail.com"
          className="text-md md:text-lg underline text-gray-600 dark:text-gray-300 block mt-5 font-normal hover:text-indigo-500 dark:hover:text-indigo-300"
        >
          {" "}
          srrobin@gmail.com
        </a>
      </div>
      <img
        src={`https://github.com/ShaifArfan/react-tailwind-portfolio/blob/main/src/images/hero.jpg?raw=true`}
        alt="profileImage"
        className="w-full md:w-6/12 rounded-lg object-cover"
      />
    </div>
  );
};

export default About;
