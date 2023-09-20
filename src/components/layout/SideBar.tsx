import React from "react";
import {
  BiAddToQueue,
  BiArrowBack,
  BiBookmark,
  BiCalendarExclamation,
  BiCartAlt,
  BiGift,
  BiHeart,
  BiStore,
} from "react-icons/bi";

export const SideBar = () => {
  return (
    <div className="font-mono font-semibold text-sm flex flex-col gap-6 mt-6 ml-6">
      <div className="flex flex-row gap-1">
        <BiAddToQueue className="text-2xl" />
        New In
      </div>
      <div className="flex flex-row gap-1">
        <BiStore />
        Deals
      </div>
      <div className="flex flex-row gap-1">
        <BiGift />
        Gift Box
      </div>
      <div className="flex flex-row gap-1">
        <BiBookmark />
        Gift Vouchers
      </div>
      <div className="flex flex-row gap-1">
        <BiHeart />
        Wishlist
      </div>
      <div className="flex flex-row gap-1">
        <BiCartAlt />
        Track Order
      </div>
      <div className="flex flex-row gap-1">
        <BiArrowBack />
        Return Policy
      </div>
      <div className="flex flex-row gap-1">
        <BiCalendarExclamation />
        About Chenara DODGE
      </div>
    </div>
  );
};
