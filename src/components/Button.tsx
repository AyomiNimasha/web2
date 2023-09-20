import React from "react";

interface Props {
  variant: "filled" | "outline"; //optional ?
  btnText: string;
}
export const Button = ({ variant, btnText }: Props) => {
  return (
    <div>
      <button className={`rounded-xl `}>
        {variant === "filled"}
        {variant === "outline"}
        {btnText}
      </button>
    </div>
  );
};
