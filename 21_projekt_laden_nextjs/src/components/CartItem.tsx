import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IProductItemProps } from "./ProductItem";
import AddToCart from "./AddToCart";
import { formatNumberWithCommas } from "@/utilities/number";

interface ICartItemProps {
  id: number; // ID des Produkts
  qty: number; // Anzahl der Produkte
}

function CartItem({ id, qty }: ICartItemProps) {
  const [data, setData] = useState({} as IProductItemProps);

  useEffect(() => {
    // Daten des Produkts anhand der ID abrufen
    axios(`http://localhost:3004/products/${id}`).then((result) => {
      const { data } = result;
      setData(data);
    });
  }, [id]); // 'id' zur Abhängigkeitsliste hinzugefügt

  return (
    <div className="grid grid-cols-12 bg-slate-100 mb-4 ">
      <Image
        className="col-span-3 mt-4 ml-3 rounded-md"
        src={data.image} // Bild des Produkts
        alt={data.title} // Titel des Produkts
        width={200}
        height={200}
      />

      <div className="col-span-7 p-3">
        <h2 className="text-xl font-bold">{data.title} </h2>
        <p>
          تعداد : <span>{qty}</span> {/* Anzahl der Produkte */}
        </p>
        <p>
          قیمت محصول :<span>{formatNumberWithCommas(data.price ?? 0)}$</span> {/* Preis des Produkts */}
        </p>

        <AddToCart id={id.toString()} /> {/* Button zum Warenkorb hinzufügen */}
      </div>
    </div>
  );
}

export default CartItem;
