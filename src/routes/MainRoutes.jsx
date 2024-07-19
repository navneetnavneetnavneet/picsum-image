import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Users from "../components/Users";
import Notfound from "../components/Notfound";
import { Route, Routes } from "react-router-dom";
import Details from "../components/Details";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<Details />} /> */}

        <Route path="/users" element={<Users />}>
          <Route path="/users/:id" element={<Details />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
