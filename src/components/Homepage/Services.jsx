import { services } from "@/lib/services";
import ServiceCard from "../Card/ServiceCard";
const Services = () => {
  console.log(services);
  return (
    <div>
      <div className="container text-center mx-auto">
        <h1 className="text-2xl font-bold text-orange-300">Our Services</h1>
        <h3 className="text-5xl">Our Servirces Area</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          laborum!
        </p>
        <div className="container px-10 my-20 mx-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard service={service} key={service._id}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
