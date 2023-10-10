import { productList } from "@/components/data";
import { ProductCard } from "@/components/ProductCard";
import { ThemeCard } from "@/components/ThemeCard";

export function TravelWithWife() {
  const travelproducts = productList.filter(
    twproduct => twproduct.title === "Cd X Travel With Wife | Midi Dresses"
  );
  return (
    <div>
      <div>
        <ThemeCard
          themeheader={"Home | Cd-X-Travel-With -Wife"}
          themetitle={"CD-X-Travel-With-Wife"}
          themedescription={""}
        />
      </div>
      <div className="grid grid-cols-4 grid-rows-auto gap-4  mt-16">
        {travelproducts.map(twp => (
          <ProductCard
            key={twp.id}
            image={twp.image}
            title={twp.title}
            productName={twp.productName}
            price={twp.price}
            sizes={twp.sizes}
            isNew={twp.isNew}
          />
        ))}
      </div>
    </div>
  );
}
