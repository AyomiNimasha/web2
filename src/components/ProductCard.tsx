import React from "react";

interface Props {
  image: string;
  //image2: string;
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
    <div className="flex flex-col border-black py-3 container mx-auto  font-serif text-sm">
      <div className="flex w-[400px] h-[500px] bg-green">
        <img src={image} alt="" />
      </div>
      <h2 className="text-slate-600">{title}</h2>
      <div className="font-bold ">
        <h2>{productName}</h2>
        <h2>{price}</h2>
        <h2 className="">{sizes}</h2>
      </div>

      <h2>{isNew}</h2>
    </div>
  );
};
