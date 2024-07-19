import React, { useState } from "react";
import axios from "../helper/axios";
import { list } from "postcss";

const About = () => {
  const [details, setDetails] = useState([]);

  const getPosts = async () => {
    try {
      const { data } = await axios.get("/posts");
      setDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-semibold text-blue-600 mb-5">About</h1>
      <button onClick={getPosts} className="bg-red-300 px-4 py-2 rounded-md">
        Get Posts
      </button>
      <hr className="border-none h-[1px] my-5 bg-zinc-400" />

      <div className="details flex flex-wrap my-10 gap-[2%]">
        {details && details.map((dets, idx) => <div key={idx} className="mb-[2%] p-10 rounded-xl w-[32%] bg-red-50">
          <h1 className="text-3xl font-semibold">{dets.title}</h1>
          <h1 className="text-lg mt-3 text-zinc-400">{dets.body}</h1>
        </div>)}
      </div>
    </div>
  );
};

export default About;
