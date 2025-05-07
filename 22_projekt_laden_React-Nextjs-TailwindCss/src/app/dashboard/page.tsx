"use client";
import Container from "@/components/Container";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";

function Dashboard() {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
  });

  const handleChangeProduct = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleCreateProduct = () => {
    console.log(newProduct);

    axios({
      method: "POST",
      url: "http://localhost:3004/products",
      data: {
        id: Math.floor(Math.random() * 1000).toString(),
        image: newProduct.image,
        title: newProduct.title,
        description: newProduct.description,
        price: newProduct.price,
      },
    });
  };

  return (
    <Container>
    <div className="bg-slate-300 p-4">
   
        <div className="grid grid-cols-3 gap-4 bg-slate-100">
          <input
            onChange={handleChangeProduct}
            name="title"
            type="text"
            placeholder="عنوان"
          />
          <input
            onChange={handleChangeProduct}
            name="price"
            type="text"
            placeholder="قیمت"
          />
          <input
            onChange={handleChangeProduct}
            name="image"
            type="text"
            placeholder="عکس"
          />
        </div>
        <textarea
          onChange={handleChangeProduct}
          name="description"
          className="w-full mt-4 bg-slate-100"
          placeholder="توضیحات"
        ></textarea>
        <button
          onClick={handleCreateProduct}
          className="bg-sky-500 text-white rounded px-4 py-1"
        >
          ساخت محصول جدید
        </button>
      
    </div>
    </Container>
  );
}

export default function Page() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}