import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/service/${service.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{service.title}</h3>
        <p className="text-gray-600 mt-2">{service.shortDescription}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
