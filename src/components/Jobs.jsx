import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Jobs = () => {
  const { initialData } = useLoaderData();

  const [filter, setFilter] = useState("all");

  const filteredJobs = initialData.filter((job) => {
    if (filter == "all") {
      return true;
    } else if (filter == "Remote") {
      return job.job_type == "Remote";
    } else if (filter == "Onsite") {
      return job.job_type == "Onsite";
    }
  });

  const handleRemoteJobsClick = () => setFilter("Remote");
  const handleOnSiteJobsClick = () => setFilter("Onsite");
  console.log(filteredJobs);
  return (
    <>
      <div className="bg-purple-100 py-20">
        <h1 className="text-center text-5xl font-bold py-4">Applied Jobs</h1>
      </div>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="text-end py-7">
          <button
            type="button"
            className="btn-primary"
            onClick={handleRemoteJobsClick}
          >
            Remote
          </button>
          <button
            type="button"
            className="btn-primary"
            onClick={handleOnSiteJobsClick}
          >
            Onsite
          </button>
        </div>
        <div className="grid grid-cols-1 py-6">
          <h3 className="text-xl font-semibold">
            {initialData.length
              ? "You have applied in the following jobs: "
              : "Not Yet Applied"}
          </h3>
          <div>
            {filteredJobs &&
              filteredJobs.map((job) => (
                <div
                  className="flex flex-col py-6 sm:flex-row sm:justify-between shadow my-3 px-5"
                  key={job.id}
                >
                  <div className="grid grid-cols-1 md:flex w-full space-x-2 sm:space-x-4 items-center">
                    <img
                      className="md:flex-none py-8 px-7 w-35 h-35 bg-gray-100"
                      src={job.company_logo}
                      alt="Logo"
                    />

                    <div className="grow">
                      <h1 className="font-bold text-2xl">{job.job_title}</h1>
                      <p className="font-medium text-gray-400">
                        {job.company_name}
                      </p>
                      <div className="flex items-center gap-3 py-3">
                        <button
                          type="button"
                          className="py-4 px-5 border border-purple-500 hover:bg-purple-700 hover:text-white font-bold rounded"
                        >
                          {job.job_type}
                        </button>
                        <button
                          type="button"
                          className="py-4 px-5 border border-purple-500 hover:bg-purple-700 hover:text-white font-bold rounded"
                        >
                          {job.time}
                        </button>
                      </div>
                      <div className="flex items-center gap-4 text-gray-400">
                        <span className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Salary: {job.salary}
                        </span>
                      </div>
                    </div>
                    <p className="text-right md:flex-none">
                      <Link to={`../job/${job.id}`}>
                        <button type="button" className="btn-primary">
                          View Details
                        </button>
                      </Link>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
