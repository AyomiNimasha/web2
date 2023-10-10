import { productList } from "@/components/data";
import { ProductCard } from "@/components/ProductCard";
import { ThemeCard } from "@/components/ThemeCard";

export function Essentials() {
  const essentialsProducts = productList.filter(
    esproduct => esproduct.title === "Essentials | Midi Dresses"
  );
  return (
    <div>
      <div>
        <ThemeCard
          themeheader={"Home | Essentials"}
          themetitle={"Essentials"}
          themedescription={
            "Introducing our Essentials Collection, where timeless style meets everyday comfort.Discover must-have wardrope staples that effortlessly elevate your look with ease."
          }
        />
      </div>
      <div className="grid grid-cols-4 grid-rows-auto gap-4  mt-16">
        {essentialsProducts.map(esp => (
          <ProductCard
            key={esp.id}
            image={esp.image}
            title={esp.title}
            productName={esp.productName}
            price={esp.price}
            sizes={esp.sizes}
            isNew={esp.isNew}
          />
        ))}
      </div>
    </div>
  );
}
