import React from "react";

interface Props {
  variant: "filled" | "outline"; //optional ?
  btnText: string;
  onClick?: () => void;
}
const Button = ({ variant, btnText, onClick }: Props) => {
  return (
    <div>
      <button
        className=" border bg-pink-200 bg-opacity-40 hover:bg-orange-300 p-2 w-full"
        onClick={onClick}
      >
        {btnText}
      </button>
    </div>
  );
};
export default Button;
