import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service || {};
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <Image height={80} width={400} src={img} alt={title}></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="card-actions items-center justify-between">
            <h4 className="font-bold text-primary">Price: {price}</h4>
            <button className="text-orange-300 text-2xl">
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
