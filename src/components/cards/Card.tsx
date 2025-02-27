import React from "react";
import { FaArrowRight } from "react-icons/fa";

type CardProps = {
  title: string;
  description: string;
  link: string;
};

const Card: React.FC<CardProps> = ({ title, description, link }) => {
  return (
    <a
      href={`/customerservices${link}`}
      className="group relative overflow-hidden bg-white rounded-lg shadow-md border transition-all 
                 hover:shadow-xl hover:border-[#eb8e2f] hover:bg-[#eb8e2f] p-6 
                 min-h-[260px] w-full max-w-[350px] mx-auto block" 
    >
      <h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors mb-2">{title}</h3>
      <p className="text-gray-600 group-hover:text-white transition-colors mb-6">
        {description}
      </p>

      {/* Pfeil-Icon */}
      <div className="absolute bottom-8 left-6 w-10 h-10 bg-[#cf822d] rounded-full flex items-center justify-center 
                      transition-all group-hover:bg-white">
        <FaArrowRight className="w-6 h-6 text-white group-hover:text-[#cf822d] transition-colors transform rotate-90" />
      </div>
    </a>
  );
};

export default Card;

