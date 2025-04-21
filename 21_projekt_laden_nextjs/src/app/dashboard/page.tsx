"use client";
import Container from "@/components/Container";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";



//Erzeugen ein neuer Produkt: **********************************************
function Dashboard() {
  const [newProduct, setNewProduct] = useState({ 
    // Ein Objekt, das beim Klicken des Benutzers auf die folgenden untenstehenden Schaltflächen im Container ausgefüllt werden soll.
    title: "",
    price: "",
    image: "",
    description: ""
  });

  // Da sich die untenstehenden Buttons ändern können, muss diese Funktion geschrieben werden:
  const handleChangeProduct = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value //Jedes Mal wird einer der folgenden Werte: title, price oder image anstelle von value in [name]: value eingesetzt.
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
        price: newProduct.price
      }
    });
  };

  return (
    <div className="bg-slate-300 p-4">
      <Container>
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
            placeholder="قیمت "
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
          name=""
          className="w-full mt-4 bg-slate-100"
          placeholder="توضیحات"
        ></textarea>
        <button
          onClick={handleCreateProduct}
          className="bg-sky-500 text-white rounded px-4 py-1"
        >
          ساخت محصول جدید
        </button>
      </Container>
      
    </div>
    //************************************************************************ */
  );
}

export default Dashboard;
