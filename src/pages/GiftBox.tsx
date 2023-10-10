import Button from "@/components/Button";
import { GiftCard } from "@/components/GiftCard";

import book from "../assets/giftcard/book.png";
import box from "../assets/giftcard/box.png";
import frock from "../assets/giftcard/frock.png";
import gift from "../assets/giftcard/gift.png";
import greeting from "../assets/giftcard/greeting.png";

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
      giftNumber: "02.",
      giftimage: frock,
      giftTitle: "Add your design's",
      giftdescription: "Select your favorite outfits & add to the gift box.",
    },
    {
      id: 3,
      giftNumber: "03.",
      giftimage: book,
      giftTitle: "Cute Additions",
      giftdescription: "Go that extra mile to put a smile on their face.",
    },
    {
      id: 4,
      giftNumber: "04.",
      giftimage: greeting,
      giftTitle: "Greeting Card",
      giftdescription: "Let them know you feel,type in what needs to be said.",
    },
    {
      id: 5,
      giftNumber: "05.",
      giftimage: box,
      giftTitle: "Send It off",
      giftdescription: "Lets see the face of happiness",
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
        <div className="w-[250px] mt-12 mb-8">
          <Button variant={"filled"} btnText={"Let's get started"} />
        </div>
      </div>

      {/* add giftcrds */}
      <div className="flex gap-14 mt-10">
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
