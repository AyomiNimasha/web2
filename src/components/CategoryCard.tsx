interface Props {
  categoryimage: string;
  categorytitle: string;
}

export const CategoryCard = ({ categoryimage, categorytitle }: Props) => {
  return (
    <div className="flex flex-col font-sans font-bold text-center mt-4 items-end gap-3 bg-green-600">
      <div className=" w-32 h-40">
        <img src={categoryimage} alt="" className="w-full h-full" />
        {categorytitle}
      </div>
    </div>
  );
};
