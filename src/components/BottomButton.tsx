import React from "react";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

import Button from "./Button";

export const BottomButton = () => {
  return (
    <div className="flex w-full h-[100px] gap-1">
      <button>
        <BiArrowFromRight />
      </button>
      <Button variant={"filled"} btnText={"1"} />
      <Button variant={"filled"} btnText={"2"} />
      <button>
        <BiArrowFromLeft />
      </button>
    </div>
  );
};
