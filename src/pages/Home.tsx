// import { ProductCard } from "@/components/ProductCard";
// import { useAuth } from "@/state/auth";

// import image1 from "../assets/image1.jpg";

// export function Home() {
//   const { logout } = useAuth();
//   const productList = [
//     {
//       id: 1,
//       image: image1,
//       title: "Shop Now | Midi Dresses",
//       productName: "Leah Embroidered Midi Dress",
//       price: 5350,
//       sizes: [
//         "UK8",
//         "UK10",
//         "UK12",
//         "UK14",
//         "UK16",
//         "UK8",
//         "UK10",
//         "UK12",
//         "UK14",
//         "UK16",
//       ],
//       isNew: false,
//     },
//     {
//       id: 2,
//       image: image1,
//       title: "Shop Now | Midi Dresses",
//       productName: "Leah Embroidered Midi Dress",
//       price: 5350,
//       sizes: [
//         "UK8",
//         "UK10",
//         "UK12",
//         "UK14",
//         "UK16",
//         "UK8",
//         "UK10",
//         "UK12",
//         "UK14",
//         "UK16",
//       ],
//       isNew: false,
//     },
//   ];

//   return (
//     <>
//       <div className="flex xs:flex-col sm:flex-row gap-4">
//         {productList.map(p => (
//           <ProductCard
//             key={p.id}
//             image={p.image}
//             title={p.title}
//             productName={p.productName}
//             price={p.price}
//             sizes={p.sizes}
//             isNew={p.isNew}
//           />
//         ))}
//       </div>
//     </>
//   );
// }
