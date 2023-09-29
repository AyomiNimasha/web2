interface Props {
  giftNumber: string;
  giftimage: string;
  giftTitle: string;
  giftdescription: string;
}

export const GiftCard = ({
  giftNumber,
  giftimage,
  giftTitle,
  giftdescription,
}: Props) => {
  return (
    <div className="flex flex-col text-center shadow-xl items-center  font-serif font-bold  ">
      <div className="relative flex flex-col items-center text-xl font-bold w-64 h-32  bg-yellow-200 bg-opacity-100">
        <span className="absolute -top-6">{giftNumber}</span>
        <img src={giftimage} alt="" className="w-ful h-full" />
      </div>
      <div className="bg-opacity-50 bg-blue-200 w-64 h-32">
        <div className="text-xl">{giftTitle}</div>
        <div className="text-sm">{giftdescription}</div>
      </div>
    </div>
  );
};
