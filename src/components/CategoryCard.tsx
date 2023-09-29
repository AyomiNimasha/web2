interface Props {
  categoryimage: string;
  categorytitle: string;
}

export const CategoryCard = ({ categoryimage, categorytitle }: Props) => {
  return (
    <div className="flex flex-col font-sans text-center mt-4 items-end gap-3">
      <div className=" w-32 h-40">
        <img src={categoryimage} alt="" className="w-full h-full" />

        <div className="bg-gradient-to-t from-black to-transparent  w-full relative -top-10 text-white h-[40px] text-center ">
          {categorytitle}
        </div>
      </div>
    </div>
  );
};
