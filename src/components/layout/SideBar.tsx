// import React from "react";
// import { BiMenu } from "react-icons/bi";

// import { SideBarLinks } from "@/routes/sidebarlinks";

// interface props {
//   isOpen: boolean;
//   toggleSidebar: () => void;
// }
// const SideBar = ({ isOpen, toggleSidebar }: props) => (
//   <div
//     className={`${
//       isOpen ? "translate-x-0" : "-translate-x-64"
//     } transition-transform transform duration-300 ease-in-out bg-white h-screen w-64 overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-10`}
//   >
//     {/* add close button  */}
//     <div className="flex">
//       <div className=" bg-pink-300">
//         <button onClick={toggleSidebar}>
//           <BiMenu className="relative top-4 left-4 text-2xl cursor-pointer z-20" />
//         </button>
//       </div>
// <div className="bg-blue-400 font-mono font-semibold text-sm flex flex-col gap-6 mt-6 ml-6">
//   {SideBarLinks?.map(SideBarLinks => (
//     // eslint-disable-next-line react/jsx-key
//     <div key={SideBarLinks.id} className="flex flex-row gap-1">
//       <div className="text-2xl">{SideBarLinks.icon}</div>
//       <div>{SideBarLinks.title}</div>
//     </div>
//         ))}
//       </div>
//     </div>
//   </div>
// );
// export default SideBar;

import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

import { SideBarLinks } from "@/routes/sidebarlinks";

const SideBar = () => {
  const [isDivOpen, setIsDivOpen] = useState(false);

  const toggleDiv = () => {
    setIsDivOpen(!isDivOpen);
  };
  return (
    <div className="lg:hidden bg-red-300">
      <button className="bg-amber-300" onClick={toggleDiv}>
        <BiMenu className="bg-green-200 text-2xl cursor-pointer absolute top-4" />
      </button>
      {isDivOpen && (
        <div className="w-full bg-blue-300 font-mono font-semibold text-sm flex flex-col gap-6 mt-6 ml-6 top">
          {SideBarLinks?.map(SideBarLinks => (
            // eslint-disable-next-line react/jsx-key
            <div key={SideBarLinks.id} className="flex flex-row gap-1">
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
