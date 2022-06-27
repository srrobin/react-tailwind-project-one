import { useEffect, useState } from "react";
import {
  BsFillBrightnessAltLowFill,
  BsFillBrightnessHighFill,
} from "react-icons/bs";
import "../src/styles/global.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import Works from "./components/Works";
const App = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed right-2 top-2 z-10 bg-indigo-500 text-white rounded-md p-1 text-3xl"
      >
        {theme === "dark" ? (
          <BsFillBrightnessHighFill />
        ) : (
          <BsFillBrightnessAltLowFill />
        )}
      </button>

      <div className="font-inter bg-white dark:bg-slate-800">
        <div className="max-w-5xl mx-auto w-11/12">
          {/* <HeroSection></HeroSection> */}
          <Header></Header>
          <Services></Services>
          <Works></Works>
          <About></About>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default App;
