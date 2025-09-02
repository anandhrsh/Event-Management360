import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/LIVE.webp",
      title: "Live Concerts",
    },
    {
      id: 2,
      url: "/Government.webp",
      title: "Government Events",
    },
    {
      id: 3,
      url: "/Corporate.webp",
      title: "Corporate Events",
    },
    {
      id: 4,
      url: "/Friend.webp",
      title: "College Fests",
    },
    {
      id: 5,
      url: "/HybridEnhancer.jpg",
      title: "Virtual & Hybrid Events",
    },
    {
      id: 6,
      url: "/mice.webp",
      title: "MICE (Meetings, Incentives, Conferences, Exhibitions)",
    },
  ];

  return (
    <div className="services container" id="services">
      <h2>OUR SERVICES</h2>
      <div className="banner">
        {services.map((service) => (
          <div className="item" key={service.id}>
            <img src={service.url} alt={service.title} />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
