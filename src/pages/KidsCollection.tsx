import { productList } from "@/components/data";
import { ProductCard } from "@/components/ProductCard";
import { ThemeCard } from "@/components/ThemeCard";

export function KidsCollection() {
  const kidsProducts = productList.filter(
    kidsproduct => kidsproduct.title === "Kids Collection | Midi Dresses"
  );
  return (
    <div>
      <div>
        <ThemeCard
          themeheader={"Home | Kids-Collection"}
          themetitle={"Kids-Collection"}
          themedescription={
            "Introducing our delightful kid's dress collection, where vibrant colors, playful patterns,and chaming designs come together to make every little one shine with joy and style."
          }
        />
      </div>
      <div className="grid grid-cols-4 grid-rows-auto gap-4  mt-16">
        {kidsProducts.map(kp => (
          <ProductCard
            key={kp.id}
            image={kp.image}
            title={kp.title}
            productName={kp.productName}
            price={kp.price}
            sizes={kp.sizes}
            isNew={kp.isNew}
          />
        ))}
      </div>
    </div>
  );
}
