import { BiMenu } from "react-icons/bi";

import { IconLink } from "@/routes/iconlistlink";
import { NavLinks } from "@/routes/navlinks";

const NavBar = () => {
  return (
    <div className="flex flex-row font-serif shadow-xl items-center h-20 ml-1 mr-1">
      <div className=" text-2xl mr-3 ">
        <BiMenu className="sm:block md:block lg:hidden" />
      </div>
      <div className="basis-1/4 font-bold text-xl"> CHENARA DODGE</div>
      <div className="flex flex-row text-sm font-bold gap-5 justify-center ">
        {NavLinks?.map(navlinks => (
          <div key={navlinks.id}>{navlinks.title}</div>
        ))}
      </div>
      <div className="flex flex-row basis-1/4 justify-end text-2xl gap-4">
        {IconLink?.map(iconlinks => (
          <div key={iconlinks.id}>{iconlinks.icon}</div>
        ))}
      </div>
    </div>
  );
};
export default NavBar;
