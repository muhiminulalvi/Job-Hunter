import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const JobDetails = () => {
  const [jobs, setJobs] = useState([]);
  const [seeAll, setSeeAll] = useState(false);

  const handleSeeAll = () => {
    setSeeAll(true);
  };

  useEffect(() => {
    fetch("/jobCollection.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4">
        {jobs.slice(0, seeAll ? 6 : 4).map((job) => (
          <div className="border rounded py-5 px-7 shadow-lg" key={job.id}>
            <img src={job.company_logo} alt="" className="py-4" />
            <h3 className="font-bold ">{job.job_title}</h3>
            <p className="font-medium">{job.company_name}</p>
            <div className="py-2 flex gap-3">
              <button
                type="button"
                className="rounded border border-purple-500 py-2 px-4 text-purple-700"
              >
                {job.job_type}
              </button>
              <button
                type="button"
                className="rounded border border-purple-500 py-2 px-4 text-purple-700"
              >
                {job.time}
              </button>
            </div>
            <div className="py-2 flex gap-3 font-medium">
              <p className="flex">
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
              </p>
              <p className="flex">
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
              </p>
            </div>
            <Link to={`../job/${job.id}`}>
              <button
                type="button"
                className="rounded border border-purple-500 py-2 px-4 text-white bg-purple-600 hover:text-purple-700 hover:bg-white"
              >
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
      {!seeAll && (
        <p className="text-center">
          <button onClick={handleSeeAll} className="btn-primary">
            See All Jobs
          </button>
        </p>
      )}
    </>
  );
};

export default JobDetails;
