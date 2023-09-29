import React from "react";

interface Props {
  size: string;
}

export const SizeCard = ({ size }: Props) => {
  const sizes = [
    { id: 1, size: "UK8" },
    { id: 2, size: "UK10" },
    { id: 3, size: "UK12" },
    { id: 4, size: "UK14" },
    { id: 5, size: "UK16" },
  ];
  return (
    <span className="text-black border border-slate-300 box-border p-1">
      {size}
    </span>
  );
};
