import axios from "axios";
import React, { useEffect, useState } from "react";

import Login from "./Login.jpg";

export function DataForm() {
  const categories = [
    {
      name: "Essentials",
      subCategories: ["T Shirts", "Tops", "kinit Dress", "Co Ords"],
    },
    {
      name: "Kids Collection",
      subCategories: ["Dress", "Tops", "Two Piece Sets"],
    },
    {
      name: "Embroidery",
      subCategories: ["Midi Dress", "Maxi Dresses", "Tops", "Mini Dresses"],
    },
  ];
  const databaseUrl = "http://localhost:3000/clothes";
  const [productID, setProductID] = useState("");
  const [productImage01, setProductImage01] = useState("");
  const [productImage02, setProductImage02] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [data, setData] = useState([]);

  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const categoryChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCategory(e.target.value);
    setSubCategory("");
  };

  const submit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${databaseUrl}`, {
        productID: productID,
        image: productImage01,
        image2: productImage02,
        category: category,
        subCtegory: subCategory,
        productName: productName,
        price: price,
        sizes: size,
      });
      console.log(response.data);
      setProductID("");
      setProductImage01("");
      setProductImage02("");
      setCategory("");
      setSubCategory("");
      setProductName("");
      setPrice("");
      setSize("");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    async function getClothes() {
      try {
        const response = await axios.get(`${databaseUrl}`);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getClothes();
  }, [data]);
  console.log(data);
  return (
    <div
      style={{
        backgroundImage: `url(${Login})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col ">
        <div className="flex p-6 justify-center text-3xl font-semibold font-serif text-blue-950">
          Add Product Items In Here
        </div>
        <div className="flex w-full font-medium  justify-center pb-16">
          <form
            className="flex-col items-center p-4 w-1/2 bg-blue-100 bg-opacity-10 rounded-3xl text-white"
            onSubmit={submit}
          >
            <div className="flex flex-col w-full pl-24 pr-24">
              <span className="flex p-2 text-lg">Product ID</span>
              <span className="flex ">
                <input
                  required
                  type="text"
                  placeholder=""
                  className="w-full p-2 bg-transparent border border-solid border-blue-950 rounded-lg text-black"
                  onChange={e => setProductID(e.target.value)}
                />
              </span>
            </div>
            <div className="flex flex-col w-full pl-24 pr-24">
              <span className="flex p-2 text-lg">Product Image 01</span>
              <span className="flex ">
                <input
                  required
                  type="text"
                  placeholder=""
                  className="w-full p-2 bg-transparent border border-solid border-blue-950 rounded-lg text-black"
                  onChange={e => setProductImage01(e.target.value)}
                />
              </span>
            </div>
            <div className="flex flex-col w-full pl-24 pr-24">
              <span className="flex p-2 text-lg">Product Image 02</span>
              <span className="flex ">
                <input
                  required
                  type="text"
                  placeholder=""
                  className="w-full p-2 bg-transparent border border-solid border-blue-950 rounded-lg text-black"
                  onChange={e => setProductImage02(e.target.value)}
                />
              </span>
            </div>
            <div className="flex flex-col w-full pl-24 pr-24">
              <span className="flex p-2 text-lg">Category</span>
              <select
                name="category"
                id="category"
                value={category}
                className="w-full p-2 bg-transparent border border-solid border-blue-950 rounded-lg text-black"
                onChange={categoryChange}
              >
                <option value="">--Main Category--</option>
                {categories.map(cat => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-full pl-24 pr-24">
              <span className="flex p-2 text-lg">Sub Category</span>

              <select
                name="subCategory"
                id="subCategory"
                value={subCategory}
                className="w-full p-2 bg-transparent border border-solid border-blue-950 rounded-lg text-black"
                onChange={e => setSubCategory(e.target.value)}
              >
                <option value="">--Sub Category--</option>
                {categories
                  .find(cat => cat.name === category)
                  ?.subCategories.map(subcat => (
                    <option key={subcat} value={subcat}>
                      {subcat}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex flex-col w-full pl-24 pr-24 ">
              <span className="flex p-2 text-lg">Product Name</span>
              <span className="flex ">
                <input
                  required
                  type="text"
                  placeholder=""
                  className="w-full p-2 bg-transparent border border-solid border-blue-950 rounded-lg text-black"
                  onChange={e => setProductName(e.target.value)}
                />
              </span>
            </div>
            <div className="flex flex-col w-full pl-24 pr-24">
              <span className="flex p-2 text-lg">Price</span>
              <span className="flex ">
                <input
                  required
                  type="text"
                  placeholder=""
                  className="w-full p-2 bg-transparent border border-solid border-blue-950 rounded-lg text-black"
                  onChange={e => setPrice(e.target.value)}
                />
              </span>
            </div>
            <div className="flex flex-col w-full pl-24 pr-24">
              <span className="flex p-2 text-lg">Available Sizes</span>
              <span className="flex ">
                <input
                  required
                  type="text"
                  placeholder=""
                  className="w-full p-2 bg-transparent border border-solid border-blue-950 rounded-lg text-black"
                  onChange={e => setSize(e.target.value)}
                />
              </span>
            </div>
            <div className="flex justify-center pt-10 pb-2 w-full ">
              <button type="submit" className="bg-blue-800 w-1/3 h-10">
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
