import React from 'react';
import { CategoryData }  from '../../data/Category'

export const Category: React.FC<any> = () => {
  return (
    <div className="flex justify-center items-center h-full w-full lg:px-20 mb-10" >
      <ul className="flex w-full h-[37rem] lg:h-[43rem] flex-col flex-wrap gap-8 font-bold">
        { CategoryData?.map((category:any, index:any)=>(
          <li key={index} className="text-center hover:opacity-80 text-lg lg:text-xl font-bold text-[#6471DD] dark:text-[#C1B0EB] lg:mb-2">{category.title}</li>
        ))}
      </ul>
    </div>
  );
};
