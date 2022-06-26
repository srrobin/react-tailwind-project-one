import ServicesInfo from "../data/ServicesInfo";
import SectionTitle from "./SectionTitle";
import ServiceItem from "./ServiceItem";
const Services = () => {
  return (
    <div className="py-12">
      <SectionTitle>Our ServicesInfo</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {ServicesInfo.map((service) => (
          <ServiceItem
            key={service.title}
            icon={service.icon}
            title={service.title}
            desc={service.description}
          ></ServiceItem>
        ))}
      </div>
    </div>
  );
};

export default Services;
