import React from "react";
import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="px-10">
      <Nav />

      <MainRoutes />
    </div>
  );
};

export default App;
