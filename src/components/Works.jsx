import works from "../data/work";
import SectionTitle from "./SectionTitle";
import WorkItem from "./WorkItem";
const Works = () => {
  return (
    <div className="py-12">
      <SectionTitle id="works">recent work</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {works.map((work) => (
          <WorkItem
            key={work.title}
            imgUrl={work.imgUrl}
            title={work.title}
            tech={work.tech}
          ></WorkItem>
        ))}
      </div>
    </div>
  );
};

export default Works;
