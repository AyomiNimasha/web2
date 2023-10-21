import React from "react";
import { Outlet } from "react-router-dom";

import { BottomButton } from "../BottomButton";
import { Footer } from "./Footer";
import { Header } from "./Header";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export const Layout = () => {
  return (
    <div className="">
      <Header />

      <NavBar />

      <div className="flex overflow-hidden lg:ml-40 lg:mt-10 lg:mr-40 md:ml-0 md:mt-5 md:mr-10">
        {/* Sidebar */}

        {/* Content area */}

        <div className="relative flex flex-col flex-1 overflow-y-hidden overflow-x-hidden">
          {/*  Site header */}
          {/* <Filter /> */}

          <main className="">
            <Outlet />
            <SideBar />
          </main>

          <BottomButton />

          <Footer />
        </div>
      </div>
    </div>
  );
};
