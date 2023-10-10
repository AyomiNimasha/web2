import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

import { IconLink } from "@/routes/iconlistlink";
import { NavLinks } from "@/routes/navlinks";
// import { NavBarSublinks } from "@/routes/sublinks";

const NavBar = () => {
  return (
    <div className="flex flex-row font-serif shadow-xl shadow-co items-center h-20 ml-1 mr-1 md:ml-10">
      {/* <div className=" text-2xl mr-3 ">
        <BiMenu className="sm:block md:block lg:hidden" />
      </div> */}
      <div className="basis-1/4 font-bold text-xl"> CHENARA DODGE</div>
      <div className="relative flex flex-row text-sm font-bold gap-5 justify-center ">
        {NavLinks?.map(navlink => {
          if (navlink.sublinks?.length !== undefined) {
            return (
              <div key={navlink.id} className="relative group h-full">
                <Link to={navlink.path} className="group">
                  {navlink.title}
                </Link>
                <div className="absolute z-10 shadow-xl hidden group-hover:block w-[300px]  bg-slate-50 space-y-3  p-8 items-center">
                  {navlink.sublinks.map(sublink => (
                    <div key={sublink.id} className="">
                      <Link to={sublink.path} className="">
                        {sublink.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          } else {
            return (
              <div key={navlink.id}>
                <Link to={navlink.path}>{navlink.title}</Link>
              </div>
            );
          }
          // <Link key={navlink.id} to={navlink.path}>
          //   {navlink.title}
          //   {navlink.sublinks?.length !== undefined && (
          //     <div className="absolute left-0 mt-2 hidden group-hover:block ">
          //       {navlink.sublinks.map(sublink => (
          //         <div key={sublink.id} className="relative">
          //           <Link to={sublink.path}>{sublink.title}</Link>
          //         </div>
          //       ))}
          //     </div>
          //   )}
          // </Link>
        })}
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
