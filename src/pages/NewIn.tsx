import { ProductCard } from "@/components/ProductCard";
import { ThemeCard } from "@/components/ThemeCard";

import image1 from "../assets/image1.jpg";

export function NewIn() {
  const productList = [
    {
      id: 1,
      image: image1,
      title: "Shop Now | Midi Dresses",
      productName: "Leah Embroidered Midi Dress",
      price: 5350,
      sizes: ["UK8", "UK10", "UK12", "UK14", "UK16"],
      isNew: false,
    },
    {
      id: 2,
      image: image1,
      title: "Shop Now | Midi Dresses",
      productName: "Leah Embroidered Midi Dress",
      price: 5350,
      sizes: ["UK8", "UK10", "UK12", "UK14", "UK16"],
      isNew: false,
    },
    {
      id: 3,
      image: image1,
      title: "Shop Now | Midi Dresses",
      productName: "Leah Embroidered Midi Dress",
      price: 5350,
      sizes: ["UK8", "UK10", "UK12", "UK14", "UK16"],
      isNew: false,
    },
    {
      id: 4,
      image: image1,
      title: "Shop Now | Midi Dresses",
      productName: "Leah Embroidered Midi Dress",
      price: 5350,
      sizes: ["UK8", "UK10", "UK12", "UK14", "UK16"],
      isNew: false,
    },
    {
      id: 5,
      image: image1,
      title: "Shop Now | Midi Dresses",
      productName: "Leah Embroidered Midi Dress",
      price: 5350,
      sizes: ["UK8", "UK10", "UK12", "UK14", "UK16"],
      isNew: false,
    },
    {
      id: 6,
      image: image1,
      title: "Shop Now | Midi Dresses",
      productName: "Leah Embroidered Midi Dress",
      price: 5350,
      sizes: ["UK8", "UK10", "UK12", "UK14", "UK16"],
      isNew: false,
    },
    {
      id: 7,
      image: image1,
      title: "Shop Now | Midi Dresses",
      productName: "Leah Embroidered Midi Dress",
      price: 5350,
      sizes: ["UK8", "UK10", "UK12", "UK14", "UK16"],
      isNew: false,
    },
    {
      id: 8,
      image: image1,
      title: "Shop Now | Midi Dresses",
      productName: "Leah Embroidered Midi Dress",
      price: 5350,
      sizes: ["UK8", "UK10", "UK12", "UK14", "UK16"],
      isNew: false,
    },
    {
      id: 9,
      image: image1,
      title: "Shop Now | Midi Dresses",
      productName: "Leah Embroidered Midi Dress",
      price: 5350,
      sizes: ["UK8", "UK10", "UK12", "UK14", "UK16"],
      isNew: false,
    },
    {
      id: 10,
      image: image1,
      title: "Shop Now | Midi Dresses",
      productName: "Leah Embroidered Midi Dress",
      price: 5350,
      sizes: ["UK8", "UK10", "UK12", "UK14", "UK16"],
      isNew: false,
    },
    {
      id: 11,
      image: image1,
      title: "Shop Now | Midi Dresses",
      productName: "Leah Embroidered Midi Dress",
      price: 5350,
      sizes: ["UK8", "UK10", "UK12", "UK14", "UK16"],
      isNew: false,
    },
  ];

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
        {productList.map(p => (
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
