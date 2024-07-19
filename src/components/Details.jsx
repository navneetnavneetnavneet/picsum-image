import React from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-3xl font-semibold">{id}</h1>
      <Link to="/users" className="text-red-300 text-xl">
        back
      </Link>
    </div>
  );
};

export default Details;
