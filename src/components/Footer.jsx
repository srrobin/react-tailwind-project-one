const Footer = () => {
  return (
    <div className="py-6 text-center bg-slate-900 rounded-t-lg text-indigo-200 ">
      <a
        href="#hero"
        className="block text-xl md:text-2xl font-semibold hover:text-indigo-300"
      >
        Md.Sayam
      </a>
      <a href="mailto:srrobin@gmail.com">srrobin@gmail</a>
      <p className="text-xs md:text-sm mt-3">
        @ Sayam Rahman {new Date().getFullYear()} all rights reserved.
      </p>
    </div>
  );
};

export default Footer;
