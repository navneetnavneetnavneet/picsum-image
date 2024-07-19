import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);

  const getImages = async () => {
    try {
      const { data } = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=10`
      );

      setImages(data);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(page);

  useEffect(() => {
    getImages();
  }, [page]);

  return images.length > 0 ? (
    <div>
      <div className="images flex flex-wrap my-10">
        {images.map((image) => (
          <div key={image.id} className="image w-[20%] mx-5 mb-5">
            <img className="w-full" src={image.download_url} alt="" />
            <h1>{image.author}</h1>
          </div>
        ))}
      </div>
      <div className="text-center my-10 flex justify-center gap-x-5">
        <span
          onClick={() => page > 1 && setPage(page - 1)}
          className="text-xl cursor-pointer hover:text-blue-400"
        >
          Prev
        </span>
        <span className="text-2xl font-semibold">{page}</span>
        <span
          onClick={() => setPage(page + 1)}
          className="text-xl cursor-pointer hover:text-blue-400"
        >
          Next
        </span>
      </div>
    </div>
  ) : (
    <h1 className="text-7xl text-black text-center text-red-300">Loading...</h1>
  );
};

export default Home;
