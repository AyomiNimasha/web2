import { ProductCard } from "@/components/ProductCard";
import { useAuth } from "@/state/auth";

import image1 from "../assets/image1.jpg";

export function Home() {
  const { logout } = useAuth();
  return (
    <ProductCard
      image={image1}
      title={"Shop Now | Midi Dresses"}
      productName={"Leah Embroidered Midi Dress"}
      price={5350}
      sizes={["UK8", "UK10", "UK12", "UK14", "UK16"]}
      isNew={false}
    />
  );
}
