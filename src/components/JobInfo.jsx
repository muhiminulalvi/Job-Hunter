import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobInfo = () => {
  const jobs = useLoaderData();
  //   console.log(jobs);
  const { id } = useParams();
  //   console.log(id);

  const [job_Info, setJob_Info] = useState({});
  useEffect(() => {
    const jobData = jobs.find((job) => job.id == id);
    setJob_Info(jobData);
  }, []);
  console.log(job_Info);
  return (
    <>
      <div className="bg-purple-100 py-20">
        <h1 className="text-center text-5xl font-bold py-4">
          Job <span className="text-purple-700">Details</span>
        </h1>
      </div>
      <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-between">
          <div className="col-span-2">
            <p className="py-4 text-justify">
              <strong>Job Description: </strong>
              {job_Info.description}
            </p>
            <p className="py-4 text-justify">
              <strong>Job Responsibility: </strong>
              {job_Info.responsibility}
            </p>
            <p className="py-4 text-justify">
              <strong>Educational Requirements: </strong>
              <br />
              {job_Info.education}
            </p>
            <p className="py-4 text-justify">
              <strong>Experiences: </strong>
              <br />
              {job_Info.experience}
            </p>
          </div>
          <div>
            <div className="bg-purple-100 py-5 px-4 rounded">
              <h3 className="font-bold py-2">Job Details</h3>
              <hr className="bg-slate-600 w-full h-1" />
              <div className="py-3">
                <p>
                  <strong>Salary: </strong>
                  {job_Info.salary} (Per Month)
                </p>
                <p>
                  <strong>Job Title: </strong>
                  {job_Info.job_title}
                </p>
              </div>
              <hr className="bg-slate-600 w-full h-1" />
              <h3 className="py-4 font-bold">Contact Information</h3>
              <hr className="bg-slate-600 w-full h-1" />
              <div className="pt-4 pb-2 ">
                <p>
                  <strong>Phone: </strong>
                  {job_Info.phone}
                </p>
                <p>
                  <strong>Email: </strong>
                  {job_Info.email}
                </p>
                <p>
                  <strong>Address: </strong>
                  {job_Info.address}
                </p>
              </div>

            </div>
            <button type="button" className="w-full my-2 py-2 px-4 bg-purple-400 rounded text-white hover:text-purple-700 hover:bg-purple-100">Apply Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobInfo;
