import React from "react";
import { Link } from "react-router-dom";
import Category from "./Category/Category";
import JobDetails from "./JobDetails/JobDetails";

const Home = () => {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <section className=" grid sm:grid-cols-1 md:grid-cols-2 items-center justify-center gap-4">
        <div className="text-start mb-4">
          <h1 className="text-6xl font-bold mb-4 leading-relaxed">
            One Step Closer To Your{" "}
            <span className="text-purple-700">Dream Job</span>
          </h1>
          <p className="font-medium mb-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <Link to="/">
            <button className="btn-primary">Get Started</button>
          </Link>
        </div>
        <div className="text-center">
          <img
            src="\All Images\P3OLGJ1 copy 1.png"
            alt=""
            className="text-center"
          />
        </div>
      </section>
      <div className="text-center pt-20 pb-8 font-bold">
        <h1 className="text-4xl mb-3 text-purple-600">Job Category List</h1>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <Category />
      <div className="text-center pt-20 pb-8 font-bold" id="featured_jobs">
        <h1 className="text-4xl mb-3 text-purple-600">Featured Jobs</h1>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <JobDetails />
      
    </div>
  );
};

export default Home;
