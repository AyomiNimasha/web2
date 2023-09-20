import React from "react";
import {
  BiCartAdd,
  BiCartAlt,
  BiHeart,
  BiLogIn,
  BiMenu,
  BiSearch,
} from "react-icons/bi";

const NavBar = () => {
  return (
    <div className="flex flex-row font-serif shadow-xl items-center h-20 ml-1 mr-1">
      <div className=" text-2xl mr-3">
        <BiMenu />
      </div>
      <div className="basis-1/4 font-bold text-xl"> CHENARA DODGE</div>
      <div className="flex flex-row text-sm font-bold gap-5 justify-center">
        <div>New-In</div>
        <div>Deals</div>
        <div>Gift Box</div>
        <div>Gift Vouchers</div>
        <div>
          Shop Now
          {/* <ul className="opacity-0 relative inline-block text-left">
            <li>Tops</li>
            <li>Pants</li>
            <li>Skirts</li>
          </ul> */}
        </div>

        <div>Essentials</div>
        <div>Kids Selection</div>
        <div>Embroidery Collection</div>
        <div>Cd X Travel with wife</div>
      </div>
      <div className="flex flex-row basis-1/4 justify-end text-2xl  gap-4">
        <BiCartAdd className="sm:hidden md:hidden lg:block" />
        <BiSearch />
        <BiHeart />
        <BiLogIn className="sm:hidden md:hidden lg:block" />
        <BiCartAlt className="sm:hidden md:hidden lg:block" />
      </div>
    </div>
  );
};
export default NavBar;
