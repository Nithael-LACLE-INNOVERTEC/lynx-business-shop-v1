import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

type CardProps = {
  title: string;
  description: string;
  link: string;
};

const Card: React.FC<CardProps> = ({ title, description, link }) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent) => {
    if (link.startsWith("#")) {
      event.preventDefault();
      const target = document.querySelector(link);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(link);
    }
  };

  return (
    <div className="group relative overflow-hidden bg-white rounded-lg shadow-md border transition-all hover:shadow-xl hover:border-blue-500 p-6 min-h-[240px] w-[280px]"> {/* Mindesthöhe hinzugefügt */}
      <button onClick={handleClick} className="block w-full text-left">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-800 transition-colors mb-6"> {/* Abstand nach unten vergrößert */}
          {description}
        </p>

        {/* Pfeil in einem Kreis, nach unten ausgerichtet und links positioniert */}
        <div className="absolute bottom-12 left-6 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center transition-all group-hover:bg-blue-500">
          <FaArrowRight className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors transform rotate-90" />
        </div>
      </button>
    </div>
  );
};

export default Card;
