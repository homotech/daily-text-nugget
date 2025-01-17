"use client";
import React, { useState, useRef } from "react";
import ImageGeneration from "../components/imageGeneration"; // Adjust the path as necessary
import html2canvas from "html2canvas";

const Home = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!imageRef.current) return;

    const options = {
      width: 540,
      height: 540,
      scale: 2,
    };

    //capture the dom element
    const canvas = await html2canvas(imageRef.current, options);
    const dataURL = canvas.toDataURL("image/png");

    //Trigger the download
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "nugget-image.png";
    link.click();
  };

  const [nuggets, setNuggets] = useState({
    nugget: "",
    verse: "",
  });

  const handleClick = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setNuggets((prevNuggets) => ({
      ...prevNuggets,
      [name]: value,
    }));
  };
  return (
    <div className="p-4 flex gap-4">
      <div className="border-2 border-red-200 flex-1">
        <div className="mb-4">
          <label htmlFor="nugget">Nugget</label>
          <textarea
            name="nugget"
            maxLength={600}
            id="nugget"
            onChange={handleClick}
            className="border-2 border-black block px-4 py-2 w-full"
            placeholder="Enter the nugget"
            value={nuggets.nugget}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="verse">Verse</label>
          <input
            name="verse"
            id="verse"
            placeholder="Enter the verses"
            onChange={handleClick}
            className="border-2 border-black block px-4 py-2 w-full"
            value={nuggets.verse}
          />
        </div>
        <div>
          <button
            onClick={handleDownload}
            disabled={!nuggets.nugget || !nuggets.verse}
            className="bg-black px-4 py-2 text-white w-full"
          >
            Download Image
          </button>
        </div>
      </div>
      <div className="border-2 border-red-200  justify-between rounded-lg overflow-hidden">
        <ImageGeneration
          ref={imageRef}
          nugget={nuggets.nugget}
          verse={nuggets.verse}
        />
      </div>
    </div>
  );
};

export default Home;
