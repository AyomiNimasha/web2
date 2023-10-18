// import React from "react";
// import { BiMenu } from "react-icons/bi";

import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";

import { SideBarLinks } from "@/routes/sidebarlinks";

// to open sidebar
const SideBar = () => {
  const [isDivOpen, setIsDivOpen] = useState(false);

  const toggleDiv = () => {
    setIsDivOpen(!isDivOpen);
  };
  const closeDiv = () => {
    setIsDivOpen(false);
  };

  return (
    <div>
      <button className=" lg:hidden" onClick={toggleDiv}>
        <BiMenu className=" text-2xl cursor-pointer absolute top-0 bg-red-300" />
      </button>
      {isDivOpen && (
        <div className="fixed top-0 h-full w-full bg-slate-100">
          <div className="flex ">
            <div className="m-2 font-bold text-lg ">CHENARA DODGE</div>
            <div className="absolute top-auto right-3  text-xl justify-center m-2">
              <IoCloseSharp onClick={closeDiv} />
            </div>
          </div>
          {SideBarLinks?.map(SideBarLinks => (
            // eslint-disable-next-line react/jsx-key
            <div key={SideBarLinks.id} className="flex flex-row gap-6 m-6">
              <div className="text-2xl">{SideBarLinks.icon}</div>
              <div>{SideBarLinks.title}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default SideBar;

// import React from "react";

// import { SideBarLinks } from "@/routes/sidebarlinks";

// export const SideBar = () => (
//   <div className="w-full font-mono font-semibold text-sm flex flex-col gap-6 mt-6 ml-6">
//     {SideBarLinks?.map(SideBarLinks => (
//       // eslint-disable-next-line react/jsx-key
//       <div className="flex flex-row gap-1">
//         <div key={SideBarLinks.id} className="text-2xl">
//           {SideBarLinks.icon}
//         </div>
//         <div key={SideBarLinks.id}>{SideBarLinks.title}</div>
//       </div>
//     ))}
//   </div>
// );
