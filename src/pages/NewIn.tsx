import { productList } from "@/components/data";
import { ProductCard } from "@/components/ProductCard";
import { ThemeCard } from "@/components/ThemeCard";

export function NewIn() {
  const shopNowProducts = productList.filter(
    product => product.title === "Shop Now | Midi Dresses"
  );
  return (
    <div>
      <div>
        <ThemeCard
          themeheader={"Home | New Arrivals"}
          themetitle={"Effortless Style? Yes Please."}
          themedescription={
            "Be a trend setter.Add something new to spice up your closet. Youo can do all of that with our new arrivals."
          }
        />
      </div>

      <div className="grid grid-cols-4 grid-rows-auto gap-4  mt-16">
        {shopNowProducts.map(p => (
          <ProductCard
            key={p.id}
            image={p.image}
            title={p.title}
            productName={p.productName}
            price={p.price}
            sizes={p.sizes}
            isNew={p.isNew}
          />
        ))}
      </div>
    </div>
  );
}
