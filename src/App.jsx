import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className='min-h-[calc(100vh-120px)]'>
        <Outlet />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
