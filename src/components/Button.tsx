import React from "react";

interface Props {
  variant: "filled" | "outline"; //optional ?
  btnText: string;
}
const Button = ({ variant, btnText }: Props) => {
  return (
    <div>
      <button className=" border bg-pink-200 bg-opacity-40 hover:bg-orange-300 p-2 w-full">
        {variant === "filled"}
        {variant === "outline"}
        {btnText}
      </button>
    </div>
  );
};
export default Button;
