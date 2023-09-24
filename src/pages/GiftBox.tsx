import Button from "@/components/Button";
import { GiftCard } from "@/components/GiftCard";

import gift from "../assets/gift.png";

export function GiftBox() {
  const giftList = [
    {
      id: 1,
      giftNumber: "01.",
      giftimage: gift,
      giftTitle: "Select the Box",
      giftdescription: "Our standard white box is made to look pure & neat.",
    },
    {
      id: 2,
      giftNumber: "01.",
      giftimage: gift,
      giftTitle: "Select the Box",
      giftdescription: "Our standard white box is made to look pure & neat.",
    },
    {
      id: 3,
      giftNumber: "01.",
      giftimage: gift,
      giftTitle: "Select the Box",
      giftdescription: "Our standard white box is made to look pure & neat.",
    },
    {
      id: 4,
      giftNumber: "01.",
      giftimage: gift,
      giftTitle: "Select the Box",
      giftdescription: "Our standard white box is made to look pure & neat.",
    },
    {
      id: 5,
      giftNumber: "01.",
      giftimage: gift,
      giftTitle: "Select the Box",
      giftdescription: "Our standard white box is made to look pure & neat.",
    },
  ];
  return (
    <div>
      {/* discription about page */}
      <div className="flex flex-col justify-center items-center">
        <div className=" font-serif text-3xl font-bold m-2">
          Build A Gift Box
        </div>
        <div className="font-sans font-medium">
          Express it with Chenara DODGE.
        </div>
        <div className="text-sm font-medium mt-10">
          Share the love & make someone with happy with our amaizing array of
          gifts.Click below to get started.
        </div>
        <div className="w-[250px] mt-16">
          <Button variant={"filled"} btnText={"Let's get started"} />
        </div>
      </div>

      {/* add giftcrds */}
      <div className="flex gap-8 mt-10">
        {giftList.map(g => (
          <GiftCard
            key={g.id}
            giftNumber={g.giftNumber}
            giftimage={g.giftimage}
            giftTitle={g.giftTitle}
            giftdescription={g.giftdescription}
          />
        ))}
      </div>
    </div>
  );
}
