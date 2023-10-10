import { productList } from "@/components/data";
import { ProductCard } from "@/components/ProductCard";
import { ThemeCard } from "@/components/ThemeCard";

export function EmbroideryCollection() {
  const embroideryProducts = productList.filter(
    emproducts => emproducts.title === "Embroidery Collection | Midi Dresses"
  );
  return (
    <div>
      <div>
        <ThemeCard
          themeheader={"Home | Embroidery-Collection"}
          themetitle={"Embroidery-Collection"}
          themedescription={
            "Discover our enchanting embrodery dresses collection,where intricate needlework intertwines with elegance,creating stunning garments that elevate any occasion with a touch of timeless artistry."
          }
        />
      </div>
      <div className="grid grid-cols-4 grid-rows-auto gap-4  mt-16">
        {embroideryProducts.map(emp => (
          <ProductCard
            key={emp.id}
            image={emp.image}
            title={emp.title}
            productName={emp.productName}
            price={emp.price}
            sizes={emp.sizes}
            isNew={emp.isNew}
          />
        ))}
      </div>
    </div>
  );
}
