import { services } from "../../data/data";

const Services = () => {
  return (
    <section className="sc-services">
      <div className="container">
        <h3 className="title">Our extra services</h3>
        <div className="services-content grid">
          {services.map((service) => (
            <div
              className="services-item overflow-hidden border-gray-200 border-radius-6"
              key={service.id}
            >
              <div className="services-item-img">
                <img src={service.backgroundImg} alt="" />
              </div>
              <div className="services-item-info theme-p">
                <div className="services-item-icon flex items-center justify-center">
                  <img src={service.iconImg} />
                </div>
                <p className="services-item-title font-medium text text-dark">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
