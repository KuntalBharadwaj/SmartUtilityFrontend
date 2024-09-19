import React from 'react';
import ServiceCard from '../component/ServiceCard';

const services = [
  {
    id: 1,
    title: 'Uber service',
    image: 'assets/taxi.jpg',
    shortDescription: 'Build scalable websites and apps with modern tech stacks.'
  },
  {
    id: 2,
    title: 'Graphic Design',
    image: 'path-to-your-image.jpg',
    shortDescription: 'Create visually stunning designs for your brand and marketing.'
  },
  // Add more services as needed
];

const ServicesPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
