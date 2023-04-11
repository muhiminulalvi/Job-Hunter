import React from "react";

const Blog = () => {
  return (
    <>
      <div className="bg-purple-100 py-20">
        <h1 className="text-center text-5xl font-bold py-4">
          Frequently Asked <span className="text-purple-700">Questions</span>
        </h1>
      </div>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="py-4 px-7 border-2 shadow-lg border-purple-500 my-3">
          <p>
            <strong>Question: </strong>When should you use context API?
          </p>
          <p>
            <strong>Answer: </strong>Context API is used to interact with unique
            data and provides assistance with prop-drilling across all levels of
            your react application. It usually applies when several components
            with different nesting levels need access to the same data. The
            Context API is worthwhile to use if the project is short or if we
            concentrate on encapsulating modules. There's no need to pass data
            to the children at every level. It is incredibly reusable and simple
            to maintain.
          </p>
        </div>
        <div className="py-4 px-7 border-2 shadow-lg border-purple-500 my-3">
          <p>
            <strong>Question: </strong>What is a custom hook?
          </p>
          <p>
            <strong>Answer: </strong>When we need to transfer logic between
            several JavaScript functions, we develop Custom Hook. A custom hook,
            whose name starts with the term "use," is a unique JavaScript
            function that can be used for calling other hooks. Hooks are
            reusable. We may extract component logic into a custom Hook when it
            has to be used by multiple components. Example: useEffect,
            useLoaderData, useState etc.
          </p>
        </div>
        <div className="py-4 px-7 border-2 shadow-lg border-purple-500 my-3">
          <p>
            <strong>Question: </strong>What is useRef?
          </p>
          <p>
            <strong>Answer: </strong>useRef() is a built-in React hook which
            accepts an argument as the starting value and returns a reference
            object. It is used to store a mutable value that does not cause to
            re-render when updated. It can also be used to access DOM element.
            useRef() doesn't cause a component to re-render when the value or
            state changes.
          </p>
        </div>
        <div className="py-4 px-7 border-2 shadow-lg border-purple-500 my-3">
          <p>
            <strong>Question: </strong>What is useMemo?
          </p>
          <p>
            <strong>Answer: </strong>useMemo() is a function which returns a
            memoized value of a resource-intensive function that has been
            passed. It is highly useful for improving the speed of a React
            component by removing repetitive heavy computations. The useMemo
            Hook can be used to prevent expensive or resource-intensive
            functions from running indefinitely. In this illustration, we have a
            pricey function that executes after each render. There will be a
            delay in execution if you change the count or add a to-do.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
