import { ForwardedRef, useEffect, useState } from "react";

interface ImageGenerationProps {
  ref: ForwardedRef<HTMLDivElement>;
  nugget: string;
  verse: string;
}

const ImageGeneration: React.FC<ImageGenerationProps> = ({
  ref,
  nugget,
  verse,
}) => {
  const [fontsize, setFontsize] = useState("text-lg");
  useEffect(() => {
    const newSize = nugget.length > 100 ? "text-sm" : "text-md";
    setFontsize(newSize);
  }, [nugget, verse]);

  return (
    <div ref={ref} className="w-[540px] h-[540px] bg-background p-8">
      <h1 className="text-white text-xl font-bold w-2/3">
        {nugget || "Enter some text..."}
      </h1>
      <p className="text-white">{verse}</p>
    </div>
  );
};

export default ImageGeneration;
