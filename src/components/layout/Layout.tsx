import React from "react";
import { Outlet } from "react-router-dom";

import { BottomButton } from "../BottomButton";
import { Footer } from "./Footer";
import { Header } from "./Header";
import NavBar from "./NavBar";
import { SideBar } from "./SideBar";

export const Layout = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="flex h-screen overflow-hidden pl-40 pt-10 pr-40">
        {/* Sidebar */}
        {/* <SideBar /> */}
        {/* Content area */}

        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}

          <main className="">
            <Outlet />
          </main>

          <BottomButton />

          <Footer />
        </div>
      </div>
    </div>
  );
};
