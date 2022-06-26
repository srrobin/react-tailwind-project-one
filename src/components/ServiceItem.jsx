const ServiceItem = ({ icon, title, desc }) => {
  return (
    <div
      className="bg-slate-300 hover:bg-slate-200 p-5 dark:bg-slate-600 
    dark:hover:bg-slate-900 hover:-translate-y-2 transform transition rounded-md "
    >
      <div className="text-gray-600 dark:text-gray-300 w-6 h-6 mb-3">
        {icon}
      </div>
      <h1 className="text-gray-600 text-lg font-semibold dark:text-gray-300 mb-1">
        {title}
      </h1>
      <p className="text-md text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
  );
};

export default ServiceItem;
