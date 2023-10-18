import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

import Button from "../Button";

const Filter = () => {
  const sizes = [
    { id: 1, size: "UK8" },
    { id: 2, size: "UK10" },
    { id: 3, size: "UK12" },
    { id: 4, size: "UK14" },
    { id: 5, size: "UK16" },
  ];

  const [isCloseFilter, setIsCloseFilter] = useState(true);
  const closeFilter = () => {
    setIsCloseFilter(false);
    console.log("second");
  };
  return (
    <div>
      {isCloseFilter && (
        <div className="fixed right-0 top-0 h-full w-1/3 bg-white ">
          <div className="grid grid-cols-3 border-b-2 border-slate-300 p-3  ">
            <div>Filter</div>
            <div className="absolute top-auto right-3">
              <IoCloseSharp onClick={closeFilter} />
            </div>
          </div>
          <div className="grid grid-cols-3 p-3  ">
            <div>Sizes</div>
            <div className="absolute top-auto right-3">
              <RiArrowDropDownLine />
            </div>
          </div>
          <div className="flex flex-wrap flex-grow">
            {sizes.map(s => (
              <div key={s.id} className="w-1/3 p-2">
                <button className="w-full py-2  rounded-md bg-green-400">
                  {s.size}
                </button>
              </div>
            ))}
          </div>
          <div className="flex absolute bottom-4 justify-center w-full border border-slate-300">
            <div className="w-1/2 m-2">
              <Button variant={"filled"} btnText={"Apply Filters"} />
            </div>
            <div className="w-1/2  m-2">
              <Button variant={"filled"} btnText={"Clear All Filters"} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Filter;
