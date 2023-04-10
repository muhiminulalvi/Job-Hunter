import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div className='flex items-center justify-between flex-wrap gap-1'>
            {
                categories.map((category, index) => (
                    <div key={index} className='bg-purple-100 py-7 px-8 rounded mb-4 w-full md:w-1/5'>
                        <img src={category.category_logo} alt="" className='py-4 px-5 bg-purple-200 rounded' />
                        <h3 className='font-bold text-xl my-3'>{category.category_name}</h3>
                        <p className='font-medium text-sm text-gray-400'>{category.jobs_available} jobs available</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Category;