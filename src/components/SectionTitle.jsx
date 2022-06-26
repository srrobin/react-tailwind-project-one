const SectionTitle = ({ children, id }) => {
  return (
    <h1
      id={id && id}
      className="text-3xl font-bold mb-3 text-indigo-600 dark:text-indigo-500 capitalize "
    >
      {children}
    </h1>
  );
};

export default SectionTitle;
