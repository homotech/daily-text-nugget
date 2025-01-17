import { ForwardedRef, useEffect, useState } from "react";

import { Libre_Baskerville, DM_Sans } from "next/font/google";

const libreBaskerVille = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "900"],
  style: ["normal", "italic"],
});

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
    <div ref={ref} className="w-[540px] h-[540px] bg-background p-8 ">
      <h1
        style={{ fontWeight: "lighter" }}
        className={`${libreBaskerVille.className} text-white text-xl font-bold h-5/6 overflow-hidden mb-4`}
      >
        {nugget || "Enter some text..."}
      </h1>
      <p className={`${dmSans.className} text-white`}>{verse}</p>
      <p
        className={`${dmSans.className} text-white opacity-50`}
        style={{ fontWeight: "300" }}
      >
        Follow us @dailytextnugget
      </p>
    </div>
  );
};

export default ImageGeneration;
