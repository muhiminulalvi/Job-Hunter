import React, { useEffect, useState } from "react";

const JobDetails = () => {
  const [jobs, setJobs] = useState([]);
  const [seeAll, setSeeAll] = useState(false);

  const handleSeeAll = () => {
    setSeeAll(true);
}

  useEffect(() => {
    fetch("jobCollection.json")
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
              <p>{job.location}</p>
              <p>Salary: {job.salary}</p>
            </div>
            <button
              type="button"
              className="rounded border border-purple-500 py-2 px-4 text-white bg-purple-600 hover:text-purple-700 hover:bg-white"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
      {
        !seeAll && (
            <p className="text-center"><button onClick={handleSeeAll} className='btn-primary'>See All Jobs</button></p>
        )
      }
      
    </>
  );
};

export default JobDetails;
