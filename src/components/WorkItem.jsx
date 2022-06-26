const WorkItem = ({ imgUrl, title, tech }) => {
  return (
    <div className="bg-slate-100 dark:bg-slate-600 rounded-lg overflow-hidden">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-36 md:h-48 object-cover"
      />
      <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
        <h1 className="text-lg md:text-xl font-semibold mb-2">{title}</h1>
        <p className="flex flex-wrap gap-2 text-xs md:text-sm">
          {tech.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1 bg-slate-300 dark:bg-slate-900 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default WorkItem;
