import React from "react";
import { Link } from "react-router-dom";

import { FooterLinks } from "@/routes/footerlinks";

export const FooterBarCard = () => {
  return (
    <div className="hidden lg:flex">
      {FooterLinks?.map(footerlink => {
        return (
          <div
            key={footerlink.id}
            className="flex flex-col basis-1/5 font-semibold items-center text-sm bg-orange-200 h-20 justify-center md:block"
          >
            <div className="items-center justify-center text-2xl">
              <Link to={footerlink.path}>{footerlink.icon}</Link>
            </div>
            {footerlink.name}
          </div>
        );
      })}
    </div>
  );
};
