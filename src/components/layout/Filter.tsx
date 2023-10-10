import React from "react";

const Filter = () => {
  const sizes = [
    { id: 1, size: "UK8" },
    { id: 2, size: "UK10" },
    { id: 3, size: "UK12" },
    { id: 4, size: "UK14" },
    { id: 5, size: "UK16" },
  ];
  return (
    <div>
      <div className="grid grid-cols-3 bg-red-500">Filter</div>
      <div>Sizes</div>
      <div className="flex flex-wrap">
        {sizes.map(s => (
          <div key={s.id} className="w-1/3 p-2">
            <button className="w-full py-2  rounded-md bg-green-400">
              {s.size}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Filter;
