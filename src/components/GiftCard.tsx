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
    <div className="flex flex-col text-center shadow-xl items-center sm:max-w-[250px] md:max-w-[250px] lg:max-w-[250px] font-serif font-bold ">
      <div className="relative flex flex-col items-center bg-yellow-200 bg-opacity-50 text-xl font-bold ">
        <span className="absolute -top-6">{giftNumber}</span>
        <img src={giftimage} alt="" />
      </div>
      <div className="bg-opacity-50">
        <div className="text-xl bg-blue-200">{giftTitle}</div>
        <div className="text-sm bg-blue-200">{giftdescription}</div>
      </div>
    </div>
  );
};
