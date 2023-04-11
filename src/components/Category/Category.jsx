import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const categories = useLoaderData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-between gap-5">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-purple-100 py-7 px-8 rounded mb-4 hover:bg-purple-50"
        >
          <img
            src={category.category_logo}
            alt=""
            className="py-4 px-5 bg-purple-200 rounded"
          />
          <h3 className="font-bold text-xl my-3">{category.category_name}</h3>
          <p className="font-medium text-sm text-gray-400">
            {category.jobs_available} jobs available
          </p>
        </div>
      ))}
    </div>
  );
};

export default Category;
