import React from "react";

import { SizeCard } from "./SizeCard";

interface Props {
  image: string;
  image2?: string;
  title: string;
  productName: string;
  price: number;
  sizes: string[];
  isNew: boolean;
}

export const ProductCard = ({
  image,
  title,
  productName,
  price,
  sizes,
  isNew,
}: Props) => {
  return (
    <div className="flex flex-col p-4 gap-2 justify-center w-full sm:max-w-[450px] sm:min-w-[450px] sm:w-[450px] border border-black">
      <div className="flex w-full h-[500px] ">
        <img src={image} alt="" />
      </div>
      <div className="text-slate-600">{title}</div>
      <div className="font-bold ">
        <div>{productName} </div>
        <div>LKR {price}</div>
        <div className="flex flex-wrap gap-2 mt-2">
          {sizes.map((sizes, index) => (
            <SizeCard key={index} size={sizes} />
          ))}
        </div>
      </div>

      <div>{isNew}</div>
    </div>
  );
};
