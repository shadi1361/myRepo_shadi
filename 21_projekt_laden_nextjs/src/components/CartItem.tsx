import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IProductItemProps } from "./ProductItem";
import AddToCart from "./AddToCart";
import { formatNumberWithCommas } from "@/utilities/number";

interface ICartItemProps {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartItemProps) {
  const [data, setData] = useState({} as IProductItemProps);

  useEffect(() => {
    axios(`http://localhost:3004/products/${id}`).then((result) => {
      const { data } = result;
      setData(data);
    });
  }, [id]); // Added 'id' to the dependency array

  return (
    <div className="grid grid-cols-12 bg-slate-100 mb-4 ">
      <Image
        className="col-span-3 mt-4 ml-3 rounded-md"
        src={data.image}
        alt={data.title}
        width={200}
        height={200}
      />

      <div className="col-span-7 p-3">
        <h2 className="text-xl font-bold">{data.title} </h2>
        <p>
          تعداد : <span>{qty}</span>
        </p>
        <p>
          قیمت محصول :<span>{formatNumberWithCommas(data.price ?? 0)}$</span>
        </p>

        <AddToCart id={id.toString()} />
      </div>
    </div>
  );
}

export default CartItem;
