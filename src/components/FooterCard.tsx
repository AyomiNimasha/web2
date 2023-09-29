import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTiktok,
  BiLogoWhatsapp,
  BiLogoYoutube,
} from "react-icons/bi";

import Button from "./Button";

export const FooterCard = () => {
  return (
    <div className="flex gap-24 text-xs font-serif font-semibold tracking-wide leading-loose pb-10 bg-teal-100 justify-center">
      <div className="  w-[400px] p-6">
        <div className="bold text-lg">CHENARA DODGE</div>
        <div>
          Sri Lanka's No 01 Women's Clothing Store. You can never go wrong with
          us! Explore the most stunning designs, sure to grab anyone's
          attention.Shop Online and get delivered right to your doorstep.
        </div>
        <div>
          <input
            type="text"
            placeholder="E mail Address"
            className="inline-block outline-slate-500 w-full"
          />
          <Button variant={"filled"} btnText={"Subscribe"} />
        </div>
      </div>
      <div className=" basis-1/4 p-6">
        <div className="bold text-lg">INFORMATION</div>
        <div>About Us</div>
        <div>Privacy & Policy</div>
        <div>Terms & Condition</div>
        <div>Delivery Dates</div>
        <div>Return Policy</div>
        <div>Store Locations</div>
      </div>
      <div className=" basis-1/4 p-6">
        <div className="bold text-lg">Find It Fast</div>
        <div>Shop Now</div>
        <div>Essentials</div>
        <div>Kids Collection</div>
        <div>Embroidery Collection</div>
        <div>Cd X Travel With Wife</div>
      </div>
      <div className=" basis-1/4 p-6">
        <div className="bold text-lg">Get In Touch</div>
        <div>Visit us at Colombo City Centre</div>
        <div>Visit us at Kandy City Centre</div>
        <div>Hotline : (+94)117701801</div>
        <div>Email:hello@chenaradodge.com</div>
        <div className="flex gap-1 text-xl">
          <BiLogoFacebook />
          <BiLogoInstagram />
          <BiLogoWhatsapp />
          <BiLogoTiktok />
          <BiLogoYoutube />
        </div>
      </div>
    </div>
  );
};
