import React from "react";

import { SideBarLinks } from "@/routes/sidebarlinks";

export const SideBar = () => (
  <div className="font-mono font-semibold text-sm flex flex-col gap-6 mt-6 ml-6">
    {SideBarLinks?.map(SideBarLinks => (
      // eslint-disable-next-line react/jsx-key
      <div className="flex flex-row gap-1">
        <div key={SideBarLinks.id} className="text-2xl">
          {SideBarLinks.icon}
        </div>
        <div key={SideBarLinks.id}>{SideBarLinks.title}</div>
      </div>
    ))}
  </div>
);
