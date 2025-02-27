import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import { FaEye, FaDollarSign, FaBox, FaUsers } from 'react-icons/fa';

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 
                      ml-4 md:ml-0 +jh- transition-all duration-300 py-6 px-6">
        <CardDataStats title="Total views" total="$3.456K" rate="0.43%" levelUp>
          <FaEye className="text-primary dark:text-white text-2xl" />
        </CardDataStats>
        
        <CardDataStats title="Total Profit" total="$45,2K" rate="4.35%" levelUp>
          <FaDollarSign className="text-primary dark:text-white text-2xl" />
        </CardDataStats>
        
        <CardDataStats title="Total Product" total="2.450" rate="2.59%" levelUp>
          <FaBox className="text-primary dark:text-white text-2xl" />
        </CardDataStats>
        
        <CardDataStats title="Total Users" total="3.456" rate="0.95%" levelDown>      
          <FaUsers className="text-primary dark:text-white text-2xl" />
        </CardDataStats>
      </div>
    </>
  );
};

export default ECommerce;
