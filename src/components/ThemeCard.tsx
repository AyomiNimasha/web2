import { useState } from "react";
import { Link } from "react-router-dom";

import { orderbynewestlinks } from "@/routes/orderbynewestlinks";

import categoryimage1 from "../assets/longdress.jpeg";
import categoryimage2 from "../assets/mididress.jpeg";
import categoryimage3 from "../assets/minidress.jpeg";
import categoryimage4 from "../assets/pants.jpeg";
import categoryimage5 from "../assets/tops.jpeg";
import Button from "./Button";
import { CategoryCard } from "./CategoryCard";
import Filter from "./layout/Filter";

interface Props {
  themeheader: string;
  themetitle: string;
  themedescription: string;
}
// create category list
const categoryList = [
  {
    id: 1,
    categoryimage: categoryimage1,
    categorytitle: "long dress",
  },
  {
    id: 2,
    categoryimage: categoryimage2,
    categorytitle: "mididress",
  },
  {
    id: 3,
    categoryimage: categoryimage3,
    categorytitle: "minidress",
  },
  {
    id: 4,
    categoryimage: categoryimage4,
    categorytitle: "pants",
  },
  {
    id: 5,
    categoryimage: categoryimage5,
    categorytitle: "tops",
  },
];

// create list for order by-newest button

// const orderByNewestItems = [
//   "Newest",
//   "Popularity",
//   "Price high to low",
//   "Price low to high",
// ];

export const ThemeCard = ({
  themeheader,
  themetitle,
  themedescription,
}: Props) => {
  // create function to open filter
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
    console.log("first");
  };

  //create function for load order list array
  const orderList = () => (
    <div>
      {orderbynewestlinks?.map(orderbynewestlink => {
        return (
          <div
            key={orderbynewestlink.id}
            className="flex flex-col items-center bg-slate-100 "
          >
            <Link to={orderbynewestlink.path}>
              {orderbynewestlink.itemName}
            </Link>
          </div>
        );
      })}
    </div>
  );

  const [isOrderListOpen, setIsOrderListOpen] = useState(false);
  const toggleOrderList = () => {
    setIsOrderListOpen(!isOrderListOpen);
  };

  return (
    <>
      <div className="flex p-3">
        <div className=" basis-1/2 gap-2">
          <div className="font-sans text-sm text-gray-700 font-bold">
            {themeheader}
          </div>
          <div className="font-serif text-6xl">{themetitle}</div>
          <div className="font-sans text-sm text-slate-900 font-bold mt-6 w-[700px]">
            {themedescription}
          </div>
        </div>
        <div className="flex flex-col basis-1/2 underline-offset-8  sm:hidden lg:block">
          <div className="flex items-center text-l underline-offset-8 font-bold">
            Explore exciting categories
          </div>
          {/* <div className="flex border border-black"></div> */}
          <div className="flex  gap-3 ">
            {categoryList.map(c => (
              <CategoryCard
                key={c.id}
                categoryimage={c.categoryimage}
                categorytitle={c.categorytitle}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col  lg:hidden">
        <div className="flex gap-2">
          <div className="flex  gap-3 ">
            {categoryList.map(c => (
              <CategoryCard
                key={c.id}
                categoryimage={c.categoryimage}
                categorytitle={c.categorytitle}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex mt-12 ">
        <div className="flex flex-col w-[100px] h-full">
          <Button
            variant={"filled"}
            btnText={"Filter"}
            onClick={toggleFilter}
          />
        </div>
        <div className="w-[200px] h-full">
          <Button
            variant={"filled"}
            btnText={"Order by-Newest"}
            onClick={toggleOrderList}
          />
          {isOrderListOpen && <div>{orderList()}</div>}
        </div>
      </div>
      <div className="m-10">Found .. outfits</div>

      {isFilterVisible && <Filter />}
    </>
  );
};
