import categoryimage1 from "../assets/longdress.jpeg";
import categoryimage2 from "../assets/mididress.jpeg";
import categoryimage3 from "../assets/minidress.jpeg";
import categoryimage4 from "../assets/pants.jpeg";
import categoryimage5 from "../assets/tops.jpeg";
import Button from "./Button";
import { CategoryCard } from "./CategoryCard";

interface Props {
  themeheader: string;
  themetitle: string;
  themedescription: string;
  //   categorycard: string;
  //   button1: string;
  //   button2: string;
}
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

export const ThemeCard = ({
  themeheader,
  themetitle,
  themedescription,
}: //   categorycard,
//   button1,
//   button2,
Props) => {
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
        <div className="flex flex-col basis-1/2 underline-offset-8">
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
      <div className="flex gap-2">
        <div className="w-[100px] h-full">
          <Button variant={"filled"} btnText={"Filter"} />
        </div>
        <div className="w-[200px] h-full">
          <Button variant={"filled"} btnText={"Order by-Newest"} />
        </div>
      </div>
    </>
  );
};
