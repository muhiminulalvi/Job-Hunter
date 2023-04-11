import React from "react";

const SingleJobData = ({ singleData }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    job_type,
    time,
    location,
    salary,
  } = singleData;
  return (
    <li className="flex flex-col py-6 sm:flex-row sm:justify-between border-2 my-3 px-5">
      <div className="grid grid-cols-1 md:flex w-full space-x-2 sm:space-x-4 items-center">
        <img
          className="md:flex-none py-8 px-7 w-35 h-35 bg-gray-100"
          src={company_logo}
          alt="Logo"
        />

        <div className="grow">
          <h1 className="font-bold text-2xl">{job_title}</h1>
          <p className="font-medium text-gray-400">{company_name}</p>
          <div className="flex items-center gap-3 py-3">
          <button type="button" className="py-4 px-5 border border-purple-500 hover:bg-purple-700 hover:text-white font-bold rounded">{job_type}</button>
          <button type="button" className="py-4 px-5 border border-purple-500 hover:bg-purple-700 hover:text-white font-bold rounded">{time}</button>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <span>{location}</span>
            <span>Salary: {salary}</span>
          </div>
        </div>
        <p className="text-right md:flex-none">
          <button type="button" className="btn-primary">
            View Details
          </button>
        </p>
      </div>
    </li>
  );
};

export default SingleJobData;
