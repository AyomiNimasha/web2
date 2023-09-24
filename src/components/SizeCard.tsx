import React from "react";

interface Props {
  size: string;
}

export const SizeCard = ({ size }: Props) => {
  const sizes = [
    { id: 1, size: "UK8" },
    { id: 1, size: "UK10" },
    { id: 1, size: "UK12" },
    { id: 1, size: "UK14" },
    { id: 1, size: "UK16" },
  ];
  return (
    <div>
      <span className="text-red-500 border border-black rounded-md p-1">{size}</span>
    </div>
  );
};
